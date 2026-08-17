"""Turn the scripts in text/ into voiced clips in web/res/vo/.

    python scripts/tts.py --day 1
    python scripts/tts.py --speaker warden --day 5 --tone official
    python scripts/tts.py --all
    python scripts/tts.py --line "Open the door." --name knock-plea --tone aggressive
    python scripts/tts.py --line "Stay back." --name warning --voice-name en-GB-ThomasNeural --variation strained

Two axes shape the result and they are independent:

  --voice / --tone   the *performance* — who is speaking and how. Picks the
                     neural voice and drives rate, pitch, and the pauses
                     between the liturgy's parts.
  --set              the *transmission* — what it is heard through. A valve
                     wireless, a failing television, a front door, a corridor
                     tannoy, a telephone, or nothing at all.
  --variation        the character after synthesis: natural, bright, dark,
                     breathy, nasal, strained, childlike, warm, hollow,
                     metallic, shaky, or elderly.

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
  apple  macOS `say` voices. No dependency or network key; available when
         the script runs on macOS. --voice-name accepts an installed Apple
         voice name, such as Alex or Samantha. --apple-volume,
         --apple-emphasis, the Apple rate/pitch options, pause options, and
         repeatable --apple-substitute and --apple-phoneme pairs control
         native say markup.

Requires ffmpeg and ffprobe on PATH.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import random
import re
import shutil
import subprocess
import sys
import threading
import time
import unicodedata
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass, field, replace
from pathlib import Path

from corpus import (BROADCAST, ALT, ABSENT, DIRECTIVES, CUES, KIND_DEFAULTS,
                    SPEAKERS, Part, Unit, parse, resolve, pick, chunk_text,
                    split_words)

reconfigure_stdout = getattr(sys.stdout, "reconfigure", None)
if callable(reconfigure_stdout):
    reconfigure_stdout(encoding="utf-8", errors="replace")

ROOT = Path(__file__).resolve().parent.parent
TEXT_DIR = ROOT / "text"
OUT_DIR = ROOT / "web" / "res" / "vo"
MANIFEST = ROOT / "web" / "res" / "manifest.json"
TEXT_CHOICES_FILE = ROOT / "web" / "res" / "text_choices.json"
VENV = ROOT / "scripts" / ".venv"
CACHE = ROOT / "scripts" / ".cache"
SR = 24000
CACHE_FORMAT = "tts-cache-v3"


def load_text_choices() -> dict[str, int]:
    if not TEXT_CHOICES_FILE.exists():
        return {}
    try:
        raw = json.loads(TEXT_CHOICES_FILE.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}
    if not isinstance(raw, dict):
        return {}
    return {k: v for k, v in raw.items() if isinstance(v, int)}


TEXT_CHOICES = load_text_choices()


def unit_address(unit: Unit, part: Part) -> str:
    return f"{unit.stem}:{part.label}"


def normalize_tts_text(text: str) -> str:
    """Make equivalent user input share a cache entry without rewriting prose."""
    return unicodedata.normalize("NFC", text.replace("\r\n", "\n")).strip()


@dataclass(frozen=True)
class Tone:

    rate: str
    pitch: str
    gap: float
    lead: float
    eq: str
    comp: str
    male: str
    female: str


TONES: dict[str, Tone] = {
    "grave": Tone(
        "-20%", "-12Hz", 1.45, 1.5,
        "equalizer=f=180:t=q:w=1.0:g=3,equalizer=f=2600:t=q:w=1.2:g=-4",
        "compand=attacks=0.01:decays=0.4:points=-60/-42|-30/-14|-12/-9|0/-8",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "formal": Tone(
        "-14%", "-6Hz", 1.25, 1.25,
        "equalizer=f=1800:t=q:w=1.1:g=5,equalizer=f=700:t=q:w=1.4:g=-3",
        "compand=attacks=0.002:decays=0.15:points=-60/-40|-30/-9|-12/-5|0/-4",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "official": Tone(
        "-8%", "-2Hz", 1.10, 1.0,
        "equalizer=f=2100:t=q:w=1.2:g=4,equalizer=f=450:t=q:w=1.2:g=-2",
        "compand=attacks=0.003:decays=0.2:points=-60/-40|-30/-11|-12/-6|0/-5",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "neutral": Tone(
        "+0%", "+0Hz", 1.0, 1.0,
        "equalizer=f=1600:t=q:w=1.4:g=2",
        "compand=attacks=0.01:decays=0.3:points=-60/-40|-24/-14|0/-8",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "casual": Tone(
        "+6%", "+2Hz", 0.80, 0.7,
        "equalizer=f=3000:t=q:w=1.6:g=2,equalizer=f=300:t=q:w=1.0:g=1",
        "compand=attacks=0.02:decays=0.4:points=-60/-40|-20/-16|0/-10",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "happy": Tone(
        "+14%", "+14Hz", 0.62, 0.5,
        "equalizer=f=3400:t=q:w=1.8:g=5,equalizer=f=250:t=q:w=1.0:g=-3",
        "compand=attacks=0.02:decays=0.35:points=-60/-40|-20/-14|0/-8",
        "en-GB-RyanNeural", "en-GB-MaisieNeural",
    ),
    "aggressive": Tone(
        "+12%", "-8Hz", 0.50, 0.4,
        "equalizer=f=1200:t=q:w=1.0:g=6,equalizer=f=3200:t=q:w=1.4:g=3",
        "compand=attacks=0.0005:decays=0.06:points=-60/-30|-24/-6|-6/-3|0/-2",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "clipped": Tone(
        "-10%", "-4Hz", 0.92, 1.0,
        "equalizer=f=2400:t=q:w=1.6:g=4,equalizer=f=500:t=q:w=1.0:g=-4",
        "compand=attacks=0.001:decays=0.09:points=-60/-42|-28/-8|-10/-4|0/-3",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "courteous": Tone(
        "-6%", "+0Hz", 1.18, 1.05,
        "equalizer=f=520:t=q:w=1.0:g=3,equalizer=f=2500:t=q:w=1.3:g=2",
        "compand=attacks=0.006:decays=0.25:points=-60/-40|-28/-13|-10/-7|0/-6",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "rehearsed": Tone(
        "-2%", "-1Hz", 1.02, 1.0,
        "equalizer=f=3000:t=q:w=1.8:g=3,equalizer=f=420:t=q:w=1.1:g=-2",
        "compand=attacks=0.004:decays=0.11:points=-60/-30|-30/-11|-14/-9|0/-8",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "confiding": Tone(
        "-6%", "-4Hz", 0.88, 0.55,
        "equalizer=f=210:t=q:w=1.0:g=4,equalizer=f=3000:t=q:w=1.3:g=-4",
        "compand=attacks=0.02:decays=0.45:points=-60/-40|-22/-15|0/-9",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "apologetic": Tone(
        "+8%", "+6Hz", 0.72, 0.5,
        "equalizer=f=2800:t=q:w=1.5:g=3,equalizer=f=300:t=q:w=1.1:g=-4",
        "compand=attacks=0.03:decays=0.5:points=-60/-40|-20/-17|0/-11",
        "en-GB-RyanNeural", "en-GB-MaisieNeural",
    ),
    "frightened": Tone(
        "+18%", "+10Hz", 0.44, 0.35,
        "equalizer=f=3600:t=q:w=1.7:g=5,equalizer=f=250:t=q:w=1.0:g=-5",
        "compand=attacks=0.001:decays=0.07:points=-60/-34|-26/-8|-8/-4|0/-3",
        "en-GB-RyanNeural", "en-GB-SoniaNeural",
    ),
    "gracious": Tone(
        "-10%", "-2Hz", 1.30, 1.10,
        "equalizer=f=420:t=q:w=1.0:g=3,equalizer=f=4000:t=q:w=1.2:g=-3",
        "compand=attacks=0.03:decays=0.5:points=-60/-42|-24/-16|0/-10",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "weary": Tone(
        "-16%", "-8Hz", 1.35, 1.30,
        "equalizer=f=150:t=q:w=1.0:g=3,equalizer=f=3200:t=q:w=1.1:g=-6",
        "compand=attacks=0.04:decays=0.6:points=-60/-44|-24/-18|0/-12",
        "en-GB-ThomasNeural", "en-GB-SoniaNeural",
    ),
    "flat": Tone(
        "-4%", "-2Hz", 1.00, 1.0,
        "equalizer=f=1000:t=q:w=2.0:g=-2,equalizer=f=2800:t=q:w=1.6:g=2",
        "compand=attacks=0.002:decays=0.08:points=-60/-26|-34/-10|-16/-9|0/-8",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "thinning": Tone(
        "+3%", "+0Hz", 0.92, 0.9,
        "equalizer=f=1600:t=q:w=1.4:g=1",
        "compand=attacks=0.01:decays=0.28:points=-60/-40|-24/-15|0/-9",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "flattening": Tone(
        "+1%", "-2Hz", 1.00, 1.0,
        "equalizer=f=1600:t=q:w=1.6:g=0",
        "compand=attacks=0.008:decays=0.2:points=-60/-38|-26/-16|0/-10",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "hollowed": Tone(
        "-6%", "-3Hz", 1.08, 1.0,
        "equalizer=f=1000:t=q:w=2.0:g=-3,equalizer=f=2800:t=q:w=1.6:g=1",
        "compand=attacks=0.003:decays=0.12:points=-60/-30|-32/-12|-14/-10|0/-9",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "whisper": Tone(
        "-8%", "-2Hz", 0.75, 0.4,
        "equalizer=f=4200:t=q:w=1.3:g=4,equalizer=f=350:t=q:w=1.0:g=-6",
        "compand=attacks=0.02:decays=0.4:points=-60/-45|-24/-18|0/-14",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
    "adrift": Tone(
        "-3%", "+1Hz", 1.02, 0.95,
        "equalizer=f=1500:t=q:w=1.5:g=1,equalizer=f=600:t=q:w=1.2:g=1",
        "compand=attacks=0.012:decays=0.32:points=-60/-40|-24/-15|0/-9",
        "en-GB-RyanNeural", "en-GB-LibbyNeural",
    ),
}


@dataclass(frozen=True)
class Set:

    band: tuple[int, int]
    lead: float
    tail: float
    gain: float
    bed: list[tuple[str, str]] = field(default_factory=list)
    extra: str = ""
    dropouts: int = 0


SETS: dict[str, Set] = {
    "wireless": Set(
        band=(340, 3100), lead=4.0, tail=3.0, gain=2.6,
        bed=[
            ("sine=frequency=50", "volume=0.055"),
            ("sine=frequency=150", "volume=0.022"),
            ("anoisesrc=color=pink:amplitude=0.6",
             "highpass=f=500,lowpass=f=3400,volume=0.045,tremolo=f=0.23:d=0.5"),
        ],
    ),
    "tvset": Set(
        band=(520, 2500), lead=4.0, tail=3.0, gain=3.2,
        bed=[
            ("sine=frequency=50", "volume=0.085"),
            ("sine=frequency=100",
             "acrusher=bits=3:mode=log:aa=1,lowpass=f=1200,volume=0.055"),
            ("anoisesrc=color=white:amplitude=0.6",
             "highpass=f=900,lowpass=f=2600,volume=0.070,tremolo=f=0.11:d=0.6"),
        ],
        extra="aecho=0.8:0.5:38:0.20",
        dropouts=2,
    ),
    "door": Set(
        band=(180, 1700), lead=0.5, tail=1.0, gain=2.8,
        bed=[("anoisesrc=color=brown:amplitude=0.4",
              "lowpass=f=400,volume=0.020")],
        extra=("equalizer=f=350:t=q:w=1.2:g=4,equalizer=f=1400:t=q:w=1.0:g=-5,"
               "aecho=0.9:0.35:22:0.12"),
    ),
    "letterbox": Set(
        band=(250, 3000), lead=0.4, tail=0.9, gain=2.6,
        bed=[("anoisesrc=color=brown:amplitude=0.3",
              "lowpass=f=500,volume=0.014")],
        extra=("equalizer=f=900:t=q:w=0.9:g=5,equalizer=f=240:t=q:w=1.2:g=-6,"
               "aecho=0.9:0.25:11:0.10"),
    ),
    "tannoy": Set(
        band=(420, 3600), lead=1.2, tail=3.5, gain=2.4,
        bed=[("anoisesrc=color=brown:amplitude=0.5",
              "lowpass=f=900,volume=0.030")],
        extra=("equalizer=f=1650:t=q:w=0.8:g=8,equalizer=f=800:t=q:w=1.0:g=-5,"
               "aecho=0.85:0.6:120|230|390:0.30|0.20|0.12"),
    ),
    "phone": Set(
        band=(300, 3400), lead=0.4, tail=0.8, gain=2.2,
        bed=[("anoisesrc=color=white:amplitude=0.4",
              "highpass=f=1000,lowpass=f=3000,volume=0.018")],
        extra="compand=attacks=0.001:decays=0.08:points=-60/-30|-20/-6|0/-3",
    ),
    "wall": Set(
        band=(120, 850), lead=1.0, tail=1.6, gain=3.2,
        bed=[("anoisesrc=color=brown:amplitude=0.5",
              "lowpass=f=300,volume=0.026")],
        extra=("equalizer=f=200:t=q:w=0.9:g=6,equalizer=f=700:t=q:w=1.0:g=-4,"
               "aecho=0.9:0.4:55:0.16"),
    ),
    "floor": Set(
        band=(90, 480), lead=1.0, tail=2.0, gain=3.6,
        bed=[("anoisesrc=color=brown:amplitude=0.6",
              "lowpass=f=220,volume=0.030")],
        extra=("equalizer=f=130:t=q:w=0.8:g=7,equalizer=f=400:t=q:w=1.0:g=-5,"
               "aecho=0.9:0.45:70:0.20"),
    ),
    "window": Set(
        band=(300, 4200), lead=0.8, tail=2.2, gain=2.4,
        bed=[("anoisesrc=color=brown:amplitude=0.5",
              "lowpass=f=700,volume=0.022")],
        extra=("equalizer=f=2600:t=q:w=1.4:g=2,equalizer=f=450:t=q:w=1.0:g=-3,"
               "aecho=0.85:0.5:160|290:0.22|0.13"),
    ),
    "bedside": Set(
        band=(200, 6000), lead=0.6, tail=1.4, gain=2.0,
        bed=[("anoisesrc=color=pink:amplitude=0.25",
              "lowpass=f=2000,volume=0.010")],
        extra="equalizer=f=280:t=q:w=1.0:g=2,aecho=0.95:0.2:9:0.06",
    ),
    "clean": Set(band=(80, 11000), lead=0.3, tail=0.6, gain=1.0),
}


RADIO = {
    0: {"bed": None, "lead": 0.15, "drops": 0.0, "add": 0},
    1: {"bed": -27.0, "lead": 1.00, "drops": 1.0, "add": 0},
    2: {"bed": -23.0, "lead": 1.00, "drops": 1.0, "add": 0},
    3: {"bed": -19.0, "lead": 1.10, "drops": 1.5, "add": 0},
    4: {"bed": -15.0, "lead": 1.25, "drops": 2.0, "add": 1},
    5: {"bed": -11.0, "lead": 1.50, "drops": 2.5, "add": 2},
}

WOW = {
    0: (0.0, 0.0),
    1: (0.8, 0.05),
    2: (0.9, 0.10),
    3: (1.1, 0.17),
    4: (1.3, 0.26),
    5: (1.6, 0.38),
}

CRACKLE = {
    0: None,
    1: -31.0,
    2: -27.0,
    3: -23.0,
    4: -19.0,
    5: -15.0,
}

DISTANCE = {
    0: (1.00, 0.00, 0),
    1: (0.92, 0.10, 45),
    2: (0.82, 0.17, 80),
    3: (0.70, 0.24, 130),
    4: (0.58, 0.31, 200),
    5: (0.46, 0.38, 290),
}

GAUGES = {"radio_level": RADIO, "wow": WOW, "crackle": CRACKLE,
          "distance": DISTANCE}




def ensure_edge() -> bool:
    try:
        import edge_tts
        return True
    except ImportError:
        pass
    py = VENV / ("Scripts/python.exe" if os.name == "nt" else "bin/python")
    if not py.exists():
        print("[setup] creating scripts/.venv and installing edge-tts")
        subprocess.run([sys.executable, "-m", "venv", str(VENV)], check=True)
        subprocess.run([str(py), "-m", "pip", "install", "-q",
                        "--disable-pip-version-check", "edge-tts"], check=True)
    # The venv's POSIX python is often a symlink to the system interpreter.
    # Comparing resolved paths makes the re-executed process look like the
    # original process and silently falls back to gTTS. Compare actual paths.
    if Path(sys.executable).absolute() != py.absolute():
        sys.exit(subprocess.run(
            [str(py), str(Path(__file__).resolve()), *sys.argv[1:]]).returncode)
    return True


def ensure_apple() -> bool:
    return shutil.which("say") is not None


VARIATIONS: dict[str, tuple[float, str]] = {
    "natural": (1.00, ""),
    "bright": (1.045, "equalizer=f=3200:t=q:w=1.4:g=4,equalizer=f=260:t=q:w=1.0:g=-2"),
    "dark": (0.91, "equalizer=f=230:t=q:w=1.0:g=4,equalizer=f=2600:t=q:w=1.2:g=-5"),
    "breathy": (1.00, "highpass=f=120,lowpass=f=5200,acompressor=threshold=-26dB:ratio=2:attack=20:release=180"),
    "nasal": (1.00, "equalizer=f=900:t=q:w=0.9:g=5,equalizer=f=280:t=q:w=1.0:g=-4"),
    "strained": (0.97, "equalizer=f=1200:t=q:w=1.0:g=4,equalizer=f=3600:t=q:w=1.2:g=3,acompressor=threshold=-24dB:ratio=3:attack=3:release=70"),
    "childlike": (1.08, "equalizer=f=3400:t=q:w=1.5:g=3,equalizer=f=260:t=q:w=1.0:g=-2"),
    "warm": (0.985, "equalizer=f=180:t=q:w=0.9:g=3,equalizer=f=2800:t=q:w=1.3:g=2"),
    "hollow": (1.00, "equalizer=f=300:t=q:w=1.1:g=-5,equalizer=f=1800:t=q:w=1.0:g=-3,equalizer=f=4200:t=q:w=1.2:g=2"),
    "metallic": (1.00, "highpass=f=260,equalizer=f=2500:t=q:w=1.4:g=6,aecho=0.8:0.35:18:0.14"),
    "shaky": (1.00, "tremolo=f=5.2:d=0.12,equalizer=f=2400:t=q:w=1.3:g=2"),
    "elderly": (0.87, "equalizer=f=180:t=q:w=1.0:g=4,equalizer=f=2200:t=q:w=1.1:g=-4,acompressor=threshold=-28dB:ratio=2:attack=18:release=220"),
}


@dataclass
class Piece:

    label: str
    path: Path
    seconds: float
    gap: float
    absent: bool = False


@dataclass(frozen=True)
class Job:

    text: str
    voice: str
    gender: str
    rate: str
    pitch: str
    path: Path
    apple_volume: float = 1.0
    apple_emphasis: str = "none"
    apple_pause_ms: int = 0
    apple_sentence_pause_ms: int = 0
    apple_trailing_pause_ms: int = 0
    apple_rate_wpm: int | None = None
    apple_pitch_baseline: int | None = None
    apple_substitutions: tuple[tuple[str, str], ...] = ()
    apple_phonemes: tuple[tuple[str, str], ...] = ()


def plan_jobs(text: str, cache: Path, backend: str, voice: str, gender: str,
              tone: Tone, limit: int, apple_volume: float = 1.0,
              apple_emphasis: str = "none", apple_pause_ms: int = 0,
              apple_sentence_pause_ms: int = 0,
              apple_trailing_pause_ms: int = 0,
              apple_rate_wpm: int | None = None,
              apple_pitch_baseline: int | None = None,
              apple_substitutions: tuple[tuple[str, str], ...] = (),
              apple_phonemes: tuple[tuple[str, str], ...] = ()) -> list[Job]:
    jobs = []
    normalized = normalize_tts_text(text)
    pieces = chunk_text(normalized, limit)
    if "  " in normalized and len(pieces) > 1:
        raise SystemExit(
            "word-missing marker cannot be split across TTS requests; "
            f"increase --chunk-chars (needed at least {len(normalized)})")
    for piece in pieces:
        # JSON framing avoids collisions when creative text contains pipes,
        # newlines, or other delimiter-looking punctuation.
        sig = json.dumps(
             [CACHE_FORMAT, backend, voice, gender, tone.rate, tone.pitch,
             apple_volume, apple_emphasis, apple_pause_ms,
             apple_sentence_pause_ms, apple_trailing_pause_ms,
             apple_rate_wpm, apple_pitch_baseline, apple_substitutions,
             apple_phonemes, piece],
            ensure_ascii=False,
            separators=(",", ":"),
        )
        h = hashlib.sha256(sig.encode("utf-8")).hexdigest()[:24]
        jobs.append(Job(
            piece, voice, gender, tone.rate, tone.pitch,
            cache / f"{h}.mp3", apple_volume, apple_emphasis, apple_pause_ms,
            apple_sentence_pause_ms, apple_trailing_pause_ms,
            apple_rate_wpm, apple_pitch_baseline,
            apple_substitutions,
            apple_phonemes,
        ))
    return jobs


RETRIES = 3


def failed(job: Job, exc: Exception) -> SystemExit:
    return SystemExit(f"TTS failed after {RETRIES} tries for "
                      f"{job.text[:60]!r}: {exc}")


def run_jobs(jobs: list[Job], backend: str, connections: int) -> None:
    todo = list({
        j.path: j
        for j in jobs
        if not j.path.is_file() or j.path.stat().st_size < 128
    }.values())
    if not todo:
        return
    print(f"synthesising {len(todo)} clip(s) over {connections} connection(s) "
          f"({len(jobs) - len(todo)} already cached)")

    if backend == "edge":
        import asyncio
        import edge_tts

        async def gather() -> None:
            sem = asyncio.Semaphore(connections)

            async def one(job: Job) -> None:
                async with sem:
                    for n in range(RETRIES):
                        tmp = job.path.with_suffix(".part")
                        try:
                            boundaries = []
                            audio_data = b""
                            async for data in edge_tts.Communicate(
                                    job.text, job.voice, rate=job.rate,
                                    pitch=job.pitch).stream():
                                if data.get("type") == "audio":
                                    audio_data += data.get("data", b"")
                                elif data.get("type") == "WordBoundary":
                                    boundaries.append({
                                        "TextOffset": data.get("text_offset", 0),
                                        "AudioOffset": data.get("offset", 0),
                                        "Duration": data.get("duration", 0),
                                        "Text": data.get("text", "")
                                    })
                            if not audio_data:
                                raise RuntimeError("empty response")
                            tmp.write_bytes(audio_data)
                            boundary_file = job.path.with_suffix(".json")
                            boundary_file.write_text(json.dumps(boundaries), encoding="utf-8")
                            tmp.replace(job.path)
                            return
                        except Exception as exc:
                            tmp.unlink(missing_ok=True)
                            job.path.with_suffix(".json").unlink(missing_ok=True)
                            if n == RETRIES - 1:
                                raise failed(job, exc) from exc
                            time.sleep(0.4 * (2 ** n))

            await asyncio.gather(*(one(j) for j in todo))

        asyncio.run(gather())
        return

    def fetch(job: Job) -> None:
        for n in range(RETRIES):
            tmp = job.path.with_suffix(".part")
            try:
                if backend == "apple":
                    synth_apple(
                        job.text, job.voice, job.rate, job.pitch, tmp,
                        job.apple_volume, job.apple_emphasis, job.apple_pause_ms,
                        job.apple_sentence_pause_ms, job.apple_trailing_pause_ms,
                        job.apple_rate_wpm, job.apple_pitch_baseline,
                        job.apple_substitutions,
                        job.apple_phonemes,
                    )
                else:
                    synth_gtts(job.text, job.gender, tmp)
                tmp.replace(job.path)
                return
            except Exception as exc:
                tmp.unlink(missing_ok=True)
                if n == RETRIES - 1:
                    raise failed(job, exc) from exc
                time.sleep(0.4 * (2 ** n))

    with ThreadPoolExecutor(max_workers=connections) as pool:
        list(pool.map(fetch, todo))


def join_jobs(jobs: list[Job], stem: Path) -> Path:
    if len(jobs) == 1:
        return jobs[0].path
    wavs = []
    for i, job in enumerate(jobs):
        w = stem.with_name(f"{stem.name}-c{i}.wav")
        run(ff("-i", str(job.path), "-ar", str(SR), "-ac", "1", str(w)))
        wavs.append(w)
    lst = stem.with_name(f"{stem.name}-chunks.concat")
    lst.write_text("".join(f"file '{w.name}'\n" for w in wavs), encoding="utf-8")
    joined = stem.with_name(f"{stem.name}-joined.wav")
    run(ff("-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy",
           str(joined)))
    return joined


GTTS_SHIFT = {"male": 0.90, "female": 1.06}

APPLE_VOICE_BY_GENDER = {"male": "Alex", "female": "Samantha"}
_APPLE_VOICES: set[str] | None = None
_APPLE_VOICES_LOCK = threading.Lock()


def apple_voices() -> set[str]:
    global _APPLE_VOICES
    if _APPLE_VOICES is not None:
        return _APPLE_VOICES
    with _APPLE_VOICES_LOCK:
        if _APPLE_VOICES is not None:
            return _APPLE_VOICES
        try:
            result = subprocess.run(["say", "-v", "?"], capture_output=True,
                                    text=True, check=False)
        except OSError:
            _APPLE_VOICES = set()
            return _APPLE_VOICES
        voices = set()
        for line in (result.stdout + "\n" + result.stderr).splitlines():
            match = re.search(r"\s+[a-z]{2}[_-][A-Z]{2}(?:[-_]#\d+)?\b", line)
            if match:
                name = line[:match.start()].strip()
                if name:
                    voices.add(name)
        _APPLE_VOICES = voices
    return voices


def apple_voice(requested: str, gender: str) -> str:
    installed = apple_voices()
    if requested and not requested.lower().startswith("en-"):
        if installed and requested not in installed:
            raise SystemExit(
                f"Apple voice {requested!r} is not installed; use --list-voices")
        return requested
    preferred = APPLE_VOICE_BY_GENDER[gender]
    if not installed or preferred in installed:
        return preferred
    alternatives = ("Daniel", "Oliver", "Karen", "Moira")
    return next((name for name in alternatives if name in installed), preferred)


def apple_rate(rate: str) -> int:
    match = re.fullmatch(r"([+-]?\d+(?:\.\d+)?)%", rate)
    if not match:
        return 180
    return max(80, round(180 * (1 + float(match.group(1)) / 100)))


def apple_pitch(pitch: str) -> int:
    match = re.fullmatch(r"([+-]?\d+(?:\.\d+)?)Hz", pitch)
    if not match:
        return 50
    return max(0, min(100, round(50 + float(match.group(1)) * 1.5)))


APPLE_EMPHASIS = ("none", "reduced", "strong")


def apple_markup(
    text: str,
    rate: str,
    pitch: str,
    volume: float = 1.0,
    emphasis: str = "none",
    pause_ms: int = 0,
    sentence_pause_ms: int = 0,
    trailing_pause_ms: int = 0,
    rate_wpm: int | None = None,
    pitch_baseline: int | None = None,
    substitutions: tuple[tuple[str, str], ...] = (),
    phonemes: tuple[tuple[str, str], ...] = (),
) -> str:
    if emphasis not in APPLE_EMPHASIS:
        raise ValueError(f"unknown Apple emphasis {emphasis!r}")
    if not 0.0 <= volume <= 1.0:
        raise ValueError("Apple volume must be between 0.0 and 1.0")
    for name, value in (
        ("pause", pause_ms),
        ("sentence pause", sentence_pause_ms),
        ("trailing pause", trailing_pause_ms),
    ):
        if not 0 <= value <= 10_000:
            raise ValueError(f"Apple {name} must be between 0 and 10000 milliseconds")
    if rate_wpm is not None and not 80 <= rate_wpm <= 500:
        raise ValueError("Apple rate must be between 80 and 500 words per minute")
    if pitch_baseline is not None and not 0 <= pitch_baseline <= 100:
        raise ValueError("Apple pitch baseline must be between 0 and 100")
    safe_text = text.replace("[[", "[ [").replace("]]", "] ]")
    for source, spoken in sorted(substitutions, key=lambda pair: len(pair[0]), reverse=True):
        if (
            not source
            or "[[" in source
            or "]]" in source
            or "[[" in spoken
            or "]]" in spoken
        ):
            raise ValueError("Apple pronunciation pairs must be non-empty and contain no markup")
        safe_text = safe_text.replace(source, spoken)
    for source, phonetic in sorted(phonemes, key=lambda pair: len(pair[0]), reverse=True):
        if (
            not source
            or not phonetic
            or "[[" in source
            or "]]" in source
            or "[[" in phonetic
            or "]]" in phonetic
        ):
            raise ValueError("Apple phoneme pairs must be non-empty and contain no markup")
        safe_text = safe_text.replace(
            source, f"[[inpt PHON]]{phonetic}[[inpt TEXT]]"
        )
    if sentence_pause_ms:
        safe_text = re.sub(
            rf"([.!?]+)(?=\s|$)",
            rf"\1 [[slnc {sentence_pause_ms}]]",
            safe_text,
        )
    commands = [
        f"[[rate {rate_wpm if rate_wpm is not None else apple_rate(rate)}]]",
        f"[[pbas {pitch_baseline if pitch_baseline is not None else apple_pitch(pitch)}]]",
        f"[[volm {volume:.3f}]]",
    ]
    if emphasis == "strong":
        commands.append("[[emph +]]")
    elif emphasis == "reduced":
        commands.append("[[emph -]]")
    if pause_ms:
        commands.append(f"[[slnc {pause_ms}]]")
    if trailing_pause_ms:
        safe_text = f"{safe_text} [[slnc {trailing_pause_ms}]]"
    return " ".join(commands + [safe_text])


def synth_apple(
    text: str,
    voice: str,
    rate: str,
    pitch: str,
    dest: Path,
    volume: float = 1.0,
    emphasis: str = "none",
    pause_ms: int = 0,
    sentence_pause_ms: int = 0,
    trailing_pause_ms: int = 0,
    rate_wpm: int | None = None,
    pitch_baseline: int | None = None,
    substitutions: tuple[tuple[str, str], ...] = (),
    phonemes: tuple[tuple[str, str], ...] = (),
) -> None:
    aiff = dest.with_suffix(".aiff")
    try:
        installed = apple_voices()
        if installed and voice not in installed:
            raise RuntimeError(
                f"voice {voice!r} is not installed; use 'say -v ?' to list voices")
        result = subprocess.run(
            ["say", "-v", voice, "-o", str(aiff),
             apple_markup(
                 text, rate, pitch, volume, emphasis, pause_ms,
                 sentence_pause_ms, trailing_pause_ms,
                 rate_wpm, pitch_baseline,
                 substitutions,
                 phonemes,
             )],
            capture_output=True, text=True)
        if result.returncode:
            detail = result.stderr.strip() or result.stdout.strip()
            raise RuntimeError(detail or f"say could not use voice {voice!r}")
        if not aiff.exists() or aiff.stat().st_size < 128:
            raise RuntimeError("say produced no audio")
        run(ff("-i", str(aiff), "-c:a", "libmp3lame", "-q:a", "4", str(dest)))
    finally:
        aiff.unlink(missing_ok=True)


def synth_gtts(text: str, gender: str, dest: Path) -> None:
    q = urllib.parse.urlencode(
        {"ie": "UTF-8", "client": "tw-ob", "tl": "en-GB", "q": text})
    req = urllib.request.Request(
        f"https://translate.google.com/translate_tts?{q}",
        headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    if not (data[:1] == b"\xff" or data[:3] == b"ID3"):
        raise RuntimeError(f"non-audio response ({len(data)} bytes)")
    dest.write_bytes(data)


def run(args: list[str]) -> None:
    p = subprocess.run(args, capture_output=True, text=True)
    if p.returncode:
        sys.stderr.write(p.stderr[-4000:] + "\n")
        raise SystemExit(f"ffmpeg failed: {' '.join(args[:8])} ...")


def ff(*args: str) -> list[str]:
    return ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *args]


def duration(path: Path) -> float:
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "csv=p=0", str(path)],
        capture_output=True, text=True, check=True).stdout.strip()
    try:
        return float(out)
    except ValueError:
        raise SystemExit(f"no duration for {rel(path)} (ffprobe said {out!r})")


def loudness(path: Path, start: float = 0.0,
             span: float | None = None) -> tuple[float, float]:
    window = ["-ss", f"{start:.3f}"] if start else []
    if span:
        window += ["-t", f"{span:.3f}"]
    p = subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "info", "-nostats",
                        *window, "-i", str(path), "-af", "ebur128=peak=true",
                        "-f", "null", "-"], capture_output=True, text=True)
    i = re.search(r"Integrated loudness:\s*\n\s*I:\s*(-?[\d.]+)", p.stderr)
    t = re.search(r"True peak:\s*\n\s*Peak:\s*(-?[\d.]+)", p.stderr)
    if not (i and t):
        raise SystemExit(f"could not measure loudness of {rel(path)}")
    return float(i.group(1)), float(t.group(1))


def silence(seconds: float, dest: Path) -> None:
    run(ff("-f", "lavfi", "-i", f"anullsrc=r={SR}:cl=mono",
           "-t", f"{max(seconds, 0.01):.3f}", "-c:a", "pcm_s16le", str(dest)))


def shape_line(src: Path, dest: Path, tone: Tone, shift: float,
               wow: int = 0, variation: tuple[float, str] = (1.0, "")) -> None:
    chain = []
    variation_shift, variation_filter = variation
    shift *= variation_shift
    if abs(shift - 1.0) > 1e-3:
        chain += [f"asetrate={SR}*{shift:.4f}", f"aresample={SR}",
                  f"atempo={1 / shift:.4f}"]
    chain += [tone.eq, tone.comp]
    freq, depth = WOW[wow]
    if depth:
        chain.append(f"vibrato=f={freq}:d={depth}")
    if variation_filter:
        chain.append(variation_filter)
    chain.append(
        f"aformat=sample_fmts=s16:sample_rates={SR}:channel_layouts=mono")
    run(ff("-i", str(src), "-af", ",".join(c for c in chain if c),
           "-ar", str(SR), "-ac", "1", str(dest)))


CRACKLE_SHAPE = ("highpass=f=1500,"
                 "compand=attacks=0:decays=0.015:"
                 "points=-90/-90|-32/-90|-26/-14|0/-7")


def measure_group(sources: list[tuple[str, str]], seconds: float,
                  scratch: Path) -> float:
    cmd = ff()
    for src, _ in sources:
        cmd += ["-f", "lavfi", "-t", f"{seconds:.3f}",
                "-i", f"{src}:sample_rate={SR}"]
    graph = [f"[{i}:a]{filt}[g{i}]" for i, (_, filt) in enumerate(sources)]
    taps = "".join(f"[g{i}]" for i in range(len(sources)))
    graph.append(f"{taps}amix=inputs={len(sources)}:normalize=0:duration=first[o]"
                 if len(sources) > 1 else f"[g0]anull[o]")
    run(cmd + ["-filter_complex", ";".join(graph), "-map", "[o]",
               "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", str(scratch)])
    measured = loudness(scratch)[0]
    scratch.unlink(missing_ok=True)
    return measured


def transmit(voice_wav: Path, dest: Path, s: Set,
             drops: list[tuple[float, float]], target_lufs: float,
             bed_db: float | None, crackle: int = 0, distance: int = 0) -> None:
    d = duration(voice_wav)
    groups: list[tuple[list[tuple[str, str]], float]] = []
    if s.bed and bed_db is not None:
        groups.append((list(s.bed), bed_db))
    if CRACKLE[crackle] is not None:
        groups.append(([("anoisesrc=color=white:amplitude=1.0",
                         CRACKLE_SHAPE)], CRACKLE[crackle]))

    top_scale, wet, delay = DISTANCE[distance]
    top = max(int(s.band[1] * top_scale), s.band[0] + 200)
    vchain = [f"highpass=f={s.band[0]}", f"lowpass=f={top}"]
    if drops:
        cond = "+".join(f"between(t,{a:.3f},{b:.3f})" for a, b in drops)
        vchain.append(f"volume='if({cond},0.10,1)':eval=frame")
    if s.extra:
        vchain.append(s.extra)
    if wet:
        vchain.append(f"aecho=0.88:0.55:{delay}:{wet:.2f}")
    fade_in = min(0.35, d / 3)
    fade_out = min(0.9, d / 3)
    vchain += [f"volume={s.gain}", f"afade=t=in:st=0:d={fade_in:.3f}",
               f"afade=t=out:st={max(d - fade_out, 0.0):.3f}:d={fade_out:.3f}"]
    voice = ",".join(vchain)

    scratch = voice_wav.with_name(voice_wav.stem + "-pre.wav")
    run(ff("-i", str(voice_wav), "-af", voice,
           "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", str(scratch)))
    voice_gain = target_lufs - loudness(scratch)[0]
    scratch.unlink(missing_ok=True)

    cmd = ff("-i", str(voice_wav))
    graph = [f"[0:a]{voice},volume={voice_gain:.2f}dB[v]"]
    mixes, index = [], 1
    for sources, offset in groups:
        placed = (target_lufs + offset) - measure_group(sources, d, scratch)
        taps = []
        for src, filt in sources:
            cmd += ["-f", "lavfi", "-t", f"{d:.3f}",
                    "-i", f"{src}:sample_rate={SR}"]
            graph.append(f"[{index}:a]{filt}[s{index}]")
            taps.append(f"[s{index}]")
            index += 1
        tag = f"grp{len(mixes)}"
        graph.append(
            f"{''.join(taps)}amix=inputs={len(taps)}:normalize=0:duration=first,"
            f"volume={placed:.2f}dB[{tag}]" if len(taps) > 1
            else f"{taps[0]}volume={placed:.2f}dB[{tag}]")
        mixes.append(f"[{tag}]")

    master = "alimiter=limit=0.71:level=disabled"
    graph.append(f"[v]{''.join(mixes)}"
                 f"amix=inputs={len(mixes) + 1}:normalize=0:duration=first,"
                 f"{master}[o]" if mixes else f"[v]{master}[o]")

    run(cmd + ["-filter_complex", ";".join(graph), "-map", "[o]",
               "-ar", str(SR), "-ac", "1", "-c:a", "pcm_s16le", str(dest)])


def update_manifest(entries: dict[str, str]) -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    data.setdefault("sfx", {}).update(entries)
    MANIFEST.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n",
                        encoding="utf-8")


def prune_manifest() -> None:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    sfx = data.get("sfx", {})
    to_remove = []
    for key in list(sfx.keys()):
        if key.startswith("vo-"):
            path = ROOT / "web" / "res" / sfx[key]
            if not path.exists():
                to_remove.append(key)
    if to_remove:
        for key in to_remove:
            del sfx[key]
        MANIFEST.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n",
                            encoding="utf-8")
        print(f"pruned {len(to_remove)} dead manifest entries")


def check_clips(max_seconds: float, lufs: float) -> int:
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    sfx = data.get("sfx", {})
    failures = []

    for key, rel_path in sfx.items():
        if not key.startswith("vo-"):
            continue
        path = ROOT / "web" / "res" / rel_path
        if not path.exists():
            failures.append(f"{key}: file missing ({rel_path})")
            continue

        try:
            secs = duration(path)
        except SystemExit:
            failures.append(f"{key}: cannot read duration")
            continue

        if max_seconds and secs > max_seconds + 0.5:
            failures.append(f"{key}: {secs:.1f}s exceeds budget {max_seconds}s by "
                          f"{secs - max_seconds:.1f}s")

        try:
            measured_lufs, tpk = loudness(path, 0.5, max(secs - 1.0, 0.5))
        except SystemExit:
            failures.append(f"{key}: cannot measure loudness")
            continue

        if abs(measured_lufs - lufs) > 3.0:
            failures.append(f"{key}: loudness {measured_lufs:.1f} LUFS is "
                          f"{abs(measured_lufs - lufs):.1f} LU from target {lufs:.1f}")

        if tpk > -1.0:
            failures.append(f"{key}: true peak {tpk:.1f} dBTP exceeds −1.0 dBTP")

    if failures:
        for msg in failures:
            print(f"check failed: {msg}")
        return 1
    return 0


def detect_marker(text: str) -> int | None:
    idx = text.find("  ")
    return idx if idx >= 0 else None


def marker_to_word_index(text: str, marker_pos: int) -> int:
    return len(text[:marker_pos].split())


def find_dropout_window_from_boundaries(boundaries: list, marker_pos: int,
                                        text: str) -> tuple[float, float] | None:
    word_idx = marker_to_word_index(text, marker_pos)
    if word_idx >= len(boundaries):
        return None
    boundary = boundaries[word_idx]
    audio_offset_s = boundary["AudioOffset"] / 10_000_000.0
    duration_s = boundary["Duration"] / 10_000_000.0
    return (audio_offset_s, audio_offset_s + duration_s)


def rel(p: Path) -> str:
    try:
        return p.relative_to(ROOT).as_posix()
    except ValueError:
        return p.as_posix()


@dataclass
class Plan:

    unit: Unit
    tone: Tone
    s: Set
    voice: str
    shift: float
    r: dict
    level: int
    wow: int
    crackle: int
    distance: int
    dropouts: int | None
    fault_part: str
    lead: float | None
    variation: tuple[float, str]
    stem: str
    jobs: list[list[Job]]


def plan_units(units: list[Unit], a: argparse.Namespace,
               cache: Path) -> list[Plan]:
    plans = []
    for unit in units:
        tone = TONES[pick(a, unit, "tone")]
        overrides = {}
        if getattr(a, "rate", None):
            overrides["rate"] = a.rate
        if getattr(a, "pitch", None):
            overrides["pitch"] = a.pitch
        if overrides:
            tone = replace(tone, **overrides)
        gender = pick(a, unit, "voice")
        variation_name = pick(a, unit, "variation")
        if variation_name not in VARIATIONS:
            raise SystemExit(
                f"{unit.stem}: variation is {variation_name!r}, needs "
                f"one of {', '.join(VARIATIONS)}")
        voice = (a.voice_name
                 or unit.direction.get("voice_name")
                 or SPEAKERS.get(unit.speaker, {}).get("voice_name")
                 or (tone.male if gender == "male" else tone.female))
        if a.backend == "apple":
            voice = apple_voice(voice, gender)
        gauge = {}
        for key, table in GAUGES.items():
            raw = str(pick(a, unit, key))
            if not raw.lstrip("-").isdigit() or int(raw) not in table:
                raise SystemExit(
                    f"{unit.stem}: {key} is {raw!r}, needs "
                    f"{min(table)}-{max(table)}")
            gauge[key] = int(raw)
        rng = random.Random(f"{a.seed}:text:{unit.stem}")
        jobs = [[] if p.absent else
                plan_jobs(resolve(p.text, rng, TEXT_CHOICES, unit_address(unit, p)),
                          cache, a.backend, voice, gender, tone, a.chunk_chars,
                          getattr(a, "apple_volume", 1.0),
                          getattr(a, "apple_emphasis", "none"),
                          getattr(a, "apple_pause_ms", 0),
                          getattr(a, "apple_sentence_pause_ms", 0),
                          getattr(a, "apple_trailing_pause_ms", 0),
                          getattr(a, "apple_rate_wpm", None),
                          getattr(a, "apple_pitch_baseline", None),
                          tuple(getattr(a, "apple_substitutions", ()) or ()),
                          tuple(getattr(a, "apple_phonemes", ()) or ()))
                for p in unit.parts]
        drops = str(pick(a, unit, "dropouts"))
        lead = str(pick(a, unit, "lead"))
        plans.append(Plan(
            unit, tone, SETS[pick(a, unit, "set")], voice,
            1.0 if a.backend in ("edge", "apple") else GTTS_SHIFT[gender],
            RADIO[gauge["radio_level"]], gauge["radio_level"], gauge["wow"],
            gauge["crackle"], gauge["distance"],
            int(drops) if drops else None, str(pick(a, unit, "fault_part")),
            float(lead) if lead else None,
            VARIATIONS[variation_name],
            unit.stem + (f"-{a.tag}" if a.tag else ""), jobs))
    return plans


def render(plan: Plan, a: argparse.Namespace, out_dir: Path,
           work: Path) -> tuple[dict[str, str], list[str]]:
    unit, tone, s, r = plan.unit, plan.tone, plan.s, plan.r
    stem, entries, report = plan.stem, {}, []
    rng = random.Random(f"{a.seed}:fault:{unit.stem}")
    base_lead = plan.lead if plan.lead is not None else s.lead
    lead_len = base_lead * tone.lead * r["lead"]

    marker_info: dict[int, tuple[int, str] | None] = {}
    for i, part in enumerate(unit.parts):
        if "word-missing" in unit.cues and not part.absent:
            rng_text = random.Random(f"{a.seed}:text:{unit.stem}:{i}")
            resolved = resolve(part.text, rng_text, TEXT_CHOICES,
                                unit_address(unit, part))
            marker_pos = detect_marker(resolved)
            if marker_pos is not None:
                marker_info[i] = (marker_pos, resolved)
            else:
                marker_info[i] = None
        else:
            marker_info[i] = None

    voiced: list[Piece] = []
    for i, part in enumerate(unit.parts):
        gap = a.gap * tone.gap * (1.6 if part.label == "closing" else 1.0)
        if part.absent:
            hole = a.gap * tone.gap * 1.5
            h = work / f"{stem}-hole{i}.wav"
            silence(hole, h)
            voiced.append(Piece(part.label, h, hole, gap, absent=True))
            continue
        audio = join_jobs(plan.jobs[i], work / f"{stem}-{i}")
        shaped = work / f"{stem}-{i}.wav"
        shape_line(audio, shaped, tone, plan.shift, plan.wow, plan.variation)
        voiced.append(Piece(part.label, shaped, duration(shaped), gap))

    budget = a.max_seconds
    chunks: list[list[Piece]] = [[]]
    used = lead_len + s.tail
    for piece in voiced:
        cost = piece.seconds + (piece.gap if chunks[-1] else 0.0)
        if budget and chunks[-1] and used + cost > budget:
            chunks.append([])
            used = 0.25 + 0.4
            cost = piece.seconds
        chunks[-1].append(piece)
        used += cost
    chunks = [c for c in chunks if c]

    n = plan.dropouts if plan.dropouts is not None else (
        round(s.dropouts * r["drops"])
        + (r["add"] if s.bed and r["bed"] is not None else 0))
    spoken = [p for p in voiced if not p.absent]
    wanted = plan.fault_part or "sighting"
    target = next((p for p in spoken if p.label == wanted),
                  max(spoken, key=lambda p: p.seconds, default=None))
    host = next((i for i, c in enumerate(chunks) if target in c), -1)

    for ci, chunk in enumerate(chunks):
        first, last = ci == 0, ci == len(chunks) - 1
        head = lead_len if first else 0.25
        foot = s.tail if last else 0.4
        part_of = f"-{ci + 1}" if len(chunks) > 1 else ""
        name = f"{stem}{part_of}"

        segments, spans, clock = [], {}, head
        pad = work / f"{name}-lead.wav"
        silence(head, pad)
        segments.append(pad)
        for pi, piece in enumerate(chunk):
            if pi:
                g = work / f"{name}-gap{pi}.wav"
                silence(piece.gap, g)
                segments.append(g)
                clock += piece.gap
            segments.append(piece.path)
            spans[id(piece)] = (clock, clock + piece.seconds)
            clock += piece.seconds
        tail = work / f"{name}-tail.wav"
        silence(foot, tail)
        segments.append(tail)

        lst = work / f"{name}.concat"
        lst.write_text("".join(f"file '{p.name}'\n" for p in segments),
                       encoding="utf-8")
        joined = work / f"{name}-voice.wav"
        run(ff("-f", "concat", "-safe", "0", "-i", str(lst), "-c", "copy",
               str(joined)))

        drops: list[tuple[float, float]] = []
        if n and ci == host and target is not None:
            st, en = spans[id(target)]

            marker_target_part_idx = None
            for part_idx, piece in enumerate(voiced):
                if piece is target:
                    marker_target_part_idx = part_idx
                    break

            marker_data = (
                marker_info.get(marker_target_part_idx)
                if marker_target_part_idx is not None
                else None
            )

            if (
                marker_data is not None
                and marker_target_part_idx is not None
                and a.backend == "edge"
            ):
                marker_pos, resolved = marker_data
                try:
                    jobs_for_part = plan.jobs[marker_target_part_idx]
                    if jobs_for_part:
                        boundary_file = jobs_for_part[0].path.with_suffix(".json")
                        if boundary_file.exists():
                            boundaries = json.loads(boundary_file.read_text(encoding="utf-8"))
                            word_window = find_dropout_window_from_boundaries(
                                boundaries, marker_pos, resolved)
                            if word_window:
                                word_st, word_en = word_window
                                dropout_st = max(word_st - 0.12, st)
                                dropout_en = min(word_st + 0.18, en)
                                if dropout_st < dropout_en:
                                    drops.append((dropout_st, dropout_en))
                            else:
                                span = max(en - st, 0.6)
                                lo, hi = st + span * 0.45, st + span * 0.90
                                for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                                    at = rng.uniform(lo, hi)
                                    drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
                        else:
                            span = max(en - st, 0.6)
                            lo, hi = st + span * 0.45, st + span * 0.90
                            for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                                at = rng.uniform(lo, hi)
                                drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
                    else:
                        span = max(en - st, 0.6)
                        lo, hi = st + span * 0.45, st + span * 0.90
                        for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                            at = rng.uniform(lo, hi)
                            drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
                except Exception:
                    span = max(en - st, 0.6)
                    lo, hi = st + span * 0.45, st + span * 0.90
                    for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                        at = rng.uniform(lo, hi)
                        drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
            elif marker_data is not None and a.backend == "gtts":
                marker_pos, resolved = marker_data
                word_count = len(resolved.split())
                if word_count > 0:
                    proportion = marker_pos / len(resolved)
                    span = max(en - st, 0.6)
                    dropout_pos = st + span * proportion
                    dropout_en = min(dropout_pos + rng.uniform(0.15, 0.35), en)
                    drops.append((dropout_pos, dropout_en))
                else:
                    span = max(en - st, 0.6)
                    lo, hi = st + span * 0.45, st + span * 0.90
                    for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                        at = rng.uniform(lo, hi)
                        drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
            else:
                span = max(en - st, 0.6)
                lo, hi = st + span * 0.45, st + span * 0.90
                for _ in range(min(n, max(1, int((hi - lo) / 0.8)))):
                    at = rng.uniform(lo, hi)
                    drops.append((at, min(at + rng.uniform(0.15, 0.35), en)))
            drops.sort()

        wav = out_dir / f"{name}.wav"
        transmit(joined, wav, s, drops, a.lufs, r["bed"], plan.crackle,
                 plan.distance)
        ogg = out_dir / f"{name}.ogg"
        run(ff("-i", str(wav), "-c:a", "libvorbis", "-q:a", str(a.quality),
               str(ogg)))
        if not a.keep_wav:
            wav.unlink()

        secs = duration(ogg)
        i_lufs, _ = loudness(ogg, head, max(clock - head, 0.5))
        _, tpk = loudness(ogg)
        try:
            entries[f"vo-{name}"] = ogg.relative_to(
                ROOT / "web" / "res").as_posix()
        except ValueError:
            pass
        over = "  OVER BUDGET" if budget and secs > budget + 0.5 else ""
        report.append(f"  {name:<34} {secs:6.2f}s  {i_lufs:6.1f} LUFS  "
                      f"{tpk:5.1f} dBTP  {len(chunk):2d} part(s)"
                      + (f"  {len(drops)} dropout(s)" if drops else "") + over)

    return entries, report


def report_cache_size() -> None:
    if not CACHE.exists():
        return
    total = sum(f.stat().st_size for f in CACHE.rglob("*") if f.is_file())
    if total > 200 * 1024 * 1024:
        size_mb = total / (1024 * 1024)
        print(f"cache size: {size_mb:.0f} MB (exceeds 200 MB limit)")


def prune_cache(plans: list[Plan]) -> None:
    referenced = {j.path for p in plans for part in p.jobs for j in part}
    if not CACHE.exists():
        return
    removed = 0
    for entry in CACHE.iterdir():
        if entry.is_file() and entry not in referenced:
            entry.unlink()
            removed += 1
    if removed:
        print(f"pruned {removed} unreferenced cache entries")


def build(units: list[Unit], a: argparse.Namespace) -> None:
    out_dir = (Path(a.out).resolve() if a.out else OUT_DIR)
    work = out_dir / ".work"
    for d in (out_dir, work, CACHE):
        d.mkdir(parents=True, exist_ok=True)

    plans = plan_units(units, a, CACHE)

    if a.refresh:
        if a.refresh is True:
            to_clear = {j.path for p in plans for part in p.jobs for j in part}
        elif isinstance(a.refresh, str) and a.refresh in {u.speaker for u in units}:
            to_clear = {j.path for p in plans if p.unit.speaker == a.refresh
                       for part in p.jobs for j in part}
        elif isinstance(a.refresh, str) and a.refresh.isdigit() and int(a.refresh) in {u.day for u in units}:
            to_clear = {j.path for p in plans if p.unit.day == int(a.refresh)
                       for part in p.jobs for j in part}
        else:
            to_clear = {j.path for p in plans for part in p.jobs for j in part}
        for job in to_clear:
            job.unlink(missing_ok=True)

    run_jobs([j for p in plans for part in p.jobs for j in part],
             a.backend, a.connections)

    entries: dict[str, str] = {}
    with ThreadPoolExecutor(max_workers=a.jobs) as pool:
        for got, report in pool.map(
                lambda p: render(p, a, out_dir, work), plans):
            entries.update(got)
            print("\n".join(report))

    if not a.no_clean:
        shutil.rmtree(work, ignore_errors=True)
    if not a.no_manifest:
        if entries:
            update_manifest(entries)
            print(f"\nmanifest: {len(entries)} key(s) written under sfx "
                  f"(vo-* → vo/*.ogg)")
        prune_manifest()

    report_cache_size()


def main() -> None:
    p = argparse.ArgumentParser(
        description=(__doc__ or "").split("\n")[0],
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=("tones:    " + "  ".join(TONES)
                + "\nsets:     " + "  ".join(SETS)
                + "\ngauges:   " + "  ".join(f"--{g.replace('_level', '')}"
                                             for g in GAUGES) + "  (each 0-5)"
                + "\nspeakers: " + "  ".join(SPEAKERS)))
    p.add_argument("--day", type=int, action="append",
                   help="restrict to these days (repeatable)")
    p.add_argument("--speaker", action="append",
                   help=f"restrict to these speakers (repeatable); "
                        f"'{BROADCAST}' for the wireless")
    p.add_argument("--all", action="store_true",
                   help="include broadcasts (requires --day or --speaker)")
    p.add_argument("--line", help="one-off text, bypassing text/")
    p.add_argument("--line-file", type=Path,
                   help="UTF-8 file containing one-off text; preserves creative punctuation")
    p.add_argument("--name", help="output stem for --line")
    p.add_argument("--cue", action="append", choices=tuple(sorted(CUES)),
                   help="authored performance/transmission cue (repeatable)")

    p.add_argument("--voice", choices=("male", "female"),
                   help="overrides the speaker's default")
    p.add_argument("--voice-name", help="exact installed voice name; beats --voice")
    p.add_argument("--tone", choices=tuple(TONES),
                   help="overrides the speaker's default")
    p.add_argument("--rate", help="precise Edge rate override, e.g. +6%% or -12%%")
    p.add_argument("--pitch", help="precise Edge pitch override, e.g. +2Hz or -8Hz")
    p.add_argument("--apple-volume", type=float, default=1.0, metavar="0..1",
                   help="Apple say volume multiplier (default: 1.0)")
    p.add_argument("--apple-emphasis", choices=APPLE_EMPHASIS, default="none",
                   help="Apple say emphasis for the whole line")
    p.add_argument("--apple-pause-ms", type=int, default=0, metavar="MS",
                   help="Apple say silence before the line, 0-10000 ms")
    p.add_argument("--apple-sentence-pause-ms", type=int, default=0, metavar="MS",
                   help="Apple say silence after sentence punctuation, 0-10000 ms")
    p.add_argument("--apple-trailing-pause-ms", type=int, default=0, metavar="MS",
                   help="Apple say silence after the line, 0-10000 ms")
    p.add_argument("--apple-rate-wpm", type=int, metavar="WPM",
                   help="Apple native speech rate, 80-500 words per minute")
    p.add_argument("--apple-pitch-baseline", type=int, metavar="0-100",
                   help="Apple native pitch baseline, 0-100")
    p.add_argument("--apple-substitute", action="append", default=[], metavar="FROM=TO",
                   help="Apple pronunciation replacement; repeatable")
    p.add_argument("--apple-phoneme", action="append", default=[], metavar="FROM=PHONEMES",
                   help="Apple phonetic replacement in say PHON mode; repeatable")
    p.add_argument("--variation", choices=tuple(VARIATIONS),
                   help="timbre/age variation independent of tone and transmission")
    p.add_argument("--set", choices=tuple(SETS),
                   help="transmission character; overrides the speaker's default")
    p.add_argument("--radio-level", type=int, choices=tuple(RADIO),
                   metavar="0-5",
                   help="static and signal faults: 0 none (use this for ordinary "
                        "dialogue), 1 as-tuned, 5 barely surviving")
    p.add_argument("--wow", type=int, choices=tuple(WOW), metavar="0-5",
                   help="pitch instability — a set whose speed is not quite "
                        "steady. 0 rock solid, 5 seasick")
    p.add_argument("--crackle", type=int, choices=tuple(CRACKLE), metavar="0-5",
                   help="impulsive ticks and pops, separate from --radio-level's "
                        "continuous hiss")
    p.add_argument("--distance", type=int, choices=tuple(DISTANCE),
                   metavar="0-5",
                   help="how far off the speaker is: loses top end and gains "
                        "room, never level, so loudness cannot undo it")

    p.add_argument("--out", help=f"output dir (default: web/res/vo)")
    p.add_argument("--tag", help="suffix on every stem, for A/B renders")
    p.add_argument("--backend", choices=("auto", "edge", "apple", "gtts"),
                   default="auto")
    p.add_argument("--seed", default="board", help="seeds {a|b} picks and faults")
    p.add_argument("--gap", type=float, default=0.75,
                   help="base pause between parts, seconds (default: 0.75)")
    p.add_argument("--max-seconds", type=float, default=30.0, metavar="SECS",
                   help="split a clip that would run longer than this, at part "
                        "boundaries (default: 30; 0 disables splitting)")
    p.add_argument("--chunk-chars", type=int, default=0, metavar="N",
                   help="max characters per TTS request; 0 picks per backend "
                   "(gtts 180, apple/edge 500)")
    p.add_argument("--jobs", "-j", type=int, default=min(8, (os.cpu_count() or 4)),
                   metavar="N", help="concurrent ffmpeg workers (default: min(8, cpu_count))")
    p.add_argument("--connections", type=int, default=8,
                   metavar="N", help="concurrent network requests (default: 8)")
    p.add_argument("--refresh", nargs='?', const=True,
                   help="re-fetch from cache: optional speaker or day to re-fetch a subset")
    p.add_argument("--dropouts", type=int, help="override the set's fault count")
    p.add_argument("--lufs", type=float, default=-16.0, help="target loudness")
    p.add_argument("--quality", type=int, default=3, help="vorbis -q (default: 3)")
    p.add_argument("--keep-wav", action="store_true")
    p.add_argument("--no-manifest", action="store_true")
    p.add_argument("--no-clean", action="store_true", help="keep the .work dir")
    p.add_argument("--list-voices", action="store_true")
    p.add_argument("--check", action="store_true",
                   help="validate all clips: check manifest entries exist, within "
                        "budget, loudness within 3 LU of target, peak ≤ −1.0 dBTP")
    p.add_argument("--prune-cache", action="store_true",
                   help="delete cache entries no plan references")
    p.add_argument("--dry-run", "--dry", action="store_true", dest="dry_run",
                   help="read the queue: every snippet with the direction it "
                        "resolved to, where that came from, and the request "
                        "count before and after dedup. Builds nothing")
    a = p.parse_args()

    if a.list_voices:
        if a.backend == "apple":
            if ensure_apple():
                subprocess.run(["say", "-v", "?"])
        elif ensure_edge():
            subprocess.run([sys.executable, "-m", "edge_tts", "--list-voices"])
        return

    if a.check:
        sys.exit(check_clips(a.max_seconds, a.lufs))

    if a.line and a.line_file:
        p.error("choose --line or --line-file, not both")
    if not (a.all or a.day or a.speaker or a.line or a.line_file):
        p.error("give --day, --speaker, --all, --line or --line-file")
    if a.all and not (a.day or a.speaker):
        p.error("--all requires either --day or --speaker")
    if a.jobs < 1:
        p.error("--jobs must be at least 1")
    if a.connections < 1:
        p.error("--connections must be at least 1")
    if not 0.0 <= a.apple_volume <= 1.0:
        p.error("--apple-volume must be between 0.0 and 1.0")
    if not 0 <= a.apple_pause_ms <= 10_000:
        p.error("--apple-pause-ms must be between 0 and 10000")
    for name, value in (
        ("--apple-sentence-pause-ms", a.apple_sentence_pause_ms),
        ("--apple-trailing-pause-ms", a.apple_trailing_pause_ms),
    ):
        if not 0 <= value <= 10_000:
            p.error(f"{name} must be between 0 and 10000")
    if a.apple_rate_wpm is not None and not 80 <= a.apple_rate_wpm <= 500:
        p.error("--apple-rate-wpm must be between 80 and 500")
    if a.apple_pitch_baseline is not None and not 0 <= a.apple_pitch_baseline <= 100:
        p.error("--apple-pitch-baseline must be between 0 and 100")
    apple_substitutions: list[tuple[str, str]] = []
    for raw in a.apple_substitute:
        source, separator, spoken = raw.partition("=")
        if not separator or not source.strip() or not spoken.strip():
            p.error("--apple-substitute must look like FROM=TO")
        apple_substitutions.append((source, spoken))
    a.apple_substitutions = tuple(apple_substitutions)
    apple_phonemes: list[tuple[str, str]] = []
    for raw in a.apple_phoneme:
        source, separator, phonetic = raw.partition("=")
        if not separator or not source.strip() or not phonetic.strip():
            p.error("--apple-phoneme must look like FROM=PHONEMES")
        apple_phonemes.append((source, phonetic))
    a.apple_phonemes = tuple(apple_phonemes)
    for name, value, suffix in (("--rate", a.rate, "%"), ("--pitch", a.pitch, "Hz")):
        if value and not re.fullmatch(r"[+-]\d+(?:\.\d+)?" + re.escape(suffix), value):
            p.error(f"{name} must look like +6{suffix} or -12{suffix}")
    for tool in ("ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            raise SystemExit(f"{tool} not found on PATH")

    if a.backend == "auto":
        if ensure_edge():
            a.backend = "edge"
        elif ensure_apple():
            a.backend = "apple"
        else:
            a.backend = "gtts"
    elif a.backend == "edge":
        ensure_edge()
    elif a.backend == "apple" and not ensure_apple():
        raise SystemExit("Apple TTS requires the macOS 'say' command")
    if not a.chunk_chars:
        a.chunk_chars = 180 if a.backend == "gtts" else 500

    if a.line or a.line_file:
        if a.line_file:
            try:
                line_text = a.line_file.read_text(encoding="utf-8")
            except OSError as error:
                p.error(f"could not read --line-file: {error}")
        else:
            line_text = a.line
        units = [Unit(a.name or "line", a.speaker[0] if a.speaker else BROADCAST,
                      0, [Part("line", line_text)])]
    else:
        visitor_dir = TEXT_DIR / "visitors"
        broadcast_dir = TEXT_DIR / "broadcasts"

        visitor_paths = sorted(visitor_dir.glob("*.txt")) if visitor_dir.exists() else []
        broadcast_paths = sorted(broadcast_dir.glob("*.txt")) if broadcast_dir.exists() else []

        units = parse(visitor_paths)
        others = sorted(f.name for f in TEXT_DIR.glob("*.txt"))
        if others:
            print(f"not voiced (written objects, not speech): "
                  f"{', '.join(others)}")
        if not units:
            raise SystemExit(f"no scripts found under {rel(visitor_dir)}")

        if a.day and not a.all and broadcast_paths:
            broadcast_units = parse(broadcast_paths)
            requested_days = set(a.day)
            broadcast_days = {u.day for u in broadcast_units}
            skipped = broadcast_days & requested_days
            if skipped:
                print(f"skipping broadcasts for day(s): {', '.join(str(d) for d in sorted(skipped))} "
                      f"(use --all to include)")

        if a.all:
            units.extend(parse(broadcast_paths))

        if not units:
            raise SystemExit("no scripts found")
        if a.day:
            units = [u for u in units if u.day in set(a.day)]
        if a.speaker:
            known = {u.speaker for u in units}
            unknown = set(a.speaker) - known
            if unknown:
                raise SystemExit(f"no such speaker(s): {', '.join(sorted(unknown))}"
                                 f"\nfound: {', '.join(sorted(known))}"
                                 f"\n(use --all to include broadcasts)")
            units = [u for u in units if u.speaker in set(a.speaker)]
        silent = [u for u in units if u.silent]
        if silent:
            print(f"skipping {len(silent)} clip(s) with nothing spoken: "
                  f"{', '.join(u.stem for u in silent[:6])}"
                  + (" ..." if len(silent) > 6 else ""))
            units = [u for u in units if not u.silent]
        if not units:
            raise SystemExit("that --day/--speaker combination matches nothing")

    if a.cue:
        for unit in units:
            for cue in a.cue:
                if cue not in unit.cues:
                    unit.cues.append(cue)

    dest = (Path(a.out).resolve() if a.out else OUT_DIR)

    if a.prune_cache:
        CACHE.mkdir(parents=True, exist_ok=True)
        plans = plan_units(units, a, CACHE)
        prune_cache(plans)
        return

    if a.dry_run:
        plans = plan_units(units, a, CACHE)
        for p in plans:
            u = p.unit
            src = ("cue:" + "+".join(u.cues) if u.cues else
                   "script" if u.direction else
                   "speakers" if u.speaker in SPEAKERS else "default")
            fx = " ".join(f"{k}{v}" for k, v in
                          (("r", p.level), ("w", p.wow), ("c", p.crackle),
                           ("d", p.distance)) if v)
            print(f"\n{u.stem}  [{u.speaker} · {pick(a, u, 'tone')} · "
                  f"{pick(a, u, 'set')} · {fx or 'dry'} · {p.voice}]  ({src})")
            for part_idx, (part, jobs) in enumerate(zip(u.parts, p.jobs)):
                body = "(silence)" if part.absent else " ".join(
                    j.text for j in jobs)
                marker_note = ""
                if "word-missing" in u.cues and not part.absent:
                    rng_text = random.Random(f"{a.seed}:text:{u.stem}:{part_idx}")
                    resolved = resolve(part.text, rng_text, TEXT_CHOICES,
                                        unit_address(u, part))
                    marker_pos = detect_marker(resolved)
                    if marker_pos is not None:
                        marker_note = f"  [dropout marker at char {marker_pos}]"
                req = f" [{len(jobs)} req]" if len(jobs) > 1 else ""
                print(f"    {part.label:<13} {body}{req}{marker_note}")

        all_jobs = [j for p in plans for part in p.jobs for j in part]
        unique = {j.path for j in all_jobs}
        cached = sum(1 for path in unique if path.exists())
        print(f"\n{len(plans)} clip(s), {len(all_jobs)} request(s) → "
              f"{len(unique)} unique after dedup, {cached} already cached, "
              f"{len(unique) - cached} to fetch at {a.connections} at a time")
        return

    print(f"backend={a.backend} seed={a.seed} jobs={a.jobs} → "
          f"{rel(dest)}  ({len(units)} clip(s))")
    build(units, a)


if __name__ == "__main__":
    main()
