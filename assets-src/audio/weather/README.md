# Weather sound design

The runtime weather mix is intentionally split into small loopable sources so
the host can apply physical transmission rather than baking a storm into one
stereo file. Generate the current source set with:

```sh
python3 tools/generate_weather_audio.py
```

The script is deterministic. Its output is loaded through `web/res/manifest.json`
and resolved by `lib/engine/weather_audio.dart`:

- precipitation and wind are attenuated by distance, wall transmission, and
  window aperture;
- closed windows retain low-frequency thunder but remove high-frequency rain;
- an open window admits a separate interior drip layer;
- warmth adds a quiet interior bed without masking the storm;
- lightning schedules thunder at `distance / 343 m/s` and de-duplicates the
  same strike across render frames.
- hail adds a separate low structural-impact layer, while wind can excite a
  closed window frame through a sparse resonance layer;
- warm interiors add an intentionally restrained cup-and-steam texture, and
  every continuous layer now carries its stereo position and room-reverb send
  into WebAudio instead of dropping those resolved values.

The source generator also emits `weather-hail-roof`, `weather-window-rattle`,
and `weather-interior-coffee`. They are deterministic reference textures, not
recorded ambience; hosts can replace them with authored material without
changing the acoustic resolver contract.

Downloaded listening references and their licence records live in
`reference/README.md`; they are not runtime dependencies.
