"""Turn the scripts in text/ into voiced clips in web/res/vo/.

    python scripts/tts.py --day 1
    python scripts/tts.py --speaker warden --day 5 --tone official
    python scripts/tts.py --all
    python scripts/tts.py --line "Open the door." --name knock-plea --tone aggressive

Two axes shape the result and they are independent:

  --voice / --tone   the *performance* — who is speaking and how. Picks the
                     neural voice and drives rate, pitch, and the pauses
                     between the liturgy's parts.
  --set              the *transmission* — what it is heard through. A valve
                     wireless, a failing television, a front door, a corridor
                     tannoy, a telephone, or nothing at all.

Two source shapes are understood, both from text/:

  broadcasts/*.txt   @day N then @part <name> blocks. The five parts are
                     assembled into ONE clip per day with the pauses intact,
                     because the liturgy is heard as a single event. A part
                     whose body is an em dash is absent that day and becomes a
                     hole of silence the right size.
  visitors/*.txt     @visitor <who>, @day N, then @tier <full.N|compressed.N>.
                     Each tier is a branch the game chooses between, so each
                     becomes its OWN clip — never concatenated.

Backends, in preference order:

  edge   Microsoft Edge neural voices. Free, no key, real male and female
         voices, and honours rate/pitch. Needs the `edge-tts` package; this
         script builds scripts/.venv on first use and re-execs into it.
  gtts   Google Translate TTS. No dependency at all, but one flat voice per
         language, so --voice degrades to a pitch/formant shift.

Requires ffmpeg and ffprobe on PATH.
"""

from __future__ import annotations

import random
import re
from dataclasses import dataclass, field
from pathlib import Path


BROADCAST = "broadcast"

ALT = re.compile(r"\{([^{}]*)\}")

ABSENT = {"—", "-", "--", "...", ""}


@dataclass
class Part:
    label: str
    text: str

    @property
    def absent(self) -> bool:
        return self.text.strip() in ABSENT


@dataclass
class Unit:

    stem: str
    speaker: str
    day: int
    parts: list[Part]
    direction: dict[str, str] = field(default_factory=dict)
    cues: list[str] = field(default_factory=list)

    @property
    def silent(self) -> bool:
        return all(p.absent for p in self.parts)

    @property
    def cued(self) -> dict[str, str]:
        out: dict[str, str] = {}
        for cue in self.cues:
            out.update(CUES[cue])
        return out


DIRECTIVES = {"@tone": "tone", "@voice-name": "voice_name",
              "@voice": "voice", "@set": "set", "@radio": "radio_level",
              "@wow": "wow", "@crackle": "crackle", "@distance": "distance"}


CUES: dict[str, dict[str, str]] = {
    "no-effect": {},
    "letterbox": {"set": "letterbox"},
    "flat-affect": {"tone": "flat"},
    "rehearsed": {"tone": "rehearsed"},
    "word-missing": {"dropouts": "1"},
    "closing-degrades": {"fault_part": "closing", "dropouts": "1",
                         "radio_level": "3"},
    "hum-long": {"lead": "6.0"},
    "thinning": {"tone": "thinning"},
    "flattening": {"tone": "flattening"},
    "hollowed": {"tone": "hollowed"},
}


KIND_DEFAULTS: dict[str, dict[str, str]] = {
    BROADCAST: {"tone": "formal", "voice": "male", "set": "wireless",
                "radio_level": "1", "wow": "1", "crackle": "1",
                "distance": "0"},
    "visitor": {"tone": "neutral", "voice": "male", "set": "door",
                "radio_level": "0", "wow": "0", "crackle": "0",
                "distance": "1"},
}

for _kind in KIND_DEFAULTS.values():
    _kind.update({"dropouts": "", "fault_part": "", "lead": ""})

SPEAKERS: dict[str, dict[str, str]] = {
    "warden": {"tone": "official", "voice": "male"},
    "doctor": {"tone": "official", "voice": "male"},
    "hazmat-boy": {"tone": "casual", "voice": "male"},
    "gas-man": {"tone": "casual", "voice": "male"},
    "postman": {"tone": "casual", "voice": "male"},
    "neighbour": {"tone": "casual", "voice": "female"},
    "ayling": {"tone": "casual", "voice": "female"},
    "caller": {"tone": "casual", "voice": "female"},
    "child": {"tone": "casual", "voice": "female",
              "voice_name": "en-GB-MaisieNeural", "set": "letterbox"},
    "sibling": {"tone": "neutral"},
    "stranger": {"tone": "neutral"},
}


def parse(paths: list[Path]) -> list[Unit]:
    units: list[Unit] = []
    for path in paths:
        speaker = BROADCAST if path.parent.name == "broadcasts" else path.stem
        day: int | None = None
        current: Unit | None = None
        part: Part | None = None
        last: Unit | None = None
        direction: dict[str, str] = {}

        def need_day(directive: str) -> int:
            if day is None:
                raise SystemExit(f"{path}: {directive} before any @day")
            return day

        for lineno, raw in enumerate(path.read_text(encoding="utf-8")
                                     .splitlines(), start=1):
            line = raw.strip()
            if line.startswith("#"):
                continue
            if line.startswith("@cue "):
                cue = line.split(maxsplit=1)[1].strip()
                if cue not in CUES:
                    raise SystemExit(f"{path.name}:{lineno}: unknown cue {cue!r}"
                                     f"\nknown: {', '.join(sorted(CUES))}")
                if last is None:
                    raise SystemExit(f"{path.name}:{lineno}: @cue before any "
                                     f"@part or @tier")
                last.cues.append(cue)
                continue
            key = next((v for k, v in DIRECTIVES.items()
                        if line.startswith(k + " ")), None)
            if key:
                value = line.split(maxsplit=1)[1].strip()
                direction[key] = value
                if current is not None and current.parts:
                    print(f"{path.name}:{lineno}: {line.split()[0]} applies to "
                          f"the whole of {current.stem}, not just what follows")
                    current.direction[key] = value
                continue
            if line.startswith("@visitor"):
                speaker = line.split(maxsplit=1)[1].strip()
                current, part, day, last = None, None, None, None
            elif line.startswith("@day"):
                token = line.split()[1] if len(line.split()) > 1 else ""
                if not token.isdigit():
                    raise SystemExit(
                        f"{path.name}:{lineno}: @day needs a number, got {token!r}")
                day = int(token)
                current, part = None, None
            elif line.startswith("@part"):
                d = need_day("@part")
                if current is None:
                    current = Unit(f"{BROADCAST}-day{d:02d}", speaker, d, [],
                                   dict(direction))
                    units.append(current)
                    last = current
                part = Part(line.split(maxsplit=1)[1].strip(), "")
                current.parts.append(part)
            elif line.startswith("@tier"):
                d = need_day("@tier")
                tier = line.split(maxsplit=1)[1].strip().replace(".", "-")
                part = Part(tier, "")
                last = Unit(f"{speaker}-day{d:02d}-{tier}", speaker, d,
                            [part], dict(direction))
                units.append(last)
            elif line and part is not None:
                part.text = (part.text + " " + line).strip()

    seen: dict[str, Unit] = {}
    for unit in units:
        if unit.stem in seen:
            raise SystemExit(
                f"duplicate clip {unit.stem!r}: {unit.speaker} day {unit.day} is "
                f"defined twice, and both would write the same file")
        seen[unit.stem] = unit
    return units


def resolve(text: str, rng: random.Random) -> str:
    return ALT.sub(lambda m: rng.choice(m.group(1).split("|")), text)


SENTENCE = re.compile(r"(?<=[.!?;…])\s+")


def split_words(text: str, limit: int) -> list[str]:
    out, cur = [], ""
    for word in text.split():
        if cur and len(cur) + 1 + len(word) > limit:
            out.append(cur)
            cur = word
        else:
            cur = f"{cur} {word}".strip()
    if cur:
        out.append(cur)
    return out


def chunk_text(text: str, limit: int) -> list[str]:
    if limit <= 0 or len(text) <= limit:
        return [text]
    out, cur = [], ""
    for sentence in SENTENCE.split(text):
        for piece in ([sentence] if len(sentence) <= limit
                      else split_words(sentence, limit)):
            if cur and len(cur) + 1 + len(piece) > limit:
                out.append(cur)
                cur = piece
            else:
                cur = f"{cur} {piece}".strip()
    if cur:
        out.append(cur)
    return out


def pick(a, unit: Unit, key: str) -> str:
    if getattr(a, key, None) is not None:
        return getattr(a, key)
    cued = unit.cued
    if key in cued:
        return cued[key]
    if key in unit.direction:
        return unit.direction[key]
    if key in SPEAKERS.get(unit.speaker, {}):
        return SPEAKERS[unit.speaker][key]
    kind = BROADCAST if unit.speaker == BROADCAST else "visitor"
    return KIND_DEFAULTS[kind][key]
