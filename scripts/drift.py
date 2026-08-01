"""Compare consecutive broadcasts to audit the drift mechanic.

    python scripts/drift.py 3 4
    python scripts/drift.py --all

Prints side-by-side liturgies with changed words marked, warns where
rhythm gives the drift away, and flags direct edits without alternation.
"""

from __future__ import annotations

import argparse
import importlib.util
import sys
import pathlib
import random
from dataclasses import dataclass

spec = importlib.util.spec_from_file_location(
    "tts", pathlib.Path(__file__).parent / "tts.py")
tts = importlib.util.module_from_spec(spec)
sys.modules["tts"] = tts
spec.loader.exec_module(tts)

ROOT = pathlib.Path(__file__).resolve().parent.parent
TEXT_DIR = ROOT / "text"


@dataclass
class DayLiturgy:
    day: int
    parts: dict[str, str]
    source: dict[str, str]


def load_broadcasts() -> dict[int, DayLiturgy]:
    paths = sorted((TEXT_DIR / "broadcasts").glob("*.txt"))
    units = tts.parse(paths)

    liturgies: dict[int, DayLiturgy] = {}
    broadcast_units = [u for u in units if u.speaker == tts.BROADCAST]

    for unit in broadcast_units:
        resolved_parts = {}
        source_parts = {}

        rng = random.Random(f"board:text:{unit.stem}")
        for part in unit.parts:
            resolved_parts[part.label] = tts.resolve(part.text, rng)
            source_parts[part.label] = part.text

        liturgies[unit.day] = DayLiturgy(
            day=unit.day,
            parts=resolved_parts,
            source=source_parts
        )

    return liturgies


def has_alternation(text: str) -> bool:
    return "{" in text and "|" in text and "}" in text


def extract_words(text: str) -> list[str]:
    import re
    return re.findall(r"\b\w+(?:(?:\s|-)?\w+)*\b", text.lower())


def find_changed_words(old: str, new: str) -> tuple[list[str], list[str]]:
    old_words = extract_words(old)
    new_words = extract_words(new)

    removed = []
    added = []

    old_set = set(old_words)
    new_set = set(new_words)

    removed = list(old_set - new_set)
    added = list(new_set - old_set)

    return sorted(removed), sorted(added)


def format_part_comparison(label: str, old: str, new: str, max_width: int = 100) -> list[str]:
    lines = []

    if old.strip() in tts.ABSENT and new.strip() in tts.ABSENT:
        return []

    if old == new:
        return []

    removed, added = find_changed_words(old, new)

    header = f"  {label}:"
    lines.append(header)

    if removed or added:
        changes = []
        if removed:
            changes.append(f"−{', '.join(removed)}")
        if added:
            changes.append(f"+{', '.join(added)}")
        lines.append(f"    {' / '.join(changes)}")

        lines.append(f"    old: {old}")
        lines.append(f"    new: {new}")
    else:
        lines.append(f"    old: {old}")
        lines.append(f"    new: {new}")

    return lines


def check_rhythm_warnings(old_source: str, new_source: str, old_resolved: str,
                          new_resolved: str, label: str) -> list[str]:
    import re
    warnings = []

    old_has_alt = has_alternation(old_source)
    new_has_alt = has_alternation(new_source)

    if not old_has_alt and not new_has_alt:
        if old_resolved != new_resolved:
            warnings.append(
                f"    ⚠ {label}: direct edit, no alternation authored")
    else:
        old_alts = re.findall(r"\{([^}]+)\}", old_source)
        new_alts = re.findall(r"\{([^}]+)\}", new_source)

        for alt_text in old_alts + new_alts:
            branches = [b.strip() for b in alt_text.split("|")]
            if len(branches) > 1:
                lens = [len(b) for b in branches]
                diff = max(lens) - min(lens)
                if diff > 5:
                    warnings.append(
                        f"    ⚠ {label}: rhythm risk — alternation branches differ "
                        f"by {diff} chars: {alt_text}")

        if old_has_alt != new_has_alt or (old_has_alt and new_has_alt and old_alts != new_alts):
            if old_resolved != new_resolved and not old_has_alt and new_has_alt:
                pass
            elif old_resolved != new_resolved and old_has_alt and not new_has_alt:
                warnings.append(
                    f"    ⚠ {label}: direct edit, alternation removed")

    return warnings


def compare_days(liturgies: dict[int, DayLiturgy], day1: int, day2: int,
                 max_width: int = 100) -> list[str]:
    if day1 not in liturgies or day2 not in liturgies:
        return [f"error: day {day1 if day1 not in liturgies else day2} not found"]

    lit1 = liturgies[day1]
    lit2 = liturgies[day2]

    output = []
    output.append(f"Day {day1} → Day {day2}")
    output.append("")

    part_order = ["date", "status", "sighting", "instructions", "closing"]

    has_changes = False
    for part_label in part_order:
        old_text = lit1.parts.get(part_label, "")
        new_text = lit2.parts.get(part_label, "")
        old_source = lit1.source.get(part_label, "")
        new_source = lit2.source.get(part_label, "")

        if old_text != new_text:
            has_changes = True
            comp = format_part_comparison(part_label, old_text, new_text, max_width)
            output.extend(comp)

            warnings = check_rhythm_warnings(old_source, new_source, old_text,
                                             new_text, part_label)
            output.extend(warnings)

    if not has_changes:
        output.append("  (no changes)")

    output.append("")
    return output


def main() -> None:
    p = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("days", nargs="*", type=int,
                   help="two days to compare (e.g., 3 4)")
    p.add_argument("--all", action="store_true",
                   help="compare all consecutive day pairs")
    args = p.parse_args()

    liturgies = load_broadcasts()
    all_days = sorted(liturgies.keys())

    if args.all:
        output = []
        for i in range(len(all_days) - 1):
            day1 = all_days[i]
            day2 = all_days[i + 1]
            output.extend(compare_days(liturgies, day1, day2))
        print("\n".join(output))
    elif len(args.days) == 2:
        output = compare_days(liturgies, args.days[0], args.days[1])
        print("\n".join(output))
    else:
        p.error("provide two days (e.g., 3 4) or use --all")


if __name__ == "__main__":
    main()
