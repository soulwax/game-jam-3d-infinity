import importlib.util
import sys
import pathlib
import tempfile
import random
import argparse

spec = importlib.util.spec_from_file_location(
    "tts", pathlib.Path(__file__).parent / "tts.py")
tts = importlib.util.module_from_spec(spec)
sys.modules["tts"] = tts
spec.loader.exec_module(tts)


def test_parse_forward_directives():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@tone formal\n"
            "@part p1\n"
            "Text one.\n"
            "@part p2\n"
            "Text two.\n"
        )
        units = tts.parse([f])

        assert len(units) == 1
        assert units[0].stem == "broadcast-day01"
        assert units[0].direction["tone"] == "formal"
        assert len(units[0].parts) == 2
        assert units[0].parts[0].text == "Text one."
        assert units[0].parts[1].text == "Text two."


def test_parse_forward_directive_override():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@tone formal\n"
            "@part p1\n"
            "Text one.\n"
            "@tone casual\n"
            "@part p2\n"
            "Text two.\n"
        )
        units = tts.parse([f])

        assert units[0].direction["tone"] == "casual"


def test_parse_cue_attaches_to_preceding_tier():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@tier full.1\n"
            "Text one.\n"
            "@cue letterbox\n"
            "@tier full.2\n"
            "Text two.\n"
            "@cue flat-affect\n"
        )
        units = tts.parse([f])

        assert len(units) == 2
        assert units[0].stem == "speaker-day01-full-1"
        assert "letterbox" in units[0].cues
        assert units[1].stem == "speaker-day01-full-2"
        assert "flat-affect" in units[1].cues


def test_parse_cue_attaches_to_preceding_part():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@cue letterbox\n"
            "@part p2\n"
            "Text two.\n"
            "@cue flat-affect\n"
        )
        units = tts.parse([f])

        assert len(units) == 1
        assert "letterbox" in units[0].cues
        assert "flat-affect" in units[0].cues


def test_parse_cue_after_last_part_lands_on_whole_day():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@part p2\n"
            "Text two.\n"
            "@cue word-missing\n"
        )
        units = tts.parse([f])

        assert len(units) == 1
        assert "word-missing" in units[0].cues


def test_parse_visitor_resets_scope():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "test.txt"
        f.write_text(
            "@visitor first\n"
            "@day 1\n"
            "@tier full.1\n"
            "Text one.\n"
            "@cue letterbox\n"
            "@visitor second\n"
            "@day 2\n"
            "@tier full.1\n"
            "Text two.\n"
            "@cue flat-affect\n"
        )
        units = tts.parse([f])

        assert len(units) == 2
        assert units[0].speaker == "first"
        assert units[0].day == 1
        assert units[1].speaker == "second"
        assert units[1].day == 2


def test_parse_part_accumulates_per_day():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@part p2\n"
            "Text two.\n"
            "@day 2\n"
            "@part p1\n"
            "Text three.\n"
        )
        units = tts.parse([f])

        assert len(units) == 2
        assert units[0].stem == "broadcast-day01"
        assert len(units[0].parts) == 2
        assert units[1].stem == "broadcast-day02"
        assert len(units[1].parts) == 1


def test_parse_tier_produces_one_unit_each():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@tier full.1\n"
            "Text one.\n"
            "@tier full.2\n"
            "Text two.\n"
        )
        units = tts.parse([f])

        assert len(units) == 2
        assert units[0].stem == "speaker-day01-full-1"
        assert units[1].stem == "speaker-day01-full-2"


def test_parse_em_dash_part_is_absent():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@part p2\n"
            "—\n"
            "@part p3\n"
            "Text three.\n",
            encoding="utf-8"
        )
        units = tts.parse([f])

        assert len(units) == 1
        assert not units[0].parts[0].absent
        assert units[0].parts[1].absent
        assert not units[0].parts[2].absent


def test_parse_duplicate_stems_raise_exit():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@day 1\n"
            "@part p1\n"
            "Text two.\n"
        )

        try:
            tts.parse([f])
            assert False, "Should have raised SystemExit"
        except SystemExit as e:
            assert "duplicate" in str(e).lower()


def test_parse_unknown_cue_raises_exit():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@part p1\n"
            "Text one.\n"
            "@cue unknown-cue\n"
        )

        try:
            tts.parse([f])
            assert False, "Should have raised SystemExit"
        except SystemExit as e:
            assert "unknown cue" in str(e).lower()


def test_parse_day_non_number_raises_exit():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day abc\n"
            "@part p1\n"
            "Text one.\n"
        )

        try:
            tts.parse([f])
            assert False, "Should have raised SystemExit"
        except SystemExit as e:
            assert "needs a number" in str(e).lower()


def test_parse_cue_before_any_block_raises_exit():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "@day 1\n"
            "@cue letterbox\n"
            "@part p1\n"
            "Text one.\n"
        )

        try:
            tts.parse([f])
            assert False, "Should have raised SystemExit"
        except SystemExit as e:
            assert "before any" in str(e).lower()


def test_pick_cli_flag_beats_all():
    a = argparse.Namespace(tone="aggressive", voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "child", 1, [], direction={"tone": "casual"},
                   cues=["letterbox"])

    result = tts.pick(a, unit, "tone")
    assert result == "aggressive"


def test_pick_cue_beats_forward_directive():
    a = argparse.Namespace(tone=None, voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "child", 1, [], direction={"tone": "casual"},
                   cues=["flat-affect"])

    result = tts.pick(a, unit, "tone")
    assert result == "flat"


def test_pick_forward_directive_beats_speakers():
    a = argparse.Namespace(tone=None, voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "child", 1, [], direction={"tone": "grave"},
                   cues=[])

    result = tts.pick(a, unit, "tone")
    assert result == "grave"


def test_pick_speakers_beats_defaults():
    a = argparse.Namespace(tone=None, voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "child", 1, [], direction={}, cues=[])

    result = tts.pick(a, unit, "tone")
    assert result == "casual"


def test_pick_defaults_as_fallback():
    a = argparse.Namespace(tone=None, voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "unknown-speaker", 1, [], direction={}, cues=[])

    result = tts.pick(a, unit, "tone")
    assert result == "neutral"


def test_chunk_text_no_split_under_limit():
    text = "Short text."
    result = tts.chunk_text(text, 100)
    assert len(result) == 1
    assert result[0] == text


def test_chunk_text_split_at_sentence_ends():
    text = "First sentence. Second sentence. Third sentence."
    result = tts.chunk_text(text, 30)
    assert len(result) > 1
    for chunk in result:
        assert len(chunk) <= 30


def test_chunk_text_single_sentence_over_limit():
    text = "This is a very long sentence with many words that exceeds the limit and should be split by words."
    result = tts.chunk_text(text, 50)
    assert len(result) > 1
    for chunk in result:
        assert len(chunk) <= 50


def test_chunk_text_every_chunk_under_limit():
    text = "One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten."
    result = tts.chunk_text(text, 40)
    for chunk in result:
        if chunk != "One.":
            assert len(chunk) <= 40


def test_chunk_text_unsplittable_word_allowed():
    text = "Supercalifragilisticexpialidocious is a long word."
    result = tts.chunk_text(text, 10)
    assert len(result) >= 1
    assert any(len(chunk) > 10 for chunk in result)


def test_chunk_text_with_zero_limit():
    text = "Any text here."
    result = tts.chunk_text(text, 0)
    assert len(result) == 1
    assert result[0] == text


def test_chunk_text_empty_string():
    result = tts.chunk_text("", 100)
    assert len(result) == 1
    assert result[0] == ""


def test_resolve_same_seed_same_branch():
    text = "The choice is {red|blue|green}."
    rng1 = random.Random("test-seed")
    result1 = tts.resolve(text, rng1)

    rng2 = random.Random("test-seed")
    result2 = tts.resolve(text, rng2)

    assert result1 == result2


def test_resolve_different_seed_different_branch():
    text = "The choice is {red|blue|green}."
    rng1 = random.Random("seed-one")
    result1 = tts.resolve(text, rng1)

    rng2 = random.Random("seed-two")
    result2 = tts.resolve(text, rng2)

    results_can_differ = result1 != result2
    for _ in range(10):
        if results_can_differ:
            break
        rng1 = random.Random(f"seed-{_}")
        rng2 = random.Random(f"seed-{_ + 1000}")
        result1 = tts.resolve(text, rng1)
        result2 = tts.resolve(text, rng2)
        if result1 != result2:
            results_can_differ = True
    assert results_can_differ


def test_resolve_nested_braces():
    text = "Text with {option|choice}."
    rng = random.Random("seed")
    result = tts.resolve(text, rng)
    assert result in ["Text with option.", "Text with choice."]


def test_resolve_multiple_branches():
    text = "I {like|love} {cats|dogs}."
    rng = random.Random("seed")
    result = tts.resolve(text, rng)
    assert "like" in result or "love" in result
    assert "cats" in result or "dogs" in result


def test_resolve_no_branches():
    text = "Plain text with no choices."
    rng = random.Random("seed")
    result = tts.resolve(text, rng)
    assert result == text


def test_cued_property():
    unit = tts.Unit("test", "child", 1, [], direction={}, cues=["letterbox"])
    cued = unit.cued
    assert "set" in cued
    assert cued["set"] == "letterbox"


def test_cued_multiple():
    unit = tts.Unit("test", "child", 1, [], direction={},
                   cues=["letterbox", "word-missing"])
    cued = unit.cued
    assert cued["set"] == "letterbox"
    assert cued["dropouts"] == "1"


def test_pick_cue_stacks():
    a = argparse.Namespace(tone=None, voice=None, set="clean",
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "child", 1, [], direction={},
                   cues=["word-missing"])

    dropouts = tts.pick(a, unit, "dropouts")
    assert dropouts == "1"

    set_val = tts.pick(a, unit, "set")
    assert set_val == "clean"


def test_part_absent_checks_text():
    part_absent = tts.Part("label", "—")
    assert part_absent.absent

    part_dash = tts.Part("label", "-")
    assert part_dash.absent

    part_text = tts.Part("label", "actual text")
    assert not part_text.absent


def test_unit_silent_when_all_parts_absent():
    parts = [tts.Part("p1", "—"), tts.Part("p2", "—")]
    unit = tts.Unit("test", "speaker", 1, parts)
    assert unit.silent


def test_unit_not_silent_when_any_part_present():
    parts = [tts.Part("p1", "—"), tts.Part("p2", "actual")]
    unit = tts.Unit("test", "speaker", 1, parts)
    assert not unit.silent


def test_parse_tier_dot_replacement():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@tier full.1\n"
            "Text one.\n"
        )
        units = tts.parse([f])

        assert units[0].stem == "speaker-day01-full-1"
        assert "-" in units[0].parts[0].label


def test_parse_broadcast_detection():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "bcast.txt"
        f.write_text(
            "@day 5\n"
            "@part p1\n"
            "Content.\n"
        )
        units = tts.parse([f])

        assert units[0].speaker == "broadcast"


def test_parse_visitor_detection():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "myvisitor.txt"
        f.write_text(
            "@visitor myvisitor\n"
            "@day 1\n"
            "@tier full.1\n"
            "Content.\n"
        )
        units = tts.parse([f])

        assert units[0].speaker == "myvisitor"


def test_parse_comment_ignored():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "broadcasts").mkdir(exist_ok=True)

        f = tmpdir / "broadcasts" / "test.txt"
        f.write_text(
            "# This is a comment\n"
            "@day 1\n"
            "@part p1\n"
            "# Another comment\n"
            "Text content.\n"
        )
        units = tts.parse([f])

        assert units[0].parts[0].text == "Text content."
        assert "comment" not in units[0].parts[0].text.lower()


def test_pick_multipart_tone_override():
    a = argparse.Namespace(tone="aggressive", voice=None, set=None,
                          radio_level=None, wow=None, crackle=None,
                          distance=None, voice_name=None, lead=None,
                          dropouts=None, fault_part=None)
    unit = tts.Unit("test", "warden", 1, [])

    result = tts.pick(a, unit, "tone")
    assert result == "aggressive"


def test_chunk_text_limit_edge_case():
    text = "Word"
    result = tts.chunk_text(text, 4)
    assert len(result) == 1
    assert result[0] == "Word"


def test_resolve_empty_branch():
    text = "Start {|middle} end."
    rng = random.Random("seed")
    result = tts.resolve(text, rng)
    assert "Start" in result and "end" in result


def test_parse_claim_line_is_skipped():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@tier full.1\n"
            "Hello there.\n"
            "@claim who Sylvia\n"
        )
        units = tts.parse([f])

        assert units[0].parts[0].text == "Hello there."


def test_parse_arrival_and_ambient_lines_are_skipped():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@arrival 9 0\n"
            "@tier full.1\n"
            "Hello there.\n"
            "@ambient 9 street full.1\n"
        )
        units = tts.parse([f])

        assert units[0].parts[0].text == "Hello there."


def test_parse_unknown_at_directive_raises_exit():
    with tempfile.TemporaryDirectory() as tmpdir:
        tmpdir = pathlib.Path(tmpdir)
        (tmpdir / "visitors").mkdir(exist_ok=True)

        f = tmpdir / "visitors" / "speaker.txt"
        f.write_text(
            "@visitor speaker\n"
            "@day 1\n"
            "@tier full.1\n"
            "Hello there.\n"
            "@unknown-thing bad\n"
        )
        try:
            tts.parse([f])
            assert False, "expected SystemExit"
        except SystemExit:
            pass


def test_cues_include_new_tags():
    for tag in ("wireless-hum", "static-burst", "mid-sentence-start",
                "over-specific", "through-floor", "door-muffled",
                "long-pause", "whisper", "off-key", "careful", "hesitant",
                "rushed", "measured", "under-breath", "breathless",
                "distant", "telephone", "broken-radio", "echoing",
                "stammering", "long-breath"):
        assert tag in tts.CUES


def test_off_key_cue_selects_adrift():
    unit = tts.Unit("test", "neighbour", 1, [], direction={},
                   cues=["off-key"])
    assert unit.cued["tone"] == "adrift"
    assert "adrift" in tts.TONES
    assert "whisper" in tts.TONES


def test_speakers_include_new_visitors():
    for name in ("clerk", "evacuee", "ragman", "twins", "watchman", "widow",
                 "milkman", "nurse", "tuner", "engineer", "census"):
        assert name in tts.SPEAKERS


def test_resolve_uses_choices_when_address_matches():
    text = "The choice is {red|blue}."
    rng = random.Random("unused")
    result = tts.resolve(text, rng, {"stem:part:0": 1}, "stem:part")
    assert result == "The choice is blue."


def test_resolve_falls_back_when_address_missing_from_choices():
    text = "The choice is {red|blue}."
    rng1 = random.Random("seed")
    expected = tts.resolve(text, rng1)

    rng2 = random.Random("seed")
    result = tts.resolve(text, rng2, {"other:part:0": 1}, "stem:part")
    assert result == expected


def test_resolve_choices_index_advances_per_span():
    text = "{a|b} and {c|d}"
    rng = random.Random("unused")
    result = tts.resolve(text, rng, {"stem:0": 0, "stem:1": 1}, "stem")
    assert result == "a and d"


def test_unit_address_matches_dart_scheme():
    unit = tts.Unit("neighbour-day01-full-2", "neighbour", 1, [])
    part = tts.Part("full-2", "text")
    assert tts.unit_address(unit, part) == "neighbour-day01-full-2:full-2"


if __name__ == "__main__":
    test_parse_forward_directives()
    test_parse_forward_directive_override()
    test_parse_cue_attaches_to_preceding_tier()
    test_parse_cue_attaches_to_preceding_part()
    test_parse_cue_after_last_part_lands_on_whole_day()
    test_parse_visitor_resets_scope()
    test_parse_part_accumulates_per_day()
    test_parse_tier_produces_one_unit_each()
    test_parse_em_dash_part_is_absent()
    test_parse_duplicate_stems_raise_exit()
    test_parse_unknown_cue_raises_exit()
    test_parse_day_non_number_raises_exit()
    test_parse_cue_before_any_block_raises_exit()
    test_pick_cli_flag_beats_all()
    test_pick_cue_beats_forward_directive()
    test_pick_forward_directive_beats_speakers()
    test_pick_speakers_beats_defaults()
    test_pick_defaults_as_fallback()
    test_chunk_text_no_split_under_limit()
    test_chunk_text_split_at_sentence_ends()
    test_chunk_text_single_sentence_over_limit()
    test_chunk_text_every_chunk_under_limit()
    test_chunk_text_unsplittable_word_allowed()
    test_chunk_text_with_zero_limit()
    test_chunk_text_empty_string()
    test_resolve_same_seed_same_branch()
    test_resolve_different_seed_different_branch()
    test_resolve_nested_braces()
    test_resolve_multiple_branches()
    test_resolve_no_branches()
    test_cued_property()
    test_cued_multiple()
    test_pick_cue_stacks()
    test_part_absent_checks_text()
    test_unit_silent_when_all_parts_absent()
    test_unit_not_silent_when_any_part_present()
    test_parse_tier_dot_replacement()
    test_parse_broadcast_detection()
    test_parse_visitor_detection()
    test_parse_comment_ignored()
    test_pick_multipart_tone_override()
    test_chunk_text_limit_edge_case()
    test_resolve_empty_branch()
    test_parse_claim_line_is_skipped()
    test_parse_arrival_and_ambient_lines_are_skipped()
    test_parse_unknown_at_directive_raises_exit()
    test_cues_include_new_tags()
    test_off_key_cue_selects_adrift()
    test_speakers_include_new_visitors()
    test_resolve_uses_choices_when_address_matches()
    test_resolve_falls_back_when_address_missing_from_choices()
    test_resolve_choices_index_advances_per_span()
    test_unit_address_matches_dart_scheme()
    print("All tests passed!")
