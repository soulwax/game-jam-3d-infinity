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
    assert len(script.sources) == 33
    assert [scene.day for scene in script.scenes] == list(range(1, 22))
    assert len({scene.scene_id for scene in script.scenes}) == 21
    assert sum(len(branch.options) for scene in script.scenes for branch in scene.branches) == 55

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

    print("screenplay editor data checks: ok")


if __name__ == "__main__":
    main()
