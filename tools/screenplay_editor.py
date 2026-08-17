#!/usr/bin/env python3
"""Small Tkinter editor for text/story.screenplay.

The editor intentionally uses only Python's standard library. The screenplay
file remains the source of truth; this is a friendly editor for the same
line-oriented format used by tools/story_build.dart, not a second story format.
"""

from __future__ import annotations

import argparse
import copy
import importlib.util
import json
import math
import os
import queue
import re
import shutil
import subprocess
import sys
import threading
from dataclasses import dataclass, field
from pathlib import Path
try:
    import tkinter as tk
    from tkinter import messagebox, simpledialog, ttk
except ImportError:  # Allows --help and clear diagnostics on headless builders.
    tk = None  # type: ignore[assignment]
    messagebox = None  # type: ignore[assignment]
    simpledialog = None  # type: ignore[assignment]
    ttk = None  # type: ignore[assignment]


@dataclass
class Beat:
    kind: str
    text: str
    speaker: str | None = None


@dataclass
class Option:
    option_id: str
    next_scene: str
    label: str


@dataclass
class Branch:
    branch_id: str
    prompt: str
    options: list[Option] = field(default_factory=list)


@dataclass
class Event:
    event_id: str
    kind: str
    day: int
    hour: float
    label: str
    source: str = ""
    speaker: str = ""
    cue: str = ""
    effects: list[str] = field(default_factory=list)
    next_scene: str = ""
    random_from: float | None = None
    random_to: float | None = None


@dataclass
class Scene:
    scene_id: str
    day: int
    title: str
    links: list[str] = field(default_factory=list)
    beats: list[Beat] = field(default_factory=list)
    branches: list[Branch] = field(default_factory=list)


@dataclass
class Script:
    sources: list[str] = field(default_factory=list)
    events: list[Event] = field(default_factory=list)
    scenes: list[Scene] = field(default_factory=list)


TONES = (
    "neutral", "formal", "official", "casual", "courteous", "weary",
    "grave", "clipped", "confiding", "rehearsed", "flat", "happy",
    "aggressive", "apologetic", "frightened", "gracious", "thinning",
    "flattening", "hollowed", "whisper", "adrift",
)
TRANSMISSIONS = (
    "clean", "door", "letterbox", "wireless", "tannoy", "phone", "wall",
    "floor", "window", "tvset", "bedside",
)
VOICE_VARIATIONS = (
    "natural", "bright", "dark", "breathy", "nasal", "strained", "childlike",
    "warm", "hollow", "metallic", "shaky", "elderly",
)
APPLE_EMPHASIS = ("none", "reduced", "strong")
APPLE_VOICE_FALLBACKS = ("Default", "Alex", "Samantha", "Daniel", "Karen", "Moira")
APPLE_VOLUMES = ("0.50", "0.70", "0.85", "1.00")
APPLE_PAUSES = ("0", "100", "250", "500", "750", "1000")
APPLE_SENTENCE_PAUSES = ("0", "100", "200", "300", "500")
APPLE_TRAILING_PAUSES = ("0", "250", "500", "750", "1000")
APPLE_RATE_WPM = ("Auto", "100", "130", "160", "180", "220", "260")
APPLE_PITCH_BASELINES = ("Auto", "35", "45", "50", "55", "65")
VOICE_DEFAULTS = {
    "broadcast": ("formal", "wireless"),
    "child": ("casual", "letterbox"),
}


def _ui_text(value: str) -> str:
    """Keep imported labels readable across Tk/font/encoding combinations."""
    decoded = re.sub(
        r"\\u([0-9a-fA-F]{4})",
        lambda match: chr(int(match.group(1), 16)),
        value,
    )
    replacements = {
        0x2013: "-",
        0x2014: "-",
        0x2212: "-",
        0x2192: "->",
        0x25BE: "",
        0x2022: "*",
        0x00B7: "|",
        0x2026: "...",
        0x2018: "'",
        0x2019: "'",
        0x201C: '"',
        0x201D: '"',
    }
    return "".join(replacements.get(ord(character), character) for character in decoded)


def _shared_tts_cues() -> tuple[str, ...]:
    """Read cue names from the same catalog consumed by scripts/tts.py."""
    corpus_path = Path(__file__).resolve().parent.parent / "scripts" / "corpus.py"
    spec = importlib.util.spec_from_file_location("screenplay_tts_corpus", corpus_path)
    if spec is None or spec.loader is None:
        return ()
    module = importlib.util.module_from_spec(spec)
    try:
        sys.modules[spec.name] = module
        spec.loader.exec_module(module)
    except (OSError, ImportError, AttributeError):
        return ()
    return tuple(sorted(module.CUES))


CUES = _shared_tts_cues()


def parse_script(path: Path) -> Script:
    script = Script()
    scene: Scene | None = None
    branch: Branch | None = None
    event: Event | None = None

    for line_number, raw in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        head, _, value = line.partition("|")
        words = head.strip().split()
        if not words:
            continue
        record = words[0]
        value = value.strip()
        try:
            if record == "SOURCE":
                script.sources.append(words[1])
            elif record == "SCENE":
                if len(words) < 4:
                    raise ValueError("SCENE needs id, day, and title")
                scene = Scene(words[1], int(words[2]), " ".join(words[3:]))
                script.scenes.append(scene)
                branch = None
                event = None
            elif record == "EVENT":
                if len(words) < 5:
                    raise ValueError("EVENT needs id, kind, day, and hour")
                event = Event(words[1], words[2], int(words[3]), float(words[4]), value)
                script.events.append(event)
                scene = None
                branch = None
            elif record == "EVENT_SOURCE":
                _need(event, "EVENT_SOURCE")
                event.source = words[1]
            elif record == "EVENT_SPEAKER":
                _need(event, "EVENT_SPEAKER")
                event.speaker = words[1]
            elif record == "EVENT_CUE":
                _need(event, "EVENT_CUE")
                event.cue = words[1]
            elif record == "EVENT_EFFECT":
                _need(event, "EVENT_EFFECT")
                if "=" not in value or value.startswith("=") or value.endswith("="):
                    raise ValueError("EVENT_EFFECT needs key=value")
                event.effects.append(value)
            elif record == "EVENT_NEXT":
                _need(event, "EVENT_NEXT")
                event.next_scene = words[1]
            elif record == "EVENT_RANDOM":
                _need(event, "EVENT_RANDOM")
                if len(words) != 3:
                    raise ValueError("EVENT_RANDOM needs earliest and latest hour")
                event.random_from = float(words[1])
                event.random_to = float(words[2])
                if (
                    not math.isfinite(event.random_from)
                    or not math.isfinite(event.random_to)
                    or event.random_from < 0
                    or event.random_to >= 24
                    or event.random_from > event.random_to
                ):
                    raise ValueError("EVENT_RANDOM must stay within 0-24 and earliest must come first")
            elif record == "LINK":
                _need(scene, "LINK")
                scene.links.append(words[1])
            elif record == "BEAT":
                _need(scene, "BEAT")
                scene.beats.append(Beat(words[1], value))
            elif record == "DIALOGUE":
                _need(scene, "DIALOGUE")
                scene.beats.append(Beat("dialogue", value, words[1]))
            elif record == "BRANCH":
                _need(scene, "BRANCH")
                branch = Branch(words[1], value)
                scene.branches.append(branch)
            elif record == "OPTION":
                _need(branch, "OPTION")
                branch.options.append(Option(words[1], words[2], value))
            else:
                raise ValueError(f"unknown record {record}")
        except (IndexError, ValueError) as error:
            raise ValueError(f"{path}:{line_number}: {error}") from error
    return script


def _need(value: object | None, record: str) -> None:
    if value is None:
        raise ValueError(f"{record} appears before its parent")


def encode_script(script: Script) -> str:
    lines = [
        "# THE QUARANTINE - master screenplay",
        "# Generated by tools/screenplay_editor.py. Keep prose in the linked text/*.txt corpus.",
        "",
    ]
    lines.extend(f"SOURCE {source}" for source in script.sources)
    lines.append("")
    for event in sorted(script.events, key=lambda item: (item.day, item.hour, item.event_id)):
        lines.append(f"EVENT {event.event_id} {event.kind} {event.day} {event.hour:g} | {event.label}")
        if event.source:
            lines.append(f"EVENT_SOURCE {event.source}")
        if event.speaker:
            lines.append(f"EVENT_SPEAKER {event.speaker}")
        if event.cue:
            lines.append(f"EVENT_CUE {event.cue}")
        for effect in event.effects:
            lines.append(f"EVENT_EFFECT | {effect}")
        if event.next_scene:
            lines.append(f"EVENT_NEXT {event.next_scene}")
        if event.random_from is not None and event.random_to is not None:
            lines.append(f"EVENT_RANDOM {event.random_from:g} {event.random_to:g}")
    if script.events:
        lines.append("")
    for scene in script.scenes:
        lines.append(f"SCENE {scene.scene_id} {scene.day} {scene.title}")
        lines.extend(f"LINK {link}" for link in scene.links)
        for beat in scene.beats:
            if beat.speaker:
                lines.append(f"DIALOGUE {beat.speaker} | {beat.text}")
            else:
                lines.append(f"BEAT {beat.kind} | {beat.text}")
        for branch in scene.branches:
            lines.append(f"BRANCH {branch.branch_id} | {branch.prompt}")
            for option in branch.options:
                lines.append(
                    f"OPTION {option.option_id} {option.next_scene} | {option.label}"
                )
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def validate_script(script: Script) -> list[str]:
    """Return actionable structural issues before a screenplay is written."""
    issues: list[str] = []
    scene_ids = [scene.scene_id for scene in script.scenes]
    event_ids = [event.event_id for event in script.events]
    if not script.scenes:
        issues.append("The screenplay needs at least one scene.")
    for value, label in ((scene_ids, "scene ID"), (event_ids, "event ID")):
        duplicates = sorted({item for item in value if value.count(item) > 1})
        issues.extend(f"Duplicate {label}: {item}" for item in duplicates)
    scene_set = set(scene_ids)
    for scene in script.scenes:
        if not scene.scene_id.strip():
            issues.append(f"Day {scene.day}: scene ID is empty.")
        if not scene.title.strip():
            issues.append(f"{scene.scene_id or 'Scene'}: title is empty.")
        for beat_number, beat in enumerate(scene.beats, 1):
            if beat.kind not in {"action", "dialogue"}:
                issues.append(f"{scene.scene_id}: moment {beat_number} has unknown type {beat.kind!r}.")
            if not beat.text.strip():
                issues.append(f"{scene.scene_id}: moment {beat_number} is empty.")
            if beat.kind == "dialogue" and not (beat.speaker or "").strip():
                issues.append(f"{scene.scene_id}: dialogue moment {beat_number} has no speaker.")
        for branch in scene.branches:
            if not branch.prompt.strip():
                issues.append(f"{scene.scene_id}: a choice has no prompt.")
            branch_option_ids: list[str] = []
            for option in branch.options:
                branch_option_ids.append(option.option_id)
                if not option.label.strip():
                    issues.append(f"{scene.scene_id}: answer {option.option_id or '(unnamed)'} has no label.")
                if option.next_scene != "END" and option.next_scene not in scene_set:
                    issues.append(f"{scene.scene_id}: answer {option.option_id} points to missing scene {option.next_scene!r}.")
            issues.extend(
                f"{scene.scene_id}: duplicate answer ID in choice: {item}"
                for item in sorted({item for item in branch_option_ids if branch_option_ids.count(item) > 1})
            )
    for event in script.events:
        if not event.label.strip():
            issues.append(f"{event.event_id}: event description is empty.")
        if event.day < 1 or event.hour < 0 or event.hour >= 24:
            issues.append(f"{event.event_id}: event time must be day >= 1 and hour from 0 to under 24.")
        if event.next_scene and event.next_scene != "END" and event.next_scene not in scene_set:
            issues.append(f"{event.event_id}: event points to missing scene {event.next_scene!r}.")
        if event.random_from is not None or event.random_to is not None:
            if event.random_from is None or event.random_to is None or event.random_from < 0 or event.random_to >= 24 or event.random_from > event.random_to:
                issues.append(f"{event.event_id}: random time range is invalid.")
        for effect in event.effects:
            if "=" not in effect or effect.startswith("=") or effect.endswith("="):
                issues.append(f"{event.event_id}: effect must use key=value ({effect!r}).")
        if event.source and event.source not in script.sources:
            issues.append(f"{event.event_id}: source {event.source!r} is not listed in SOURCE records.")
        if event.cue and event.cue not in CUES:
            issues.append(f"{event.event_id}: unknown voice cue {event.cue!r}.")
    return issues


class Editor(tk.Tk if tk is not None else object):
    def __init__(self, path: Path, no_build: bool = False) -> None:
        super().__init__()
        self.path = path
        self.no_build = no_build
        self.script = parse_script(path)
        self.scene: Scene | None = None
        self.scene_index: int | None = None
        self.branch: Branch | None = None
        self.option: Option | None = None
        self.tts_queue: queue.Queue[tuple[int, str]] = queue.Queue()
        self.tts_button: ttk.Button | None = None
        self.tts_play_button: ttk.Button | None = None
        self.tts_keep_button: ttk.Button | None = None
        self.tts_discard_button: ttk.Button | None = None
        self.tts_apple_volume: ttk.Combobox | None = None
        self.tts_apple_emphasis: ttk.Combobox | None = None
        self.tts_apple_pause: ttk.Combobox | None = None
        self.tts_apple_voice: ttk.Combobox | None = None
        self.tts_apple_sentence_pause: ttk.Combobox | None = None
        self.tts_apple_trailing_pause: ttk.Combobox | None = None
        self.tts_apple_rate_wpm: ttk.Combobox | None = None
        self.tts_apple_pitch_baseline: ttk.Combobox | None = None
        self.tts_apple_substitutions: ttk.Entry | None = None
        self.tts_apple_phonemes: ttk.Entry | None = None
        self.tts_apple_validation: ttk.Label | None = None
        self.tts_refresh_apple_voices: ttk.Button | None = None
        self.tts_reset_apple: ttk.Button | None = None
        self.tts_rendering = False
        self._apple_preferences: dict[str, str] | None = None
        self.review_voice_path: Path | None = None
        self.review_voice_name: str | None = None
        self.voice_player: subprocess.Popen[bytes] | None = None
        self.event_window: tk.Toplevel | None = None
        self.character_window: tk.Toplevel | None = None
        self.dirty = False
        self._ui_sync = True
        self.visible_scene_indices: list[int] = []

        self.title("The Quarantine - Screenplay Editor")
        self.geometry("1280x820")
        self.minsize(980, 640)
        self.protocol("WM_DELETE_WINDOW", self.close)
        self.bind("<Control-s>", lambda _event: self.save())
        self.bind("<Control-Shift-l>", lambda _event: self._show_validation())
        self.bind("<F5>", lambda _event: self._preview())
        self.bind("<Control-e>", lambda _event: self._open_orchestrator())
        self.bind("<Control-Shift-c>", lambda _event: self._open_characters())
        self.bind("<Control-Shift-v>", lambda _event: self._generate_voice())
        self._configure_style()
        self._make_widgets()
        self._load_scene(0)
        self._ui_sync = False

    def _configure_style(self) -> None:
        style = ttk.Style(self)
        if "clam" in style.theme_names():
            style.theme_use("clam")
        style.configure("Toolbar.TFrame", padding=(10, 8))
        style.configure("Panel.TFrame", padding=10)
        style.configure("PanelHeading.TLabel", font=("TkDefaultFont", 11, "bold"))
        style.configure("Muted.TLabel", foreground="#68717a")
        style.configure("Primary.TButton", padding=(12, 6))
        style.configure("Danger.TButton", foreground="#8a2f2f")
        style.configure("Status.TLabel", foreground="#68717a")
        style.configure("Validation.TLabel", foreground="#a33a2b")

    @staticmethod
    def _toolbar_button(parent: tk.Misc, text: str, command: object, tip: str) -> ttk.Button:
        button = ttk.Button(parent, text=text, command=command)
        previous_title = [""]

        def show_tip(_event: object) -> None:
            status = getattr(parent.winfo_toplevel(), "status", None)
            if status is not None:
                previous_title[0] = status.cget("text")
                status.configure(text=tip)

        def hide_tip(_event: object) -> None:
            status = getattr(parent.winfo_toplevel(), "status", None)
            if status is not None:
                status.configure(text=previous_title[0] or str(parent.winfo_toplevel().path))

        button.bind("<Enter>", show_tip)
        button.bind("<Leave>", hide_tip)
        return button

    def _make_widgets(self) -> None:
        self.columnconfigure(0, weight=1)
        self.rowconfigure(1, weight=1)

        toolbar = ttk.Frame(self, style="Toolbar.TFrame")
        toolbar.grid(row=0, column=0, sticky="ew")
        toolbar.columnconfigure(8, weight=1)

        def separator(column: int) -> None:
            ttk.Separator(toolbar, orient="vertical").grid(
                row=0, column=column, sticky="ns", padx=7
            )

        save_button = self._toolbar_button(toolbar, "Save", self.save, "Save and validate (Ctrl+S)")
        save_button.configure(style="Primary.TButton")
        save_button.grid(row=0, column=0, padx=2)
        self._toolbar_button(toolbar, "Preview", self._preview, "Preview the selected scene (F5)").grid(row=0, column=1, padx=2)
        self._toolbar_button(toolbar, "Check", self._show_validation, "Check the screenplay without saving (Ctrl+Shift+L)").grid(row=0, column=2, padx=2)
        separator(3)
        self._toolbar_button(toolbar, "Game events", self._open_orchestrator, "open the day and time planner").grid(row=0, column=4, padx=2)
        self._toolbar_button(toolbar, "Characters", self._open_characters, "edit or add story characters").grid(row=0, column=5, padx=2)
        self._toolbar_button(toolbar, "Voice line", self._generate_voice, "generate voice for the selected line").grid(row=0, column=6, padx=2)
        separator(7)
        more = ttk.Menubutton(toolbar, text="More")
        more_menu = tk.Menu(more, tearoff=False)
        more_menu.add_command(label="Characters", command=self._open_characters)
        more_menu.add_command(label="New scene", command=self._new_scene)
        more_menu.add_command(label="Duplicate scene", command=self._duplicate_scene)
        more_menu.add_separator()
        more_menu.add_command(label="Restore last save", command=self._restore_backup)
        more_menu.add_command(label="What am I editing?", command=self._help)
        more_menu.add_separator()
        more_menu.add_command(label="Quit", command=self.close)
        more["menu"] = more_menu
        more.grid(row=0, column=8, padx=2)

        workspace = ttk.Panedwindow(self, orient="horizontal")
        workspace.grid(row=1, column=0, sticky="nsew")

        left = ttk.Frame(workspace, style="Panel.TFrame", width=250)
        left.rowconfigure(3, weight=1)
        left.columnconfigure(0, weight=1)
        ttk.Label(left, text="Scenes", style="PanelHeading.TLabel").grid(row=0, column=0, sticky="w")
        ttk.Label(left, text="Select a day to edit its story.", style="Muted.TLabel").grid(
            row=1, column=0, sticky="w", pady=(2, 8)
        )
        self.scene_filter_var = tk.StringVar()
        scene_filter = ttk.Entry(left, textvariable=self.scene_filter_var)
        scene_filter.grid(row=2, column=0, sticky="ew", pady=(0, 6))
        scene_filter.insert(0, "")
        scene_filter.configure(width=24)
        scene_filter.bind("<KeyRelease>", lambda _event: self._refresh_scene_list())
        scene_list_frame = ttk.Frame(left)
        scene_list_frame.grid(row=3, column=0, sticky="nsew")
        scene_list_frame.rowconfigure(0, weight=1)
        scene_list_frame.columnconfigure(0, weight=1)
        self.scene_list = tk.Listbox(scene_list_frame, width=28, exportselection=False, activestyle="none")
        self.scene_list.grid(row=0, column=0, sticky="nsew")
        scene_scroll = ttk.Scrollbar(scene_list_frame, orient="vertical", command=self.scene_list.yview)
        scene_scroll.grid(row=0, column=1, sticky="ns")
        self.scene_list.configure(yscrollcommand=scene_scroll.set)
        self._refresh_scene_list()
        self.scene_list.bind("<<ListboxSelect>>", self._scene_selected)
        scene_buttons = ttk.Frame(left)
        scene_buttons.grid(row=4, column=0, sticky="ew", pady=(6, 0))
        scene_buttons.columnconfigure(0, weight=1)
        scene_buttons.columnconfigure(1, weight=1)
        ttk.Button(scene_buttons, text="New scene", command=self._new_scene).grid(row=0, column=0, sticky="ew", padx=(0, 3))
        ttk.Button(scene_buttons, text="Duplicate", command=self._duplicate_scene).grid(row=0, column=1, sticky="ew", padx=(3, 0))

        center = ttk.Frame(workspace, style="Panel.TFrame")
        center.columnconfigure(0, weight=1)
        center.rowconfigure(4, weight=1)
        center.rowconfigure(8, weight=1)
        ttk.Label(center, text="Scene", style="PanelHeading.TLabel").grid(row=0, column=0, sticky="w")
        ttk.Label(center, text="Name this day, then shape its moments below.", style="Muted.TLabel").grid(
            row=0, column=0, sticky="e"
        )
        self.title_var = tk.StringVar()
        self.title_entry = ttk.Entry(center, textvariable=self.title_var)
        self.title_entry.grid(row=1, column=0, sticky="ew", pady=(4, 0))
        ttk.Label(center, text="Story moments").grid(
            row=2, column=0, sticky="w", pady=(12, 2)
        )
        beat_list_frame = ttk.Frame(center)
        beat_list_frame.grid(row=4, column=0, sticky="nsew")
        beat_list_frame.rowconfigure(0, weight=1)
        beat_list_frame.columnconfigure(0, weight=1)
        self.beat_list = tk.Listbox(beat_list_frame, height=7, exportselection=False, activestyle="none")
        self.beat_list.grid(row=0, column=0, sticky="nsew")
        beat_scroll = ttk.Scrollbar(beat_list_frame, orient="vertical", command=self.beat_list.yview)
        beat_scroll.grid(row=0, column=1, sticky="ns")
        self.beat_list.configure(yscrollcommand=beat_scroll.set)
        self.beat_list.bind("<<ListboxSelect>>", self._beat_selected)
        beat_form = ttk.LabelFrame(center, text="Selected moment", padding=6)
        beat_form.grid(row=5, column=0, sticky="ew", pady=6)
        beat_form.columnconfigure(1, weight=1)
        self.beat_kind = ttk.Combobox(beat_form, values=("action", "dialogue"), state="readonly", width=12)
        self.beat_kind.grid(row=0, column=1, sticky="w")
        ttk.Label(beat_form, text="Type").grid(row=0, column=0, sticky="w")
        self.beat_speaker_var = tk.StringVar()
        ttk.Label(beat_form, text="Speaker").grid(row=1, column=0, sticky="w")
        self.beat_speaker_entry = ttk.Entry(beat_form, textvariable=self.beat_speaker_var)
        self.beat_speaker_entry.grid(row=1, column=1, sticky="ew")
        self.beat_text = tk.Text(beat_form, height=5, wrap="word", undo=True)
        self.beat_text.grid(row=2, column=0, columnspan=2, sticky="ew", pady=4)
        voice_frame = ttk.LabelFrame(beat_form, text="Voice this line", padding=4)
        voice_frame.grid(row=3, column=0, columnspan=2, sticky="ew", pady=(2, 4))
        voice_frame.columnconfigure(1, weight=1)
        voice_frame.columnconfigure(2, weight=0)
        ttk.Label(voice_frame, text="Speaker").grid(row=0, column=0, sticky="w")
        self.tts_speaker = ttk.Combobox(voice_frame, state="readonly")
        self.tts_speaker.grid(row=0, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Performance").grid(row=1, column=0, sticky="w")
        self.tts_tone = ttk.Combobox(voice_frame, values=TONES, state="readonly")
        self.tts_tone.grid(row=1, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Transmission").grid(row=2, column=0, sticky="w")
        self.tts_set = ttk.Combobox(voice_frame, values=TRANSMISSIONS, state="readonly")
        self.tts_set.grid(row=2, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Engine").grid(row=3, column=0, sticky="w")
        self.tts_backend = ttk.Combobox(
            voice_frame, values=("auto", "edge", "apple", "gtts"), state="readonly"
        )
        self.tts_backend.grid(row=3, column=1, sticky="ew")
        self.tts_backend.bind("<<ComboboxSelected>>", self._update_apple_controls, add="+")
        ttk.Label(voice_frame, text="Apple voice").grid(row=4, column=0, sticky="w")
        self.tts_apple_voice = ttk.Combobox(
            voice_frame, values=self._apple_voice_choices(), state="disabled"
        )
        self.tts_apple_voice.grid(row=4, column=1, sticky="ew")
        self.tts_refresh_apple_voices = ttk.Button(
            voice_frame, text="Refresh", command=self._refresh_apple_voices,
            state="disabled",
        )
        apple_voice_buttons = ttk.Frame(voice_frame)
        apple_voice_buttons.grid(row=4, column=2, padx=(4, 0), sticky="e")
        self.tts_refresh_apple_voices.pack(in_=apple_voice_buttons, side="left")
        self.tts_reset_apple = ttk.Button(
            apple_voice_buttons, text="Reset", command=self._reset_apple_preferences,
            state="disabled",
        )
        self.tts_reset_apple.pack(side="left", padx=(4, 0))
        ttk.Label(voice_frame, text="Apple rate (WPM)").grid(row=5, column=0, sticky="w")
        self.tts_apple_rate_wpm = ttk.Combobox(
            voice_frame, values=APPLE_RATE_WPM, state="disabled"
        )
        self.tts_apple_rate_wpm.grid(row=5, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Apple pitch baseline").grid(row=6, column=0, sticky="w")
        self.tts_apple_pitch_baseline = ttk.Combobox(
            voice_frame, values=APPLE_PITCH_BASELINES, state="disabled"
        )
        self.tts_apple_pitch_baseline.grid(row=6, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Character").grid(row=7, column=0, sticky="w")
        self.tts_variation = ttk.Combobox(
            voice_frame, values=VOICE_VARIATIONS, state="readonly"
        )
        self.tts_variation.grid(row=7, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Cue").grid(row=8, column=0, sticky="w")
        self.tts_cue = ttk.Combobox(
            voice_frame, values=("none",) + CUES, state="readonly"
        )
        self.tts_cue.grid(row=8, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Apple volume").grid(row=9, column=0, sticky="w")
        self.tts_apple_volume = ttk.Combobox(
            voice_frame, values=APPLE_VOLUMES, state="disabled"
        )
        self.tts_apple_volume.grid(row=9, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Apple emphasis").grid(row=10, column=0, sticky="w")
        self.tts_apple_emphasis = ttk.Combobox(
            voice_frame, values=APPLE_EMPHASIS, state="disabled"
        )
        self.tts_apple_emphasis.grid(row=10, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Apple pause (ms)").grid(row=11, column=0, sticky="w")
        self.tts_apple_pause = ttk.Combobox(
            voice_frame, values=APPLE_PAUSES, state="disabled"
        )
        self.tts_apple_pause.grid(row=11, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Sentence pause (ms)").grid(row=12, column=0, sticky="w")
        self.tts_apple_sentence_pause = ttk.Combobox(
            voice_frame, values=APPLE_SENTENCE_PAUSES, state="disabled"
        )
        self.tts_apple_sentence_pause.grid(row=12, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Trailing pause (ms)").grid(row=13, column=0, sticky="w")
        self.tts_apple_trailing_pause = ttk.Combobox(
            voice_frame, values=APPLE_TRAILING_PAUSES, state="disabled"
        )
        self.tts_apple_trailing_pause.grid(row=13, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Pronunciations").grid(row=14, column=0, sticky="w")
        self.tts_apple_substitutions = ttk.Entry(voice_frame, state="disabled")
        self.tts_apple_substitutions.grid(row=14, column=1, columnspan=2, sticky="ew")
        ttk.Label(voice_frame, text="Phonemes").grid(row=15, column=0, sticky="w")
        self.tts_apple_phonemes = ttk.Entry(voice_frame, state="disabled")
        self.tts_apple_phonemes.grid(row=15, column=1, columnspan=2, sticky="ew")
        self.tts_apple_validation = ttk.Label(voice_frame, style="Validation.TLabel")
        self.tts_apple_validation.grid(row=16, column=1, columnspan=2, sticky="w")
        self.tts_apple_substitutions.bind("<KeyRelease>", self._validate_apple_entries)
        self.tts_apple_phonemes.bind("<KeyRelease>", self._validate_apple_entries)
        ttk.Label(voice_frame, text="Quick style").grid(row=17, column=0, sticky="w")
        self.tts_preset = ttk.Combobox(
            voice_frame,
            values=("Custom", "Natural visitor", "Official broadcast", "Close whisper", "Urgent", "Distant"),
            state="readonly",
        )
        self.tts_preset.grid(row=17, column=1, sticky="ew")
        self.tts_preset.bind("<<ComboboxSelected>>", self._apply_tts_preset)
        voice_buttons = ttk.Frame(voice_frame)
        voice_buttons.grid(row=18, column=0, columnspan=3, sticky="e", pady=(4, 0))
        self.tts_button = ttk.Button(
            voice_buttons, text="Generate review", command=self._generate_voice
        )
        self.tts_button.pack(side="left", padx=2)
        self.tts_play_button = ttk.Button(
            voice_buttons, text="Play", command=self._play_review_voice, state="disabled"
        )
        self.tts_play_button.pack(side="left", padx=2)
        self.tts_keep_button = ttk.Button(
            voice_buttons, text="Keep", command=self._keep_review_voice, state="disabled"
        )
        self.tts_keep_button.pack(side="left", padx=2)
        self.tts_discard_button = ttk.Button(
            voice_buttons, text="Discard", command=self._discard_review_voice, state="disabled"
        )
        self.tts_discard_button.pack(side="left", padx=2)
        self.tts_status = ttk.Label(voice_frame, text="Choose a line, then make a clip.")
        self.tts_status.grid(row=19, column=0, columnspan=3, sticky="w")
        beat_buttons = ttk.Frame(beat_form)
        beat_buttons.grid(row=4, column=0, columnspan=2, sticky="e")
        ttk.Button(beat_buttons, text="New moment", command=self._new_beat).pack(side="left", padx=2)
        ttk.Button(beat_buttons, text="Save moment", command=self._save_beat).pack(side="left", padx=2)
        ttk.Button(beat_buttons, text="Remove moment", command=self._remove_beat).pack(side="left", padx=2)
        ttk.Button(center, text="Save scene title", command=self._apply_scene).grid(
            row=6, column=0, sticky="e", pady=2
        )

        right = ttk.Frame(workspace, style="Panel.TFrame")
        right.columnconfigure(0, weight=1)
        right.rowconfigure(4, weight=1)
        ttk.Label(right, text="Choices", style="PanelHeading.TLabel").grid(row=0, column=0, sticky="w")
        self.branch_list = ttk.Combobox(right, state="readonly")
        self.branch_list.grid(row=1, column=0, sticky="ew")
        self.branch_list.bind("<<ComboboxSelected>>", self._branch_selected)
        self.prompt_var = tk.StringVar()
        prompt_frame = ttk.LabelFrame(right, text="Question for the player", padding=6)
        prompt_frame.grid(row=2, column=0, sticky="ew", pady=6)
        prompt_frame.columnconfigure(0, weight=1)
        self.prompt_entry = ttk.Entry(prompt_frame, textvariable=self.prompt_var)
        self.prompt_entry.grid(row=0, column=0, sticky="ew")
        option_list_frame = ttk.Frame(right)
        option_list_frame.grid(row=4, column=0, sticky="nsew")
        option_list_frame.rowconfigure(0, weight=1)
        option_list_frame.columnconfigure(0, weight=1)
        self.option_list = tk.Listbox(option_list_frame, height=8, exportselection=False, activestyle="none")
        self.option_list.grid(row=0, column=0, sticky="nsew")
        option_scroll = ttk.Scrollbar(option_list_frame, orient="vertical", command=self.option_list.yview)
        option_scroll.grid(row=0, column=1, sticky="ns")
        self.option_list.configure(yscrollcommand=option_scroll.set)
        self.option_list.bind("<<ListboxSelect>>", self._option_selected)
        option_frame = ttk.LabelFrame(right, text="Selected answer", padding=6)
        option_frame.grid(row=5, column=0, sticky="ew", pady=6)
        option_frame.columnconfigure(1, weight=1)
        self.option_id_var = tk.StringVar()
        self.option_label_var = tk.StringVar()
        ttk.Label(option_frame, text="Answer").grid(row=0, column=0, sticky="w")
        self.option_label_entry = ttk.Entry(option_frame, textvariable=self.option_label_var)
        self.option_label_entry.grid(row=0, column=1, sticky="ew")
        ttk.Label(option_frame, text="Continue at").grid(row=1, column=0, sticky="w")
        self.next_scene_box = ttk.Combobox(option_frame, state="readonly")
        self.next_scene_box.grid(row=1, column=1, sticky="ew")
        self.next_scene_box["values"] = ["END"] + [self._scene_choice_label(scene) for scene in self.script.scenes]
        option_buttons = ttk.Frame(option_frame)
        option_buttons.grid(row=2, column=0, columnspan=2, sticky="e", pady=(4, 0))
        ttk.Button(option_buttons, text="New answer", command=self._new_option).pack(side="left", padx=2)
        ttk.Button(option_buttons, text="Save answer", command=self._save_option).pack(side="left", padx=2)
        ttk.Button(option_buttons, text="Remove answer", command=self._remove_option).pack(side="left", padx=2)
        ttk.Button(right, text="Editing guide", command=self._help).grid(row=6, column=0, sticky="e")

        workspace.add(left, weight=0)
        workspace.add(center, weight=3)
        workspace.add(right, weight=2)

        for widget in (
            self.title_entry,
            self.beat_speaker_entry,
            self.prompt_entry,
            self.option_label_entry,
        ):
            widget.bind("<KeyRelease>", self._mark_dirty_event, add="+")
        self.beat_text.bind("<KeyRelease>", self._mark_dirty_event, add="+")
        self.beat_text.bind("<<Modified>>", self._text_modified, add="+")
        self.beat_kind.bind("<<ComboboxSelected>>", self._mark_dirty_event, add="+")
        self.next_scene_box.bind("<<ComboboxSelected>>", self._mark_dirty_event, add="+")

        bottom = ttk.Frame(self, padding=(8, 0, 8, 8))
        bottom.grid(row=2, column=0, sticky="ew")
        bottom.columnconfigure(0, weight=1)
        self.status = ttk.Label(bottom, text=str(self.path))
        self.status.grid(row=0, column=0, sticky="w")
        ttk.Label(bottom, style="Status.TLabel", text="Ctrl+S Save | F5 Preview | Ctrl+Shift+L Check | Ctrl+E Events | Ctrl+Shift+V Voice").grid(
            row=0, column=1, padx=4
        )

    def _mark_dirty_event(self, _event: object = None) -> None:
        if not self._ui_sync:
            self._mark_dirty()

    def _text_modified(self, event: object = None) -> None:
        widget = getattr(event, "widget", self.beat_text)
        if widget.edit_modified():
            widget.edit_modified(False)
            self._mark_dirty_event(event)

    def _refresh_scene_list(self) -> None:
        """Refresh the filtered scene navigator without losing the selection."""
        current_id = self.scene.scene_id if self.scene is not None else None
        query = self.scene_filter_var.get().strip().lower()
        self.visible_scene_indices = [
            index for index, scene in enumerate(self.script.scenes)
            if not query or query in f"{scene.day} {scene.scene_id} {scene.title}".lower()
        ]
        self.scene_list.delete(0, "end")
        for index in self.visible_scene_indices:
            self.scene_list.insert("end", self._scene_choice_label(self.script.scenes[index]))
        if current_id is not None:
            visible = next((i for i, index in enumerate(self.visible_scene_indices) if self.script.scenes[index].scene_id == current_id), None)
            if visible is not None:
                self.scene_list.selection_set(visible)
                self.scene_list.see(visible)

    def _refresh_scene_destinations(self) -> None:
        self.next_scene_box["values"] = ["END"] + [
            self._scene_choice_label(scene) for scene in self.script.scenes
        ]

    def _new_scene_id(self, day: int, title: str) -> str:
        preferred = f"day-{day:02d}"
        existing = {scene.scene_id for scene in self.script.scenes}
        if preferred not in existing:
            return preferred
        stem = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-") or "scene"
        candidate = f"{stem}-{day:02d}"
        number = 2
        while candidate in existing:
            candidate = f"{stem}-{day:02d}-{number}"
            number += 1
        return candidate

    def _new_scene(self) -> None:
        if simpledialog is None:
            return
        if not self._apply_current_beat():
            return
        self._apply_scene()
        default_day = max((scene.day for scene in self.script.scenes), default=0) + 1
        day = simpledialog.askinteger("New scene", "Story day:", initialvalue=default_day, minvalue=1, parent=self)
        if day is None:
            return
        title = simpledialog.askstring("New scene", "Scene title:", initialvalue=f"Day {day}", parent=self)
        if title is None or not title.strip():
            return
        scene = Scene(self._new_scene_id(day, title), day, title.strip())
        insert_at = self.scene_index + 1 if self.scene_index is not None else len(self.script.scenes)
        self.script.scenes.insert(insert_at, scene)
        self._refresh_scene_destinations()
        self._mark_dirty()
        self._load_scene(insert_at)
        self.status["text"] = f"Created {self._scene_choice_label(scene)}. Save when ready."

    def _duplicate_scene(self) -> None:
        if self.scene is None or simpledialog is None:
            return
        if not self._apply_current_beat():
            return
        self._apply_scene()
        source = self.scene
        day = simpledialog.askinteger("Duplicate scene", "New story day:", initialvalue=source.day, minvalue=1, parent=self)
        if day is None:
            return
        title = simpledialog.askstring("Duplicate scene", "New scene title:", initialvalue=f"Copy of {source.title}", parent=self)
        if title is None or not title.strip():
            return
        duplicate = copy.deepcopy(source)
        duplicate.day = day
        duplicate.title = title.strip()
        duplicate.scene_id = self._new_scene_id(day, duplicate.title)
        insert_at = self.scene_index + 1 if self.scene_index is not None else len(self.script.scenes)
        self.script.scenes.insert(insert_at, duplicate)
        self._refresh_scene_destinations()
        self._mark_dirty()
        self._load_scene(insert_at)
        self.status["text"] = f"Duplicated scene as {duplicate.scene_id}. Save when ready."

    def _scene_selected(self, _event: object = None) -> None:
        selection = self.scene_list.curselection()
        selected_index = self.visible_scene_indices[selection[0]] if selection and self.visible_scene_indices else None
        if selected_index is not None and selected_index != self.scene_index:
            if not self._apply_current_beat():
                self.scene_list.selection_clear(0, "end")
                if self.scene_index in self.visible_scene_indices:
                    self.scene_list.selection_set(self.visible_scene_indices.index(self.scene_index))
                return
            self._load_scene(selected_index)

    def _mark_dirty(self) -> None:
        self.dirty = True
        self.title("The Quarantine - Screenplay Editor [unsaved changes]")

    def _load_scene(self, index: int) -> None:
        if not self.script.scenes or index < 0 or index >= len(self.script.scenes):
            return
        self._apply_branch()
        self._apply_scene()
        self.scene_index = index
        self.scene = self.script.scenes[index]
        self._refresh_scene_list()
        if index in self.visible_scene_indices:
            self.scene_list.selection_set(self.visible_scene_indices.index(index))
        self.title_var.set(self.scene.title)
        self.beat_list.delete(0, "end")
        for beat in self.scene.beats:
            self.beat_list.insert("end", self._beat_label(beat))
        if self.scene.beats:
            self.beat_list.selection_set(0)
            self._load_beat(0)
        else:
            self._load_beat(None)
        self.branch_list["values"] = [
                f"Choice {number + 1} - {_ui_text(branch.prompt[:52])}"
            for number, branch in enumerate(self.scene.branches)
        ]
        if self.scene.branches:
            self.branch_list.current(0)
            self._load_branch(0)
        else:
            self.branch_list.set("")
            self._load_branch(None)

    def _apply_scene(self) -> None:
        if self.scene is None:
            return
        new_title = self.title_var.get().strip() or self.scene.title
        changed = new_title != self.scene.title
        self.scene.title = new_title
        if changed and self.scene_index is not None:
            self.scene_list.itemconfigure(
                self.scene_index, text=self._scene_choice_label(self.scene)
            )
        # Loading a different scene also synchronizes the old scene. If that
        # synchronization discovers a real edit, it must remain recoverable;
        # only a no-op load is clean.
        if changed:
            self._mark_dirty()

    @staticmethod
    def _beat_label(beat: Beat) -> str:
        who = f"{beat.speaker}: " if beat.speaker else ""
        return f"{beat.kind.title()} - {who}{_ui_text(beat.text[:70])}"

    def _beat_selected(self, _event: object = None) -> None:
        selection = self.beat_list.curselection()
        self._load_beat(selection[0] if selection else None)

    def _load_beat(self, index: int | None) -> None:
        self.beat_kind.set("")
        self.beat_speaker_var.set("")
        self.beat_text.delete("1.0", "end")
        self.beat_text.edit_modified(False)
        if self.scene is None or index is None or index >= len(self.scene.beats):
            return
        beat = self.scene.beats[index]
        self.beat_kind.set(beat.kind)
        self.beat_speaker_var.set(beat.speaker or "")
        self.beat_text.insert("1.0", beat.text)
        self.beat_text.edit_modified(False)
        self._set_tts_defaults(beat.speaker)

    def _apply_current_beat(self) -> bool:
        if self.scene is None:
            return True
        selection = self.beat_list.curselection()
        if not selection:
            return True
        beat = self._beat_from_form()
        if beat is None:
            return False
        index = selection[0]
        previous = self.scene.beats[index]
        if beat != previous:
            self.scene.beats[index] = beat
            self.beat_list.delete(index)
            self.beat_list.insert(index, self._beat_label(beat))
            self.beat_list.selection_set(index)
            self._mark_dirty()
        return True

    def _beat_from_form(self) -> Beat | None:
        kind = self.beat_kind.get().strip()
        text = self.beat_text.get("1.0", "end").strip()
        speaker = self.beat_speaker_var.get().strip() or None
        if kind not in ("action", "dialogue") or not text:
            messagebox.showerror("A moment needs words", "Choose Action or Dialogue and write what happens.")
            return None
        if kind == "dialogue" and not speaker:
            messagebox.showerror("Who is speaking?", "Dialogue needs a speaker name.")
            return None
        return Beat(kind, text, speaker if kind == "dialogue" else None)

    def _speaker_choices(self) -> list[str]:
        choices = ["broadcast"]
        sources = list(self.script.sources)
        if self.scene is not None:
            sources.extend(self.scene.links)
        for source in sources:
            parts = source.split("/")
            if "visitors" in parts:
                name = Path(parts[-1]).stem
                if name not in choices:
                    choices.append(name)
        return choices

    @staticmethod
    def _apple_voice_choices() -> tuple[str, ...]:
        """Return installed macOS voices when available, with safe fallbacks."""
        if shutil.which("say") is None:
            return APPLE_VOICE_FALLBACKS
        try:
            result = subprocess.run(
                ["say", "-v", "?"], capture_output=True, text=True, check=False,
            )
        except OSError:
            return APPLE_VOICE_FALLBACKS
        voices: set[str] = set()
        for line in (result.stdout + "\n" + result.stderr).splitlines():
            match = re.search(r"\s+[a-z]{2}[_-][A-Z]{2}(?:[-_]#\d+)?\b", line)
            if match:
                name = line[:match.start()].strip()
                if name:
                    voices.add(name)
        return ("Default", *sorted(voices)) if voices else APPLE_VOICE_FALLBACKS

    def _refresh_apple_voices(self) -> None:
        if self.tts_apple_voice is None:
            return
        current = self.tts_apple_voice.get() or "Default"
        values = self._apple_voice_choices()
        self.tts_apple_voice["values"] = values
        self.tts_apple_voice.set(current if current in values else "Default")
        self.tts_status["text"] = f"Found {max(0, len(values) - 1)} installed Apple voice(s)."

    def _reset_apple_preferences(self) -> None:
        if self.tts_apple_voice is None:
            return
        self.tts_apple_voice.set("Default")
        self.tts_apple_rate_wpm.set("Auto")
        self.tts_apple_pitch_baseline.set("Auto")
        self.tts_apple_substitutions.delete(0, "end")
        self.tts_apple_phonemes.delete(0, "end")
        self.tts_apple_volume.set("1.00")
        self.tts_apple_emphasis.set("none")
        self.tts_apple_pause.set("0")
        self.tts_apple_sentence_pause.set("0")
        self.tts_apple_trailing_pause.set("0")
        self._remember_apple_preferences()
        self.tts_status["text"] = "Apple voice settings reset."

    @staticmethod
    def _apple_entry_error(raw: str, label: str) -> str:
        for item in re.split(r"[;\n]", raw):
            item = item.strip()
            if not item:
                continue
            source, separator, value = item.partition("=")
            if (
                not separator
                or not source.strip()
                or not value.strip()
                or "[[" in source
                or "]]" in source
                or "[[" in value
                or "]]" in value
            ):
                return f"{label}: invalid pair {item!r}"
        return ""

    def _validate_apple_entries(self, _event: object = None) -> None:
        if self.tts_apple_validation is None:
            return
        if self.tts_backend.get() != "apple":
            self.tts_apple_validation.configure(text="")
            if self.tts_button is not None and not self.tts_rendering:
                self.tts_button.configure(state="normal")
            return
        errors = (
            self._apple_entry_error(self.tts_apple_substitutions.get(), "Pronunciations"),
            self._apple_entry_error(self.tts_apple_phonemes.get(), "Phonemes"),
        )
        error = next((error for error in errors if error), "")
        self.tts_apple_validation.configure(text=error)
        if self.tts_button is not None and not self.tts_rendering:
            self.tts_button.configure(state="disabled" if error else "normal")

    def _remember_apple_preferences(self) -> None:
        if self.tts_apple_voice is None:
            return
        self._apple_preferences = {
            "backend": self.tts_backend.get() or "auto",
            "voice": self.tts_apple_voice.get() or "Default",
            "rate": self.tts_apple_rate_wpm.get() or "Auto",
            "pitch": self.tts_apple_pitch_baseline.get() or "Auto",
            "substitutions": self.tts_apple_substitutions.get().strip(),
            "phonemes": self.tts_apple_phonemes.get().strip(),
            "volume": self.tts_apple_volume.get() or "1.00",
            "emphasis": self.tts_apple_emphasis.get() or "none",
            "pause": self.tts_apple_pause.get() or "0",
            "sentence_pause": self.tts_apple_sentence_pause.get() or "0",
            "trailing_pause": self.tts_apple_trailing_pause.get() or "0",
        }

    def _set_tts_defaults(self, speaker: str | None = None) -> None:
        self._remember_apple_preferences()
        choices = self._speaker_choices()
        self.tts_speaker["values"] = choices
        preferred = speaker if speaker in choices else choices[0]
        self.tts_speaker.set(preferred)
        tone, transmission = VOICE_DEFAULTS.get(
            preferred, ("formal" if preferred == "broadcast" else "neutral", "door")
        )
        self.tts_tone.set(tone)
        self.tts_set.set(transmission)
        self.tts_variation.set("natural")
        self.tts_cue.set("none")
        preferences = self._apple_preferences or {
            "backend": "auto",
            "voice": "Default",
            "rate": "Auto",
            "pitch": "Auto",
            "substitutions": "",
            "phonemes": "",
            "volume": "1.00",
            "emphasis": "none",
            "pause": "0",
            "sentence_pause": "0",
            "trailing_pause": "0",
        }
        self.tts_backend.set(preferences["backend"])
        self.tts_apple_voice.set(preferences["voice"])
        self.tts_apple_rate_wpm.set(preferences["rate"])
        self.tts_apple_pitch_baseline.set(preferences["pitch"])
        self.tts_apple_substitutions.delete(0, "end")
        self.tts_apple_substitutions.insert(0, preferences["substitutions"])
        self.tts_apple_phonemes.delete(0, "end")
        self.tts_apple_phonemes.insert(0, preferences["phonemes"])
        self.tts_apple_volume.set(preferences["volume"])
        self.tts_apple_emphasis.set(preferences["emphasis"])
        self.tts_apple_pause.set(preferences["pause"])
        self.tts_apple_sentence_pause.set(preferences["sentence_pause"])
        self.tts_apple_trailing_pause.set(preferences["trailing_pause"])
        self.tts_preset.set("Custom")
        self._update_apple_controls()

    def _update_apple_controls(self, _event: object = None) -> None:
        apple_active = self.tts_backend.get() == "apple"
        combo_state = "readonly" if apple_active else "disabled"
        for widget in (
            self.tts_apple_voice,
            self.tts_apple_rate_wpm,
            self.tts_apple_pitch_baseline,
            self.tts_apple_volume,
            self.tts_apple_emphasis,
            self.tts_apple_pause,
            self.tts_apple_sentence_pause,
            self.tts_apple_trailing_pause,
        ):
            if widget is not None:
                widget.configure(state=combo_state)
        if self.tts_apple_substitutions is not None:
            self.tts_apple_substitutions.configure(
                state="normal" if apple_active else "disabled"
            )
        if self.tts_apple_phonemes is not None:
            self.tts_apple_phonemes.configure(
                state="normal" if apple_active else "disabled"
            )
        if self.tts_refresh_apple_voices is not None:
            self.tts_refresh_apple_voices.configure(
                state="normal" if apple_active else "disabled"
            )
        if self.tts_reset_apple is not None:
            self.tts_reset_apple.configure(
                state="normal" if apple_active else "disabled"
            )
        self._validate_apple_entries()

    def _apply_tts_preset(self, _event: object = None) -> None:
        preset = self.tts_preset.get()
        values = {
            "Natural visitor": ("neutral", "door", "natural", "none"),
            "Official broadcast": ("formal", "wireless", "dark", "none"),
            "Close whisper": ("confiding", "wall", "breathy", "under-breath"),
            "Urgent": ("frightened", "door", "strained", "rushed"),
            "Distant": ("neutral", "window", "hollowed", "distant"),
        }.get(preset)
        if values is None:
            return
        tone, transmission, variation, cue = values
        self.tts_tone.set(tone)
        self.tts_set.set(transmission)
        self.tts_variation.set(variation)
        self.tts_cue.set(cue)

    def _new_beat(self) -> None:
        self.beat_list.selection_clear(0, "end")
        self._load_beat(None)
        self.beat_kind.set("action")
        self._set_tts_defaults()
        self.beat_text.focus_set()

    def _voice_name(self) -> str:
        if self.scene is None:
            return "screenplay-line"
        selection = self.beat_list.curselection()
        number = selection[0] + 1 if selection else len(self.scene.beats) + 1
        speaker = self.tts_speaker.get().strip() or "line"
        cue = self.tts_cue.get().strip().lower()
        visitor_link = any(
            "visitors" in link.split("/") and Path(link).stem == speaker
            for link in self.scene.links
        )
        if (
            visitor_link
            and cue in ("", "none")
            and self.tts_variation.get() == "natural"
        ):
            dialogue_number = sum(
                1
                for beat in self.scene.beats[: (selection[0] + 1 if selection else len(self.scene.beats))]
                if beat.kind == "dialogue" and beat.speaker == speaker
            )
            if dialogue_number:
                return f"{speaker}-day{self.scene.day:02d}-full-{dialogue_number}"
        safe_scene = re.sub(r"[^a-z0-9-]+", "-", self.scene.scene_id.lower()).strip("-")
        safe_speaker = re.sub(r"[^a-z0-9-]+", "-", speaker.lower()).strip("-")
        tone = re.sub(r"[^a-z0-9-]+", "-", self.tts_tone.get().lower()).strip("-")
        transmission = re.sub(
            r"[^a-z0-9-]+", "-", self.tts_set.get().lower()
        ).strip("-")
        variation = "-".join(
            part for part in (tone, transmission, self.tts_variation.get(), cue if cue != "none" else "") if part
        )
        return f"screenplay-{safe_scene}-line-{number:02d}-{safe_speaker}-{variation}"

    def _apple_substitution_args(self) -> list[str] | None:
        raw = self.tts_apple_substitutions.get().strip()
        if not raw:
            return []
        arguments: list[str] = []
        for item in re.split(r"[;\n]", raw):
            item = item.strip()
            if not item:
                continue
            source, separator, spoken = item.partition("=")
            if (
                not separator
                or not source.strip()
                or not spoken.strip()
                or "[[" in source
                or "]]" in source
                or "[[" in spoken
                or "]]" in spoken
            ):
                messagebox.showerror(
                    "Invalid pronunciation",
                    "Use source=spoken pairs separated by semicolons.\n\n"
                    f"Could not read: {item}",
                    parent=self,
                )
                return None
            arguments.extend(("--apple-substitute", f"{source.strip()}={spoken.strip()}"))
        return arguments

    def _apple_phoneme_args(self) -> list[str] | None:
        raw = self.tts_apple_phonemes.get().strip()
        if not raw:
            return []
        arguments: list[str] = []
        for item in re.split(r"[;\n]", raw):
            item = item.strip()
            if not item:
                continue
            source, separator, phonetic = item.partition("=")
            if (
                not separator
                or not source.strip()
                or not phonetic.strip()
                or "[[" in source
                or "]]" in source
                or "[[" in phonetic
                or "]]" in phonetic
            ):
                messagebox.showerror(
                    "Invalid phoneme override",
                    "Use source=phonemes pairs separated by semicolons.\n\n"
                    f"Could not read: {item}",
                    parent=self,
                )
                return None
            arguments.extend(("--apple-phoneme", f"{source.strip()}={phonetic.strip()}"))
        return arguments

    def _generate_voice(self) -> None:
        text = self.beat_text.get("1.0", "end").strip()
        speaker = self.tts_speaker.get().strip()
        if not text:
            messagebox.showerror("No line selected", "Write or select a line before generating its voice.")
            return
        if not speaker:
            messagebox.showerror("Choose a speaker", "Choose Visitor or Broadcast before generating a clip.")
            return
        substitution_args: list[str] = []
        phoneme_args: list[str] = []
        if self.tts_backend.get() == "apple":
            parsed_substitutions = self._apple_substitution_args()
            if parsed_substitutions is None:
                return
            substitution_args = parsed_substitutions
            parsed_phonemes = self._apple_phoneme_args()
            if parsed_phonemes is None:
                return
            phoneme_args = parsed_phonemes
        if self.tts_button is None:
            return
        if self.review_voice_path is not None:
            self._discard_review_voice(confirm=True)
            if self.review_voice_path is not None:
                return
        voice_name = self._voice_name()
        review_dir = self.path.parent.parent / "web" / "res" / "vo" / ".review"
        review_dir.mkdir(parents=True, exist_ok=True)
        self.review_voice_name = voice_name
        self.review_voice_path = review_dir / f"{voice_name}.ogg"
        command = [
            sys.executable,
            "scripts/tts.py",
            "--line", text,
            "--name", voice_name,
            "--speaker", speaker,
            "--tone", self.tts_tone.get() or "neutral",
            "--set", self.tts_set.get() or "clean",
            "--variation", self.tts_variation.get() or "natural",
            "--backend", self.tts_backend.get() or "auto",
            "--out", str(review_dir),
            "--no-manifest",
        ]
        apple_voice = self.tts_apple_voice.get().strip()
        if apple_voice and apple_voice != "Default":
            command.extend(("--voice-name", apple_voice))
        apple_rate_wpm = self.tts_apple_rate_wpm.get().strip()
        if apple_rate_wpm and apple_rate_wpm != "Auto":
            command.extend(("--apple-rate-wpm", apple_rate_wpm))
        apple_pitch_baseline = self.tts_apple_pitch_baseline.get().strip()
        if apple_pitch_baseline and apple_pitch_baseline != "Auto":
            command.extend(("--apple-pitch-baseline", apple_pitch_baseline))
        if self.tts_backend.get() == "apple":
            command.extend((
                "--apple-volume", self.tts_apple_volume.get() or "1.00",
                "--apple-emphasis", self.tts_apple_emphasis.get() or "none",
                "--apple-pause-ms", self.tts_apple_pause.get() or "0",
                "--apple-sentence-pause-ms", self.tts_apple_sentence_pause.get() or "0",
                "--apple-trailing-pause-ms", self.tts_apple_trailing_pause.get() or "0",
            ))
            command.extend(substitution_args)
            command.extend(phoneme_args)
        cue = self.tts_cue.get().strip()
        if cue and cue != "none":
            command.extend(("--cue", cue))
        self.tts_button.configure(state="disabled")
        self.tts_rendering = True
        for button in (self.tts_play_button, self.tts_keep_button, self.tts_discard_button):
            if button is not None:
                button.configure(state="disabled")
            self.tts_status["text"] = f"Making review for {voice_name}..."
        thread = threading.Thread(target=self._run_tts, args=(command,), daemon=True)
        thread.start()
        self.after(100, self._poll_tts)

    def _run_tts(self, command: list[str]) -> None:
        try:
            result = subprocess.run(
                command,
                cwd=self.path.parent.parent,
                text=True,
                capture_output=True,
                check=False,
            )
            output = (result.stdout + "\n" + result.stderr).strip()
            self.tts_queue.put((result.returncode, output))
        except OSError as error:
            self.tts_queue.put((1, str(error)))

    def _poll_tts(self) -> None:
        try:
            result = self.tts_queue.get_nowait()
        except queue.Empty:
            self.after(100, self._poll_tts)
            return
        self.tts_rendering = False
        if self.tts_button is not None:
            self.tts_button.configure(state="normal")
        self._validate_apple_entries()
        code, output = result
        if code == 0 and self.review_voice_path is not None and self.review_voice_path.exists():
            self.tts_status["text"] = (
                f"Review ready for {self.review_voice_name} - Play, Keep, or Discard."
            )
            for button in (self.tts_play_button, self.tts_keep_button, self.tts_discard_button):
                if button is not None:
                    button.configure(state="normal")
        else:
            self._discard_review_voice()
            self.tts_status["text"] = "Voice clip was not made."
            messagebox.showerror(
                "Voice generation stopped",
                "The line was not changed. Check the details below:\n\n" + output[-3000:],
            )

    def _play_review_voice(self) -> None:
        path = self.review_voice_path
        if path is None or not path.exists():
            self.tts_status["text"] = "There is no review clip to play."
            return
        if self.voice_player is not None and self.voice_player.poll() is None:
            self.voice_player.terminate()
        players = (
            ("ffplay", ("ffplay", "-nodisp", "-autoexit", "-loglevel", "quiet", str(path))),
            ("paplay", ("paplay", str(path))),
            ("aplay", ("aplay", str(path))),
        )
        for name, command in players:
            if shutil.which(name) is None:
                continue
            try:
                self.voice_player = subprocess.Popen(command)
                self.tts_status["text"] = "Playing the review clip..."
                return
            except OSError:
                continue
        self.tts_status["text"] = "No local audio player found (install ffplay or paplay)."

    def _keep_review_voice(self) -> None:
        path = self.review_voice_path
        name = self.review_voice_name
        if path is None or name is None or not path.exists():
            return
        destination_dir = self.path.parent.parent / "web" / "res" / "vo"
        destination_dir.mkdir(parents=True, exist_ok=True)
        destination = destination_dir / f"{name}.ogg"
        manifest_path = self.path.parent.parent / "web" / "res" / "manifest.json"
        moved = False
        try:
            if destination.exists() and not messagebox.askyesno(
                "Replace game voice?",
                f"Replace the existing game clip {destination.name}?",
                parent=self,
            ):
                return
            path.replace(destination)
            moved = True
            data = json.loads(manifest_path.read_text(encoding="utf-8"))
            data.setdefault("sfx", {})[f"vo-{name}"] = f"vo/{name}.ogg"
            temporary = manifest_path.with_name(manifest_path.name + ".voice.tmp")
            temporary.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            temporary.replace(manifest_path)
        except (OSError, json.JSONDecodeError) as error:
            if moved and destination.exists() and not path.exists():
                try:
                    destination.replace(path)
                except OSError:
                    pass
            self.tts_status["text"] = f"Could not keep the clip: {error}"
            return
        self.review_voice_path = None
        self.review_voice_name = None
        for button in (self.tts_play_button, self.tts_keep_button, self.tts_discard_button):
            if button is not None:
                button.configure(state="disabled")
        self.tts_status["text"] = "Kept in web/res/vo and manifest. Reload the game to load it."

    def _discard_review_voice(self, confirm: bool = False) -> None:
        path = self.review_voice_path
        if path is None:
            return
        if confirm and not messagebox.askyesno(
            "Discard review clip?",
            "The generated voice sample has not been kept. Discard it and make a new one?",
        ):
            return
        if self.voice_player is not None and self.voice_player.poll() is None:
            self.voice_player.terminate()
        try:
            path.unlink(missing_ok=True)
        except OSError:
            pass
        self.review_voice_path = None
        self.review_voice_name = None
        for button in (self.tts_play_button, self.tts_keep_button, self.tts_discard_button):
            if button is not None:
                button.configure(state="disabled")
        self.tts_status["text"] = "Review clip discarded."

    def _save_beat(self) -> None:
        if self.scene is None:
            return
        beat = self._beat_from_form()
        if beat is None:
            return
        selection = self.beat_list.curselection()
        if selection:
            self.scene.beats[selection[0]] = beat
        else:
            self.scene.beats.append(beat)
        self.beat_list.delete(0, "end")
        for candidate in self.scene.beats:
            self.beat_list.insert("end", self._beat_label(candidate))
        index = selection[0] if selection else len(self.scene.beats) - 1
        self.beat_list.selection_set(index)
        self._load_beat(index)
        self._mark_dirty()

    def _remove_beat(self) -> None:
        if self.scene is None:
            return
        selection = self.beat_list.curselection()
        if not selection:
            return
        if not messagebox.askyesno("Remove moment?", "Remove this story moment?"):
            return
        del self.scene.beats[selection[0]]
        self._load_scene(self.script.scenes.index(self.scene))
        self._mark_dirty()

    def _branch_selected(self, _event: object = None) -> None:
        index = self.branch_list.current()
        self._apply_branch()
        self._load_branch(index if index >= 0 else None)

    def _load_branch(self, index: int | None) -> None:
        self.branch = None
        self.option = None
        self.prompt_var.set("")
        self.option_list.delete(0, "end")
        self.option_id_var.set("")
        self.next_scene_box.set("")
        self.option_label_var.set("")
        if self.scene is None or index is None or index >= len(self.scene.branches):
            return
        self.branch = self.scene.branches[index]
        self.prompt_var.set(self.branch.prompt)
        for option in self.branch.options:
            self.option_list.insert("end", self._option_label(option))
        if self.branch.options:
            self.option_list.selection_set(0)
            self._load_option(0)

    def _apply_branch(self) -> None:
        if self.branch is None:
            return
        new_prompt = self.prompt_var.get().strip() or self.branch.prompt
        changed = new_prompt != self.branch.prompt
        self.branch.prompt = new_prompt
        if changed and self.scene is not None:
            branch_values = [
                f"Choice {number + 1} - {_ui_text(candidate.prompt[:52])}"
                for number, candidate in enumerate(self.scene.branches)
            ]
            selected = self.branch_list.current()
            self.branch_list["values"] = branch_values
            if selected >= 0:
                self.branch_list.current(selected)
        if changed:
            self._mark_dirty()

    @staticmethod
    def _option_label(option: Option) -> str:
        return f"{_ui_text(option.label[:58])}  ->  {option.next_scene}"

    def _option_selected(self, _event: object = None) -> None:
        selection = self.option_list.curselection()
        self._load_option(selection[0] if selection else None)

    def _load_option(self, index: int | None) -> None:
        self.option = None
        self.option_id_var.set("")
        self.next_scene_box.set("")
        self.option_label_var.set("")
        if self.branch is None or index is None or index >= len(self.branch.options):
            return
        self.option = self.branch.options[index]
        self.option_id_var.set(self.option.option_id)
        self.next_scene_box.set(self._scene_choice_label_for_id(self.option.next_scene))
        self.option_label_var.set(self.option.label)

    @staticmethod
    def _scene_choice_label(scene: Scene) -> str:
        return f"Day {scene.day:02d} - {_ui_text(scene.title)}"

    def _scene_choice_label_for_id(self, scene_id: str) -> str:
        if scene_id == "END":
            return "END"
        for scene in self.script.scenes:
            if scene.scene_id == scene_id:
                return self._scene_choice_label(scene)
        return scene_id

    def _scene_id_from_choice(self) -> str:
        choice = self.next_scene_box.get().strip()
        if choice == "END":
            return choice
        for scene in self.script.scenes:
            if choice == self._scene_choice_label(scene):
                return scene.scene_id
        return choice

    def _option_from_form(self) -> Option | None:
        next_scene = self._scene_id_from_choice()
        label = self.option_label_var.get().strip()
        if not next_scene or not label:
            messagebox.showerror("An answer needs words", "Write the answer and choose where the story continues.")
            return None
        option_id = self.option_id_var.get().strip() or self._new_internal_label(label)
        return Option(option_id, next_scene, label)

    def _new_internal_label(self, label: str) -> str:
        stem = re.sub(r"[^a-z0-9]+", "-", label.lower()).strip("-") or "answer"
        candidate = f"choice-{stem}"
        existing = {
            option.option_id
            for scene in self.script.scenes
            for branch in scene.branches
            for option in branch.options
        }
        number = 2
        while candidate in existing:
            candidate = f"choice-{stem}-{number}"
            number += 1
        return candidate

    def _new_option(self) -> None:
        self.option_list.selection_clear(0, "end")
        self._load_option(None)
        self.option_label_var.set("New answer")
        self.next_scene_box.set("END")

    def _save_option(self) -> None:
        if self.branch is None:
            return
        option = self._option_from_form()
        if option is None:
            return
        selection = self.option_list.curselection()
        if selection:
            self.branch.options[selection[0]] = option
        else:
            self.branch.options.append(option)
        self._load_branch(self.scene.branches.index(self.branch))
        self.option_list.selection_set(selection[0] if selection else len(self.branch.options) - 1)
        self._load_option(self.option_list.curselection()[0])
        self._mark_dirty()

    def _remove_option(self) -> None:
        if self.branch is None:
            return
        selection = self.option_list.curselection()
        if not selection:
            return
        if not messagebox.askyesno("Remove answer?", "Remove this answer from the choice?"):
            return
        del self.branch.options[selection[0]]
        self._load_branch(self.scene.branches.index(self.branch))
        self._mark_dirty()

    def _preview(self) -> None:
        if self.scene is None:
            return
        preview = tk.Toplevel(self)
        preview.title(f"Preview - Day {self.scene.day:02d}: {_ui_text(self.scene.title)}")
        preview.geometry("620x560")
        preview.columnconfigure(0, weight=1)
        preview.rowconfigure(0, weight=1)
        text = tk.Text(preview, wrap="word", padx=18, pady=18)
        text.grid(row=0, column=0, sticky="nsew")
        text.insert("end", f"DAY {self.scene.day}\n{_ui_text(self.scene.title)}\n\n")
        for beat in self.scene.beats:
            if beat.speaker:
                text.insert("end", f"{beat.speaker.upper()}\n{beat.text}\n\n")
            else:
                text.insert("end", f"[{beat.text}]\n\n")
        for branch in self.scene.branches:
            text.insert("end", f"{branch.prompt}\n")
            for option in branch.options:
                text.insert("end", f"  * {_ui_text(option.label)}\n")
            text.insert("end", "\n")
        text.configure(state="disabled")

    def _show_validation(self) -> None:
        """Show structural issues without modifying the screenplay."""
        if not self._apply_current_beat():
            return
        self._apply_scene()
        self._apply_branch()
        issues = validate_script(self.script)
        window = tk.Toplevel(self)
        window.title("Screenplay check")
        window.geometry("720x440")
        window.minsize(560, 320)
        window.columnconfigure(0, weight=1)
        window.rowconfigure(1, weight=1)
        if issues:
            heading = f"{len(issues)} issue{'s' if len(issues) != 1 else ''} need attention"
            detail = "Fix these before saving. The editor will not replace your screenplay while these structural issues remain."
        else:
            heading = "Screenplay is structurally sound"
            detail = "No duplicate IDs, broken destinations, empty moments, or invalid event references were found."
        ttk.Label(window, text=heading, style="PanelHeading.TLabel").grid(row=0, column=0, sticky="w", padx=12, pady=(12, 2))
        ttk.Label(window, text=detail, style="Muted.TLabel", wraplength=680).grid(row=0, column=0, sticky="w", padx=12, pady=(34, 8))
        report = tk.Text(window, wrap="word", padx=10, pady=10, height=12)
        report.grid(row=1, column=0, sticky="nsew", padx=12, pady=(0, 8))
        report.insert("1.0", "\n".join(f"* {issue}" for issue in issues) if issues else "Ready for the Dart story build.")
        report.configure(state="disabled")
        ttk.Button(window, text="Close", command=window.destroy).grid(row=2, column=0, sticky="e", padx=12, pady=(0, 12))
        window.transient(self)
        window.grab_set()

    def _open_orchestrator(self) -> None:
        if self.event_window is not None and self.event_window.winfo_exists():
            self.event_window.lift()
            return
        window = tk.Toplevel(self)
        self.event_window = window
        window.title("The Quarantine - Game events")
        window.geometry("960x620")
        window.minsize(760, 480)
        window.columnconfigure(1, weight=1)
        window.rowconfigure(0, weight=1)
        def close_events() -> None:
            window.destroy()
            self.event_window = None

        window.protocol("WM_DELETE_WINDOW", close_events)

        left = ttk.Frame(window, padding=8)
        left.grid(row=0, column=0, sticky="ns")
        ttk.Label(left, text="What happens, and when").pack(anchor="w")
        filter_day = ttk.Combobox(
            left,
            values=("All days",) + tuple(f"Day {day:02d}" for day in range(1, 22)),
            state="readonly",
            width=32,
        )
        filter_day.set("All days")
        filter_day.pack(fill="x", pady=(8, 3))
        day_navigation = ttk.Frame(left)
        day_navigation.pack(fill="x", pady=(0, 3))
        ttk.Button(day_navigation, text="<", width=3, command=lambda: select_relative_day(-1)).pack(side="left")
        day_summary = ttk.Label(day_navigation, text="All days", anchor="center")
        day_summary.pack(side="left", fill="x", expand=True)
        ttk.Button(day_navigation, text=">", width=3, command=lambda: select_relative_day(1)).pack(side="left")
        filter_kind = ttk.Combobox(
            left,
            values=("All kinds", "broadcast", "visitor", "choice", "aftermath", "ending"),
            state="readonly",
            width=32,
        )
        filter_kind.set("All kinds")
        filter_kind.pack(fill="x", pady=3)
        ttk.Label(left, text="Day timeline | click to place a moment").pack(
            anchor="w", pady=(8, 2)
        )
        timeline = tk.Canvas(
            left,
            width=270,
            height=190,
            background="#fafafa",
            highlightthickness=1,
            highlightbackground="#cccccc",
        )
        timeline.pack(fill="x", pady=(0, 6))
        event_list = tk.Listbox(left, width=36, exportselection=False)
        event_list.pack(fill="y", expand=True)

        right = ttk.Frame(window, padding=8)
        right.grid(row=0, column=1, sticky="nsew")
        right.columnconfigure(1, weight=1)
        right.rowconfigure(7, weight=1)
        event_id = tk.StringVar()
        event_kind = ttk.Combobox(
            right,
            values=("broadcast", "visitor", "choice", "aftermath", "ending"),
            state="readonly",
        )
        day = tk.StringVar()
        hour = tk.StringVar()
        random_time = tk.BooleanVar(value=False)
        random_from = tk.StringVar()
        random_to = tk.StringVar()
        label = tk.StringVar()
        source = ttk.Combobox(right, state="readonly")
        speaker = ttk.Combobox(right, state="readonly")
        cue = ttk.Combobox(right, values=("none",) + CUES, state="readonly")
        next_scene = ttk.Combobox(right, state="readonly")
        effects = tk.Text(right, height=6, wrap="word")

        fields = (
            ("Kind", event_kind),
            ("Day", day),
            ("Hour (0-23)", hour),
            ("What the player experiences", label),
            ("Story source (optional)", source),
            ("Speaker", speaker),
            ("Variation cue", cue),
            ("Continue to", next_scene),
        )
        for row, (caption, variable) in enumerate(fields):
            ttk.Label(right, text=caption).grid(row=row, column=0, sticky="w", pady=3)
            if isinstance(variable, tk.Variable):
                ttk.Entry(right, textvariable=variable).grid(row=row, column=1, sticky="ew", pady=3)
            else:
                variable.grid(row=row, column=1, sticky="ew", pady=3)

        def toggle_random_time() -> None:
            state = "normal" if random_time.get() else "disabled"
            for entry in (random_from_entry, random_to_entry):
                entry.configure(state=state)

        ttk.Checkbutton(
            right,
            text="Random time",
            variable=random_time,
            command=toggle_random_time,
        ).grid(row=2, column=3, sticky="w", padx=(5, 0))
        range_frame = ttk.Frame(right)
        range_frame.grid(row=3, column=2, columnspan=2, sticky="w", padx=(5, 0))
        ttk.Label(range_frame, text="earliest").pack(side="left")
        random_from_entry = ttk.Entry(range_frame, textvariable=random_from, width=6)
        random_from_entry.pack(side="left", padx=(3, 6))
        ttk.Label(range_frame, text="latest").pack(side="left")
        random_to_entry = ttk.Entry(range_frame, textvariable=random_to, width=6)
        random_to_entry.pack(side="left", padx=(3, 0))
        toggle_random_time()

        def nudge_hour(amount: float) -> None:
            try:
                value = min(23.5, max(0.0, float(hour.get()) + amount))
            except ValueError:
                value = 12.0
            hour.set(f"{value:g}")

        time_buttons = ttk.Frame(right)
        time_buttons.grid(row=2, column=2, padx=(5, 0))
        ttk.Button(time_buttons, text="-30m", width=5, command=lambda: nudge_hour(-0.5)).pack(side="left")
        ttk.Button(time_buttons, text="+30m", width=5, command=lambda: nudge_hour(0.5)).pack(side="left", padx=(3, 0))
        ttk.Label(right, text="Story changes (one key=value per line; optional)").grid(
            row=9, column=0, sticky="nw", pady=3
        )
        effects.grid(row=9, column=1, sticky="nsew", pady=3)
        ttk.Label(
            right,
            text="Examples: visitor.present=true   |   alarm.level=high",
            foreground="#666666",
        ).grid(row=8, column=1, sticky="w", pady=(0, 3))

        buttons = ttk.Frame(right)
        buttons.grid(row=10, column=0, columnspan=2, sticky="e", pady=8)

        def ordered_events() -> list[Event]:
            selected_day = filter_day.get()
            day_number = int(selected_day[-2:]) if selected_day != "All days" else None
            selected_kind = filter_kind.get()
            return [
                event for event in sorted(
                    self.script.events,
                    key=lambda item: (item.day, item.hour, item.event_id),
                )
                if (day_number is None or event.day == day_number)
                and (selected_kind == "All kinds" or event.kind == selected_kind)
            ]

        def select_relative_day(offset: int) -> None:
            current = filter_day.get()
            day_number = int(current[-2:]) if current != "All days" else (self.scene.day if self.scene else 1)
            day_number = min(21, max(1, day_number + offset))
            filter_day.set(f"Day {day_number:02d}")
            refresh()
            load(None)

        def draw_timeline() -> None:
            timeline.delete("all")
            width = max(timeline.winfo_width(), 270)
            top, bottom = 12, 178
            axis_x = 42
            timeline.create_line(axis_x, top, axis_x, bottom, fill="#999999")
            for marker in range(0, 25, 3):
                y = top + (marker / 24.0) * (bottom - top)
                timeline.create_line(axis_x - 5, y, width - 8, y, fill="#e2e2e2")
                timeline.create_text(
                    axis_x - 9,
                    y,
                    text=f"{marker:02d}:00",
                    anchor="e",
                    fill="#555555",
                    font=("TkDefaultFont", 8),
                )
            for event in ordered_events():
                start_hour = event.random_from if event.random_from is not None else event.hour
                end_hour = event.random_to if event.random_to is not None else event.hour
                y = top + (start_hour / 24.0) * (bottom - top)
                end_y = top + (end_hour / 24.0) * (bottom - top)
                color = {
                    "broadcast": "#4b75a8",
                    "visitor": "#9b5c45",
                    "choice": "#6d62a8",
                    "aftermath": "#66845a",
                    "ending": "#9a7a36",
                }.get(event.kind, "#666666")
                if end_hour != start_hour:
                    timeline.create_line(
                        axis_x + 1, y, axis_x + 1, end_y,
                        fill=color, width=5,
                    )
                timeline.create_oval(
                    axis_x - 3,
                    y - 4,
                    axis_x + 5,
                    y + 4,
                    fill=color,
                    outline="",
                )
                timeline.create_text(
                    axis_x + 12,
                    (y + end_y) / 2,
                    text=(
                        f"{start_hour:04.1f}-{end_hour:04.1f}  {_ui_text(event.label[:24])}"
                        if end_hour != start_hour
                        else f"{event.hour:04.1f}  {_ui_text(event.label[:28])}"
                    ),
                    anchor="w",
                    fill="#333333",
                    font=("TkDefaultFont", 8),
                )

        def timeline_clicked(click: tk.Event) -> None:
            selected_day = filter_day.get()
            day_number = (
                int(selected_day[-2:])
                if selected_day != "All days"
                else (self.scene.day if self.scene else 1)
            )
            top, bottom = 12, 178
            position = min(1.0, max(0.0, (click.y - top) / (bottom - top)))
            placed_hour = round(position * 24.0 * 2.0) / 2.0
            placed_hour = min(23.5, max(0.0, placed_hour))
            nearest = [
                event for event in ordered_events() if event.day == day_number
            ]
            close = min(nearest, key=lambda event: abs(event.hour - placed_hour), default=None)
            in_range = next(
                (
                    event for event in nearest
                    if event.random_from is not None
                    and event.random_to is not None
                    and event.random_from <= placed_hour <= event.random_to
                ),
                None,
            )
            close = in_range or close
            if close is not None and (
                in_range is not None or abs(close.hour - placed_hour) <= 0.5
            ):
                visible = ordered_events()
                event_list.selection_clear(0, "end")
                index = visible.index(close)
                event_list.selection_set(index)
                event_list.see(index)
                load(index)
                return
            filter_day.set(f"Day {day_number:02d}")
            filter_kind.set("All kinds")
            refresh()
            new_event()
            day.set(str(day_number))
            hour.set(f"{placed_hour:g}")

        def refresh() -> None:
            event_list.delete(0, "end")
            visible_events = ordered_events()
            for event in visible_events:
                event_list.insert("end", self._event_label(event))
            if filter_day.get() == "All days":
                day_summary["text"] = f"All days | {len(visible_events)} moments"
            else:
                next_event = visible_events[0] if visible_events else None
                suffix = f" | next {next_event.hour:04.1f}" if next_event else " | quiet"
                day_summary["text"] = f"{filter_day.get()} | {len(visible_events)} moments{suffix}"
            speakers = self._speaker_choices()
            speaker["values"] = speakers + [
                name for name in ("denise", "sylvia", "warden") if name not in speakers
            ]
            source["values"] = [""] + self.script.sources
            next_scene["values"] = ["END"] + [
                self._scene_choice_label(scene) for scene in self.script.scenes
            ]
            draw_timeline()

        def load(index: int | None) -> None:
            for variable in (event_id, day, hour, label):
                variable.set("")
            event_kind.set("visitor")
            random_time.set(False)
            random_from.set("")
            random_to.set("")
            toggle_random_time()
            speaker.set("")
            cue.set("none")
            next_scene.set("")
            effects.delete("1.0", "end")
            visible = ordered_events()
            if index is None or index >= len(visible):
                return
            event = visible[index]
            event_id.set(event.event_id)
            event_kind.set(event.kind)
            day.set(str(event.day))
            hour.set(str(event.hour))
            has_range = event.random_from is not None and event.random_to is not None
            random_time.set(has_range)
            random_from.set("" if event.random_from is None else str(event.random_from))
            random_to.set("" if event.random_to is None else str(event.random_to))
            toggle_random_time()
            label.set(event.label)
            source.set(event.source)
            speaker.set(event.speaker)
            cue.set(event.cue or "none")
            next_scene.set(self._scene_choice_label_for_id(event.next_scene) if event.next_scene else "")
            effects.insert("1.0", "\n".join(event.effects))

        def selected_event() -> Event | None:
            selection = event_list.curselection()
            if not selection:
                return None
            ordered = ordered_events()
            return ordered[selection[0]] if selection[0] < len(ordered) else None

        def save_event() -> None:
            try:
                identifier = event_id.get().strip() or self._event_internal_name(label.get())
                event = Event(
                    identifier,
                    event_kind.get().strip(),
                    int(day.get()),
                    float(random_from.get()) if random_time.get() and random_from.get().strip() else float(hour.get()),
                    label.get().strip(),
                    source.get().strip(),
                    speaker.get().strip(),
                    "" if cue.get() == "none" else cue.get().strip(),
                    [line.strip() for line in effects.get("1.0", "end").splitlines() if line.strip()],
                    self._scene_id_from_label(next_scene.get()),
                    float(random_from.get()) if random_time.get() and random_from.get().strip() else None,
                    float(random_to.get()) if random_time.get() and random_to.get().strip() else None,
                )
                if event.day < 1 or event.day > 21 or event.hour < 0 or event.hour >= 24:
                    raise ValueError("Day must be 1-21 and hour must be from 0 to under 24.")
                if not event.label:
                    raise ValueError("Give the event a short description.")
                if random_time.get() and (
                    event.random_from is None or event.random_to is None
                    or event.random_from < 0 or event.random_to >= 24
                    or event.random_from > event.random_to
                ):
                    raise ValueError("Random time needs an earliest and latest hour from 0 to under 24.")
                if any("=" not in effect or effect.startswith("=") or effect.endswith("=") for effect in event.effects):
                    raise ValueError("Each story change needs a key=value, for example alarm.level=high.")
                if event.source and event.source not in self.script.sources:
                    raise ValueError("Choose a source already listed in the screenplay.")
                if event.kind not in {"broadcast", "visitor", "choice", "aftermath", "ending"}:
                    raise ValueError("Choose a recognised event kind.")
                if event.cue and event.cue not in CUES:
                    raise ValueError("Choose a variation cue from the list.")
                if event.next_scene and event.next_scene != "END" and not any(
                    scene.scene_id == event.next_scene for scene in self.script.scenes
                ):
                    raise ValueError("Choose an existing scene or END as the destination.")
                duplicate = next(
                    (candidate for candidate in self.script.events
                     if candidate is not selected_event() and candidate.event_id == event.event_id),
                    None,
                )
                if duplicate is not None:
                    raise ValueError("That event already exists. Give this moment a different name.")
            except ValueError as error:
                messagebox.showerror("Event needs attention", str(error), parent=window)
                return
            old = selected_event()
            if old is not None:
                self.script.events[self.script.events.index(old)] = event
            else:
                self.script.events.append(event)
            self._mark_dirty()
            refresh()
            load(next((i for i, item in enumerate(ordered_events()) if item.event_id == event.event_id), None))

        def new_event() -> None:
            event_list.selection_clear(0, "end")
            load(None)
            day.set(str(self.scene.day if self.scene else 1))
            hour.set("12")
            event_kind.set("visitor")
            cue.set("none")
            random_time.set(False)
            random_from.set("")
            random_to.set("")
            toggle_random_time()

        def duplicate_event() -> None:
            original = selected_event()
            if original is None:
                return
            event_id.set("")
            label.set(f"Copy of {original.label}")
            load(None)
            day.set(str(original.day))
            hour.set(str(original.hour))
            random_time.set(original.random_from is not None and original.random_to is not None)
            random_from.set("" if original.random_from is None else str(original.random_from))
            random_to.set("" if original.random_to is None else str(original.random_to))
            toggle_random_time()
            event_kind.set(original.kind)
            label.set(f"Copy of {original.label}")
            source.set(original.source)
            speaker.set(original.speaker)
            cue.set(original.cue or "none")
            next_scene.set(self._scene_choice_label_for_id(original.next_scene) if original.next_scene else "")
            effects.insert("1.0", "\n".join(original.effects))
            event_list.selection_clear(0, "end")

        def remove_event() -> None:
            event = selected_event()
            if event is None:
                return
            if not messagebox.askyesno("Remove event?", f"Remove '{event.label}' from the game schedule?", parent=window):
                return
            self.script.events.remove(event)
            self._mark_dirty()
            refresh()
            load(None)

        def seed_events() -> None:
            created = self._seed_events()
            if created:
                self._mark_dirty()
                refresh()
                load(0)
            else:
                messagebox.showinfo("Day plan is complete", "Every linked story source already has an event.", parent=window)

        event_list.bind("<<ListboxSelect>>", lambda _event: load(event_list.curselection()[0] if event_list.curselection() else None))
        timeline.bind("<Button-1>", timeline_clicked)
        filter_day.bind("<<ComboboxSelected>>", lambda _event: (refresh(), load(None)))
        filter_kind.bind("<<ComboboxSelected>>", lambda _event: (refresh(), load(None)))
        ttk.Button(buttons, text="Build day plan", command=seed_events).pack(side="left", padx=3)
        ttk.Button(buttons, text="New event", command=new_event).pack(side="left", padx=3)
        ttk.Button(buttons, text="Duplicate", command=duplicate_event).pack(side="left", padx=3)
        ttk.Button(buttons, text="Save event", command=save_event).pack(side="left", padx=3)
        ttk.Button(buttons, text="Remove event", command=remove_event).pack(side="left", padx=3)
        refresh()
        load(0 if self.script.events else None)

    def _open_characters(self) -> None:
        if self.character_window is not None and self.character_window.winfo_exists():
            self.character_window.lift()
            return
        window = tk.Toplevel(self)
        self.character_window = window
        window.title("The Quarantine - Characters")
        window.geometry("760x500")
        window.minsize(620, 400)
        window.columnconfigure(1, weight=1)
        window.rowconfigure(0, weight=1)

        def close_characters() -> None:
            window.destroy()
            self.character_window = None

        window.protocol("WM_DELETE_WINDOW", close_characters)

        left = ttk.Frame(window, padding=8)
        left.grid(row=0, column=0, sticky="ns")
        ttk.Label(left, text="Characters in the story").pack(anchor="w")
        character_list = tk.Listbox(left, width=28, exportselection=False)
        character_list.pack(fill="y", expand=True, pady=(6, 0))

        right = ttk.Frame(window, padding=8)
        right.grid(row=0, column=1, sticky="nsew")
        right.columnconfigure(1, weight=1)
        right.rowconfigure(4, weight=1)
        character_id = tk.StringVar()
        display_name = tk.StringVar()
        source_path = tk.StringVar()
        first_line = tk.Text(right, height=7, wrap="word", undo=True)

        ttk.Label(
            right,
            text="Create a character once, then write their full visit in the linked text file.",
            foreground="#555555",
        ).grid(row=0, column=0, columnspan=2, sticky="w", pady=(0, 10))
        ttk.Label(right, text="Character ID").grid(row=1, column=0, sticky="w", pady=3)
        ttk.Entry(right, textvariable=character_id).grid(row=1, column=1, sticky="ew", pady=3)
        ttk.Label(right, text="Name for writers").grid(row=2, column=0, sticky="w", pady=3)
        ttk.Entry(right, textvariable=display_name).grid(row=2, column=1, sticky="ew", pady=3)
        ttk.Label(right, text="Writing file").grid(row=3, column=0, sticky="w", pady=3)
        ttk.Label(right, textvariable=source_path, foreground="#666666").grid(
            row=3, column=1, sticky="w", pady=3
        )
        ttk.Label(right, text="First spoken line").grid(row=4, column=0, sticky="nw", pady=3)
        first_line.grid(row=4, column=1, sticky="nsew", pady=3)
        ttk.Label(
            right,
            text="New characters start on the selected scene's day and can be expanded with @day/@tier blocks.",
            foreground="#666666",
            wraplength=460,
        ).grid(row=5, column=0, columnspan=2, sticky="w", pady=(4, 8))
        buttons = ttk.Frame(right)
        buttons.grid(row=6, column=0, columnspan=2, sticky="e")

        def character_paths() -> list[Path]:
            return sorted(
                (
                    self.path.parent.parent / source
                    for source in self.script.sources
                    if source.startswith("text/visitors/") and source.endswith(".txt")
                ),
                key=lambda path: path.stem,
            )

        def path_for(identifier: str) -> Path:
            return self.path.parent.parent / "text" / "visitors" / f"{identifier}.txt"

        def read_display_name(path: Path) -> str:
            try:
                for line in path.read_text(encoding="utf-8").splitlines():
                    if line.startswith("# Character:"):
                        return line[len("# Character:"):].strip()
            except OSError:
                pass
            return path.stem.replace("-", " ").title()

        def load(index: int | None) -> None:
            character_id.set("")
            display_name.set("")
            source_path.set("")
            first_line.delete("1.0", "end")
            paths = character_paths()
            if index is None or index >= len(paths):
                return
            path = paths[index]
            character_id.set(path.stem)
            source_path.set(path.relative_to(self.path.parent.parent).as_posix())
            try:
                lines = path.read_text(encoding="utf-8").splitlines()
                display_name.set(read_display_name(path))
            except OSError:
                lines = []
            first_line.delete("1.0", "end")
            for line in lines:
                if line and not line.startswith("#") and not line.startswith("@"):
                    first_line.insert("1.0", line)
                    break

        def refresh() -> None:
            character_list.delete(0, "end")
            for path in character_paths():
                character_list.insert("end", f"{read_display_name(path)}  ({path.stem})")

        def new_character() -> None:
            character_list.selection_clear(0, "end")
            load(None)
            display_name.set("")
            first_line.insert("1.0", "Good morning. I won't keep you.")
            character_id.focus_set()

        def create_character() -> None:
            identifier = re.sub(r"[^a-z0-9-]+", "-", character_id.get().strip().lower()).strip("-")
            name = display_name.get().strip() or identifier.replace("-", " ").title()
            line = first_line.get("1.0", "end").strip()
            if not identifier or not line:
                messagebox.showerror("Character needs a little more", "Give the character an ID and a first spoken line.", parent=window)
                return
            destination = path_for(identifier)
            if destination.exists():
                messagebox.showerror("Character already exists", "Choose a new ID or select this character and open its writing.", parent=window)
                return
            relative = destination.relative_to(self.path.parent.parent).as_posix()
            content = (
                f"# Character: {name}\n"
                f"# Add more @day and @tier blocks as this character returns.\n"
                f"@visitor {identifier}\n"
                f"@day {self.scene.day if self.scene else 1}\n"
                "@arrival 12 0\n"
                "@tier full.1\n"
                f"{line}\n"
            )
            try:
                destination.parent.mkdir(parents=True, exist_ok=True)
                temporary = destination.with_name(destination.name + ".new")
                temporary.write_text(content, encoding="utf-8")
                temporary.replace(destination)
            except OSError as error:
                messagebox.showerror("Could not create character", str(error), parent=window)
                return
            if relative not in self.script.sources:
                self.script.sources.append(relative)
            if self.scene is not None and relative not in self.scene.links:
                self.scene.links.append(relative)
            self._mark_dirty()
            refresh()
            index = next((i for i, path in enumerate(character_paths()) if path == destination), None)
            if index is not None:
                character_list.selection_set(index)
            source_path.set(relative)
            self._set_tts_defaults(identifier)
            self.status["text"] = f"Added {name}. Save to validate the new character."

        def open_writing() -> None:
            identifier = character_id.get().strip()
            path = path_for(identifier)
            if not path.exists():
                messagebox.showinfo("No writing file yet", "Create the character first.", parent=window)
                return
            try:
                if os.name == "nt":
                    os.startfile(str(path))  # type: ignore[attr-defined]
                elif sys.platform == "darwin":
                    subprocess.Popen(["open", str(path)])
                else:
                    subprocess.Popen(["xdg-open", str(path)])
            except OSError as error:
                messagebox.showerror("Could not open writing", str(error), parent=window)

        def save_details() -> None:
            identifier = character_id.get().strip()
            name = display_name.get().strip()
            path = path_for(identifier)
            if not path.exists() or not name:
                messagebox.showerror("Character needs a name", "Select a character and give it a writer-facing name.", parent=window)
                return
            try:
                lines = path.read_text(encoding="utf-8").splitlines()
                replacement = f"# Character: {name}"
                for index, line in enumerate(lines):
                    if line.startswith("# Character:"):
                        lines[index] = replacement
                        break
                else:
                    lines.insert(0, replacement)
                temporary = path.with_name(path.name + ".details")
                temporary.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
                temporary.replace(path)
            except OSError as error:
                messagebox.showerror("Could not save character", str(error), parent=window)
                return
            self.status["text"] = f"Updated {name}."
            refresh()

        character_list.bind("<<ListboxSelect>>", lambda _event: load(character_list.curselection()[0] if character_list.curselection() else None))
        ttk.Button(buttons, text="New character", command=new_character).pack(side="left", padx=3)
        ttk.Button(buttons, text="Create character", command=create_character).pack(side="left", padx=3)
        ttk.Button(buttons, text="Save name", command=save_details).pack(side="left", padx=3)
        ttk.Button(buttons, text="Open writing", command=open_writing).pack(side="left", padx=3)
        refresh()
        load(0 if character_paths() else None)

    @staticmethod
    def _event_label(event: Event) -> str:
        timing = (
            f"{event.random_from:04.1f}-{event.random_to:04.1f} random"
            if event.random_from is not None and event.random_to is not None
            else f"{event.hour:04.1f}"
        )
        return f"Day {event.day:02d} - {timing} - {event.kind.title()} - {_ui_text(event.label[:42])}"

    def _event_internal_name(self, label: str) -> str:
        stem = re.sub(r"[^a-z0-9]+", "-", label.lower()).strip("-") or "event"
        candidate = f"event-{stem}"
        existing = {event.event_id for event in self.script.events}
        number = 2
        while candidate in existing:
            candidate = f"event-{stem}-{number}"
            number += 1
        return candidate

    def _scene_id_from_label(self, label: str) -> str:
        if not label or label == "END":
            return "" if not label else "END"
        for scene in self.script.scenes:
            if label == self._scene_choice_label(scene):
                return scene.scene_id
        return label

    def _seed_events(self) -> list[Event]:
        created: list[Event] = []
        existing = {event.event_id for event in self.script.events}
        for scene in self.script.scenes:
            hour = 8.0
            for link in scene.links:
                parts = link.split("/")
                if "broadcasts" in parts:
                    kind, speaker = "broadcast", "broadcast"
                elif "visitors" in parts:
                    kind, speaker = "visitor", Path(parts[-1]).stem
                else:
                    continue
                event_id = f"{scene.scene_id}-{kind}-{speaker}"
                if event_id in existing:
                    hour += 1.0
                    continue
                event = Event(
                    event_id, kind, scene.day, hour,
                    f"{speaker.title()} event for {scene.title}",
                    link, speaker, "", [], scene.scene_id,
                )
                self.script.events.append(event)
                created.append(event)
                existing.add(event_id)
                hour += 1.0
        return created

    def _restore_backup(self) -> None:
        backup = self.path.with_name(self.path.name + ".bak")
        if not backup.exists():
            messagebox.showinfo("No earlier save", "There is no earlier saved version to restore yet.")
            return
        if not messagebox.askyesno(
            "Restore the earlier save?",
            "This will replace the current screenplay with the last saved copy. Continue?",
        ):
            return
        try:
            restored_script = parse_script(backup)
            current_text = self.path.read_text(encoding="utf-8")
            backup_text = backup.read_text(encoding="utf-8")
        except (OSError, ValueError) as error:
            messagebox.showerror(
                "Could not restore",
                f"The earlier copy could not be opened safely:\n\n{error}",
            )
            return
        before_restore = self.path.with_name(self.path.name + ".before-restore.bak")
        try:
            before_restore.write_text(current_text, encoding="utf-8")
            temporary = self.path.with_name(self.path.name + ".restore.tmp")
            temporary.write_text(backup_text, encoding="utf-8")
            temporary.replace(self.path)
        except OSError as error:
            messagebox.showerror("Could not restore", f"Nothing was changed:\n\n{error}")
            return
        self.script = restored_script
        self.scene = None
        self.branch = None
        self._refresh_scene_list()
        self.next_scene_box["values"] = ["END"] + [
            self._scene_choice_label(scene) for scene in self.script.scenes
        ]
        self._load_scene(0)
        self.dirty = False
        self.title("The Quarantine - Screenplay Editor")
        self.status["text"] = f"Restored. The replaced copy is kept at {before_restore.name}."

    def _help(self) -> None:
        messagebox.showinfo(
            "A gentle guide",
            "Scene: one day in the story.\n\n"
            "Story moments: things the player sees or hears. Use Action for description and Dialogue for spoken words.\n\n"
            "Choices: the question shown to the player. Each answer leads to another day, or END for an ending.\n\n"
            "Characters: use the Characters toolbar button to create a visitor scaffold or open an existing character's writing.\n\n"
            "The filing label is hidden; the editor creates one for you.\n\n"
            "Your old screenplay is backed up as story.screenplay.bak whenever you save.",
        )

    def save(self) -> None:
        if not self._apply_current_beat():
            return
        self._apply_scene()
        self._apply_branch()
        issues = validate_script(self.script)
        if issues:
            self.status["text"] = f"Not saved: {len(issues)} screenplay issue{'s' if len(issues) != 1 else ''}."
            self._show_validation()
            return
        backup = self.path.with_name(self.path.name + ".bak")
        try:
            old_text = self.path.read_text(encoding="utf-8")
            new_text = encode_script(self.script)
            backup.write_text(old_text, encoding="utf-8")
            temporary = self.path.with_name(self.path.name + ".save.tmp")
            temporary.write_text(new_text, encoding="utf-8")
            temporary.replace(self.path)
        except OSError as error:
            messagebox.showerror(
                "Could not save",
                f"Your changes are still open in the editor, but the file was not changed:\n\n{error}",
            )
            return
        self.dirty = False
        self.title("The Quarantine - Screenplay Editor")
        if self.no_build:
            self.status["text"] = f"Saved. A backup is kept at {backup.name}."
            return
        try:
            result = subprocess.run(
                ["dart", "run", "tools/story_build.dart"],
                cwd=self.path.parent.parent,
                text=True,
                capture_output=True,
                check=False,
            )
            if result.returncode:
                self.status["text"] = "Saved, but the story needs attention"
                messagebox.showerror(
                    "A small story problem",
                    "The screenplay was saved safely, but the checker found something to fix:\n\n"
                    + (result.stderr or result.stdout),
                )
            else:
                self.status["text"] = "Saved and checked. A backup is kept beside the screenplay."
        except FileNotFoundError:
            self.status["text"] = "Saved. Dart is unavailable; a backup is kept beside the screenplay."

    def close(self) -> None:
        if self.dirty and not messagebox.askyesno("Unsaved changes", "Discard unsaved changes?"):
            return
        if self.review_voice_path is not None and self.review_voice_path.exists():
            if not messagebox.askyesno(
                "Discard unreviewed voice?",
                "A generated voice sample is waiting for Keep or Discard. Discard it now?",
            ):
                return
            self._discard_review_voice()
        self.destroy()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("path", nargs="?", default="text/story.screenplay")
    parser.add_argument("--no-build", action="store_true", help="save without running the Dart validator")
    args = parser.parse_args()
    path = Path(args.path).resolve()
    if not path.exists():
        print(f"screenplay not found: {path}", file=sys.stderr)
        return 2
    if tk is None:
        print(
            "Tkinter is unavailable. Install the system Tk package, then rerun "
            "this editor (or use dart run tools/story_build.dart for validation).",
            file=sys.stderr,
        )
        return 3
    try:
        app = Editor(path, args.no_build)
    except (OSError, ValueError) as error:
        print(f"cannot open screenplay: {error}", file=sys.stderr)
        return 2
    app.mainloop()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
