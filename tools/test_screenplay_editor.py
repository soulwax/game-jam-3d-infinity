#!/usr/bin/env python3
"""Headless regression checks for the screenplay editor's data layer."""

from __future__ import annotations

import importlib.util
from pathlib import Path
import sys
import tempfile


ROOT = Path(__file__).resolve().parents[1]
EDITOR_PATH = ROOT / "tools" / "screenplay_editor.py"
SPEC = importlib.util.spec_from_file_location("screenplay_editor", EDITOR_PATH)
if SPEC is None or SPEC.loader is None:
    raise RuntimeError("could not load screenplay editor")
EDITOR = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = EDITOR
SPEC.loader.exec_module(EDITOR)


def main() -> None:
    source = ROOT / "text" / "story.screenplay"
    script = EDITOR.parse_script(source)
    assert EDITOR.validate_script(script) == []
    assert len(script.sources) == 33
    assert [scene.day for scene in script.scenes] == list(range(1, 22))
    assert len({scene.scene_id for scene in script.scenes}) == 21
    assert sum(len(branch.options) for scene in script.scenes for branch in scene.branches) == 55
    assert {"hesitant", "broken-radio", "under-breath"}.issubset(set(EDITOR.CUES))

    encoded = EDITOR.encode_script(script)
    with tempfile.TemporaryDirectory(prefix="screenplay-editor-") as directory:
        roundtrip_path = Path(directory) / "story.screenplay"
        roundtrip_path.write_text(encoded, encoding="utf-8")
        roundtrip = EDITOR.parse_script(roundtrip_path)
        assert [scene.title for scene in roundtrip.scenes] == [
            scene.title for scene in script.scenes
        ]
        assert [scene.day for scene in roundtrip.scenes] == [
            scene.day for scene in script.scenes
        ]

    script.events.append(
        EDITOR.Event(
            "event-test-01",
            "visitor",
            1,
            15.5,
            "A visitor arrives",
            "text/visitors/ayling.txt",
            "ayling",
            "hesitant",
            ["visitor.present=true", "residue.test=threshold"],
            "day-02",
            random_from=16.0,
            random_to=18.5,
        )
    )
    with tempfile.TemporaryDirectory(prefix="screenplay-events-") as directory:
        event_path = Path(directory) / "story.screenplay"
        event_path.write_text(EDITOR.encode_script(script), encoding="utf-8")
        event_script = EDITOR.parse_script(event_path)
        event = next(
            candidate for candidate in event_script.events
            if candidate.event_id == "event-test-01"
        )
        assert event.kind == "visitor"
        assert event.hour == 15.5
        assert event.cue == "hesitant"
        assert event.effects == ["visitor.present=true", "residue.test=threshold"]
        assert event.next_scene == "day-02"
        assert event.random_from == 16.0
        assert event.random_to == 18.5

    with tempfile.NamedTemporaryFile("w", suffix=".screenplay", delete=False) as malformed:
        malformed.write("OPTION orphan END | This has no branch\n")
        malformed_path = Path(malformed.name)
    try:
        try:
            EDITOR.parse_script(malformed_path)
        except ValueError as error:
            assert "OPTION appears before its parent" in str(error)
        else:
            raise AssertionError("malformed screenplay was accepted")
    finally:
        malformed_path.unlink(missing_ok=True)

    with tempfile.NamedTemporaryFile("w", suffix=".screenplay", delete=False) as malformed_event:
        malformed_event.write("EVENT broken visitor 1 12 | Broken\nEVENT_EFFECT | missing-equals\n")
        malformed_event_path = Path(malformed_event.name)
    try:
        try:
            EDITOR.parse_script(malformed_event_path)
        except ValueError as error:
            assert "EVENT_EFFECT needs key=value" in str(error)
        else:
            raise AssertionError("malformed event effect was accepted")
    finally:
        malformed_event_path.unlink(missing_ok=True)

    invalid = EDITOR.Script(
        scenes=[EDITOR.Scene("day-01", 1, "Opening", branches=[EDITOR.Branch("choice", "What now?", [
            EDITOR.Option("same", "missing-day", "Go on"),
            EDITOR.Option("same", "END", "Stay"),
        ])])],
    )
    issues = EDITOR.validate_script(invalid)
    assert any("missing scene" in issue for issue in issues)
    assert any("duplicate answer ID" in issue for issue in issues)

    print("screenplay editor data checks: ok")


if __name__ == "__main__":
    main()
