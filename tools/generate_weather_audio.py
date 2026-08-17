#!/usr/bin/env python3
"""Generate compact, deterministic weather loops for the browser runtime.

The files are deliberately simple WAVs: the game resolves physical layering
and transmission in Dart, while this script supplies repeatable source
material that can be audited, regenerated, or replaced by authored recordings.
"""

from __future__ import annotations

import argparse
import json
import math
import random
import struct
import wave
from pathlib import Path


RATE = 24_000


def write_wav(path: Path, samples: list[tuple[float, float]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    peak = max((max(abs(left), abs(right)) for left, right in samples), default=1.0)
    scale = 0.88 / max(peak, 1e-9)
    with wave.open(str(path), "wb") as output:
        output.setnchannels(2)
        output.setsampwidth(2)
        output.setframerate(RATE)
        frames = bytearray()
        for left, right in samples:
            frames.extend(
                struct.pack(
                    "<hh",
                    int(max(-1.0, min(1.0, left * scale)) * 32767),
                    int(max(-1.0, min(1.0, right * scale)) * 32767),
                )
            )
        output.writeframes(frames)


def smooth_noise(rng: random.Random, count: int, persistence: float = 0.985) -> list[float]:
    value = 0.0
    values: list[float] = []
    for _ in range(count):
        value = value * persistence + rng.uniform(-1.0, 1.0) * (1.0 - persistence)
        values.append(value)
    return values


def rain(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0xA11CE)
    body = smooth_noise(rng, count, 0.985)
    samples: list[tuple[float, float]] = []
    for i in range(count):
        t = i / RATE
        modulation = 0.72 + 0.28 * math.sin(2.0 * math.pi * t / max(seconds, 1.0))
        click = 0.0
        if rng.random() < 0.0017:
            click = (rng.random() * 2.0 - 1.0) * 0.65
        left = body[i] * modulation * 0.55 + click
        right = body[(i + 113) % count] * modulation * 0.55 - click * 0.72
        samples.append((left, right))
    return samples


def hail(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0xBADC0DE)
    samples = [(0.0, 0.0) for _ in range(count)]
    for i in range(count):
        if rng.random() < 0.0009:
            amplitude = 0.45 + rng.random() * 0.5
            length = int(RATE * (0.025 + rng.random() * 0.055))
            frequency = 950.0 + rng.random() * 1_900.0
            pan = rng.random() * 2.0 - 1.0
            for offset in range(min(length, count - i)):
                envelope = math.exp(-offset / max(1.0, length * 0.20))
                tone = math.sin(2.0 * math.pi * frequency * offset / RATE)
                noise = rng.random() * 2.0 - 1.0
                value = amplitude * envelope * (tone * 0.62 + noise * 0.38)
                samples[i + offset] = (
                    samples[i + offset][0] + value * (1.0 - max(0.0, pan)),
                    samples[i + offset][1] + value * (1.0 + min(0.0, pan)),
                )
    return samples


def hail_roof(seconds: float) -> list[tuple[float, float]]:
    """Sparse low resonances for impacts transmitted through a roof or sill."""
    count = int(seconds * RATE)
    rng = random.Random(0xA17F)
    samples = [(0.0, 0.0) for _ in range(count)]
    for i in range(count):
        if rng.random() >= 0.00135:
            continue
        amplitude = 0.24 + rng.random() * 0.48
        length = int(RATE * (0.12 + rng.random() * 0.18))
        fundamental = 180.0 + rng.random() * 420.0
        pan = rng.random() * 2.0 - 1.0
        for offset in range(min(length, count - i)):
            t = offset / RATE
            envelope = math.exp(-t * (8.0 + rng.random() * 3.0))
            tone = math.sin(2.0 * math.pi * fundamental * t)
            overtone = math.sin(2.0 * math.pi * fundamental * 2.71 * t) * 0.28
            value = amplitude * envelope * (tone * 0.72 + overtone)
            left = value * (1.0 - max(0.0, pan))
            right = value * (1.0 + min(0.0, pan))
            samples[i + offset] = (
                samples[i + offset][0] + left,
                samples[i + offset][1] + right,
            )
    return samples


def snow(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0x5100)
    low = smooth_noise(rng, count, 0.998)
    high = smooth_noise(rng, count, 0.992)
    return [(low[i] * 0.25 + high[i] * 0.08, low[i] * 0.23 - high[i] * 0.06) for i in range(count)]


def wind(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0x71AD)
    noise = smooth_noise(rng, count, 0.997)
    samples: list[tuple[float, float]] = []
    for i in range(count):
        t = i / RATE
        gust = 0.60 + 0.40 * (0.5 + 0.5 * math.sin(2.0 * math.pi * t / 5.8))
        stereo = math.sin(2.0 * math.pi * t / 8.7) * 0.16
        samples.append((noise[i] * gust * (0.62 + stereo), noise[i] * gust * (0.62 - stereo)))
    return samples


def window_rattle(seconds: float) -> list[tuple[float, float]]:
    """A quiet frame resonance: pressure and loose hardware, not a noise wall."""
    count = int(seconds * RATE)
    rng = random.Random(0x71A77E)
    low = smooth_noise(rng, count, 0.9992)
    samples = [(0.0, 0.0) for _ in range(count)]
    for i in range(count):
        if rng.random() >= 0.00022:
            continue
        length = int(RATE * (0.16 + rng.random() * 0.22))
        frequency = 72.0 + rng.random() * 38.0
        for offset in range(min(length, count - i)):
            t = offset / RATE
            envelope = math.exp(-t * 12.0)
            value = (math.sin(2.0 * math.pi * frequency * t) * 0.7 + low[i] * 0.3)
            value *= envelope * (0.18 + rng.random() * 0.16)
            samples[i + offset] = (
                samples[i + offset][0] + value,
                samples[i + offset][1] + value * 0.84,
            )
    return samples


def thunder(seconds: float, crack: bool) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0xC1A6 if crack else 0x7011)
    noise = smooth_noise(rng, count, 0.992)
    samples: list[tuple[float, float]] = []
    for i in range(count):
        t = i / RATE
        attack = min(1.0, t / (0.012 if crack else 0.12))
        decay = math.exp(-t / (0.46 if crack else 1.9))
        rumble = noise[i] * attack * decay
        sub = math.sin(2.0 * math.pi * (42.0 + 8.0 * math.sin(t * 2.2)) * t) * 0.25 * decay
        snap = math.exp(-t * 34.0) * (rng.random() * 2.0 - 1.0) if crack else 0.0
        samples.append((rumble + sub + snap, rumble * 0.94 + sub * 1.04 - snap * 0.5))
    return samples


def drip(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0xD11)
    samples = [(0.0, 0.0) for _ in range(count)]
    for i in range(count):
        if rng.random() < 0.00018:
            length = int(RATE * 0.18)
            for offset in range(min(length, count - i)):
                t = offset / RATE
                value = math.sin(2.0 * math.pi * 1_450.0 * t) * math.exp(-t * 28.0)
                samples[i + offset] = (samples[i + offset][0] + value, samples[i + offset][1] + value * 0.86)
    return samples


def warmth(seconds: float) -> list[tuple[float, float]]:
    count = int(seconds * RATE)
    rng = random.Random(0xC0FFEE)
    noise = smooth_noise(rng, count, 0.9995)
    return [(noise[i] * 0.18, noise[i] * 0.18) for i in range(count)]


def coffee(seconds: float) -> list[tuple[float, float]]:
    """Warm, nearly subliminal room detail for a hot cup during a storm."""
    count = int(seconds * RATE)
    rng = random.Random(0xC0FFEE42)
    steam = smooth_noise(rng, count, 0.9997)
    samples: list[tuple[float, float]] = []
    for i in range(count):
        t = i / RATE
        breath = math.sin(2.0 * math.pi * t / 4.7) * 0.012
        clink = 0.0
        if rng.random() < 0.000055:
            clink = math.exp(-((t % 4.9) * 18.0)) * (rng.random() * 2.0 - 1.0) * 0.22
        value = steam[i] * 0.11 + breath + clink
        samples.append((value, value * 0.93))
    return samples


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", type=Path, default=Path("web/res/sfx/weather"))
    parser.add_argument("--seconds", type=float, default=8.0)
    parser.add_argument(
        "--manifest",
        type=Path,
        help="optional recipe manifest path (kept outside web/res by default)",
    )
    args = parser.parse_args()
    if args.seconds <= 0 or not math.isfinite(args.seconds):
        raise SystemExit("--seconds must be positive")
    recipes = {
        "weather-rain": rain(args.seconds),
        "weather-hail": hail(args.seconds),
        "weather-hail-roof": hail_roof(args.seconds),
        "weather-snow": snow(args.seconds),
        "weather-sleet": hail(args.seconds),
        "weather-wind": wind(args.seconds),
        "weather-window-rattle": window_rattle(args.seconds),
        "weather-thunder-bed": thunder(args.seconds, False),
        "weather-thunder-crack": thunder(3.5, True),
        "weather-thunder-roll": thunder(5.0, False),
        "weather-interior-drip": drip(args.seconds),
        "weather-interior-warmth": warmth(args.seconds),
        "weather-interior-coffee": coffee(args.seconds),
    }
    for name, samples in recipes.items():
        write_wav(args.out / f"{name}.wav", samples)
    manifest = {
        "schemaVersion": 1,
        "generator": "tools/generate_weather_audio.py",
        "sampleRateHz": RATE,
        "recipes": {name: "deterministic-procedural" for name in recipes},
        "runtime": "Dart WeatherAudioEngine resolves layering, aperture transmission, and timing",
    }
    if args.manifest is not None:
        args.manifest.parent.mkdir(parents=True, exist_ok=True)
        args.manifest.write_text(json.dumps(manifest, indent=2) + "\n")


if __name__ == "__main__":
    main()
