#!/usr/bin/env python3
"""Small Tkinter editor for text/story.screenplay.

The editor intentionally uses only Python's standard library. The screenplay
file remains the source of truth; this is a friendly editor for the same
line-oriented format used by tools/story_build.dart, not a second story format.
"""

from __future__ import annotations

import argparse
import importlib.util
import queue
import re
import subprocess
import sys
import threading
from dataclasses import dataclass, field
from pathlib import Path
try:
    import tkinter as tk
    from tkinter import messagebox, ttk
except ImportError:  # Allows --help and clear diagnostics on headless builders.
    tk = None  # type: ignore[assignment]
    messagebox = None  # type: ignore[assignment]
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
    "grave", "clipped", "confiding", "rehearsed", "flat",
)
TRANSMISSIONS = (
    "clean", "door", "letterbox", "wireless", "tannoy", "phone", "wall",
)
VOICE_DEFAULTS = {
    "broadcast": ("formal", "wireless"),
    "child": ("casual", "letterbox"),
}


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
        "# THE QUARANTINE — master screenplay",
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
        self.event_window: tk.Toplevel | None = None
        self.dirty = False

        self.title("The Quarantine — Screenplay Editor")
        self.geometry("1180x760")
        self.minsize(900, 600)
        self.protocol("WM_DELETE_WINDOW", self.close)
        self.bind("<Control-s>", lambda _event: self.save())
        self._make_widgets()
        self._load_scene(0)

    def _make_widgets(self) -> None:
        self.columnconfigure(1, weight=1)
        self.columnconfigure(2, weight=1)
        self.rowconfigure(0, weight=1)

        left = ttk.Frame(self, padding=8)
        left.grid(row=0, column=0, sticky="ns")
        ttk.Label(left, text="Scenes").pack(anchor="w")
        self.scene_list = tk.Listbox(left, width=28, exportselection=False)
        self.scene_list.pack(fill="y", expand=True)
        for scene in self.script.scenes:
            self.scene_list.insert("end", self._scene_choice_label(scene))
        self.scene_list.bind("<<ListboxSelect>>", self._scene_selected)

        center = ttk.Frame(self, padding=8)
        center.grid(row=0, column=1, sticky="nsew")
        center.columnconfigure(0, weight=1)
        center.rowconfigure(4, weight=1)
        center.rowconfigure(8, weight=1)
        ttk.Label(center, text="Scene").grid(row=0, column=0, sticky="w")
        self.title_var = tk.StringVar()
        ttk.Entry(center, textvariable=self.title_var).grid(row=1, column=0, sticky="ew")
        ttk.Label(center, text="Story moments").grid(
            row=2, column=0, sticky="w", pady=(12, 2)
        )
        self.beat_list = tk.Listbox(center, height=7, exportselection=False)
        self.beat_list.grid(row=4, column=0, sticky="nsew")
        self.beat_list.bind("<<ListboxSelect>>", self._beat_selected)
        beat_form = ttk.LabelFrame(center, text="Selected moment", padding=6)
        beat_form.grid(row=5, column=0, sticky="ew", pady=6)
        beat_form.columnconfigure(1, weight=1)
        self.beat_kind = ttk.Combobox(beat_form, values=("action", "dialogue"), state="readonly", width=12)
        self.beat_kind.grid(row=0, column=1, sticky="w")
        ttk.Label(beat_form, text="Type").grid(row=0, column=0, sticky="w")
        self.beat_speaker_var = tk.StringVar()
        ttk.Label(beat_form, text="Speaker").grid(row=1, column=0, sticky="w")
        ttk.Entry(beat_form, textvariable=self.beat_speaker_var).grid(row=1, column=1, sticky="ew")
        self.beat_text = tk.Text(beat_form, height=5, wrap="word", undo=True)
        self.beat_text.grid(row=2, column=0, columnspan=2, sticky="ew", pady=4)
        voice_frame = ttk.LabelFrame(beat_form, text="Voice this line", padding=4)
        voice_frame.grid(row=3, column=0, columnspan=2, sticky="ew", pady=(2, 4))
        voice_frame.columnconfigure(1, weight=1)
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
            voice_frame, values=("auto", "edge", "gtts"), state="readonly"
        )
        self.tts_backend.grid(row=3, column=1, sticky="ew")
        ttk.Label(voice_frame, text="Variation").grid(row=4, column=0, sticky="w")
        self.tts_cue = ttk.Combobox(
            voice_frame, values=("none",) + CUES, state="readonly"
        )
        self.tts_cue.grid(row=4, column=1, sticky="ew")
        self.tts_button = ttk.Button(
            voice_frame, text="Generate voice clip", command=self._generate_voice
        )
        self.tts_button.grid(row=5, column=0, columnspan=2, sticky="e", pady=(4, 0))
        self.tts_status = ttk.Label(voice_frame, text="Choose a line, then make a clip.")
        self.tts_status.grid(row=6, column=0, columnspan=2, sticky="w")
        beat_buttons = ttk.Frame(beat_form)
        beat_buttons.grid(row=4, column=0, columnspan=2, sticky="e")
        ttk.Button(beat_buttons, text="New moment", command=self._new_beat).pack(side="left", padx=2)
        ttk.Button(beat_buttons, text="Save moment", command=self._save_beat).pack(side="left", padx=2)
        ttk.Button(beat_buttons, text="Remove moment", command=self._remove_beat).pack(side="left", padx=2)
        ttk.Button(center, text="Save scene title", command=self._apply_scene).grid(
            row=6, column=0, sticky="e", pady=2
        )

        right = ttk.Frame(self, padding=8)
        right.grid(row=0, column=2, sticky="nsew")
        right.columnconfigure(0, weight=1)
        right.rowconfigure(4, weight=1)
        ttk.Label(right, text="Choices in this scene").grid(row=0, column=0, sticky="w")
        self.branch_list = ttk.Combobox(right, state="readonly")
        self.branch_list.grid(row=1, column=0, sticky="ew")
        self.branch_list.bind("<<ComboboxSelected>>", self._branch_selected)
        self.prompt_var = tk.StringVar()
        prompt_frame = ttk.LabelFrame(right, text="Question for the player", padding=6)
        prompt_frame.grid(row=2, column=0, sticky="ew", pady=6)
        prompt_frame.columnconfigure(0, weight=1)
        ttk.Entry(prompt_frame, textvariable=self.prompt_var).grid(row=0, column=0, sticky="ew")
        self.option_list = tk.Listbox(right, height=8, exportselection=False)
        self.option_list.grid(row=4, column=0, sticky="nsew")
        self.option_list.bind("<<ListboxSelect>>", self._option_selected)
        option_frame = ttk.LabelFrame(right, text="Selected answer", padding=6)
        option_frame.grid(row=5, column=0, sticky="ew", pady=6)
        option_frame.columnconfigure(1, weight=1)
        self.option_id_var = tk.StringVar()
        self.option_label_var = tk.StringVar()
        ttk.Label(option_frame, text="Answer").grid(row=0, column=0, sticky="w")
        ttk.Entry(option_frame, textvariable=self.option_label_var).grid(row=0, column=1, sticky="ew")
        ttk.Label(option_frame, text="Continue at").grid(row=1, column=0, sticky="w")
        self.next_scene_box = ttk.Combobox(option_frame, state="readonly")
        self.next_scene_box.grid(row=1, column=1, sticky="ew")
        self.next_scene_box["values"] = ["END"] + [self._scene_choice_label(scene) for scene in self.script.scenes]
        option_buttons = ttk.Frame(option_frame)
        option_buttons.grid(row=2, column=0, columnspan=2, sticky="e", pady=(4, 0))
        ttk.Button(option_buttons, text="New answer", command=self._new_option).pack(side="left", padx=2)
        ttk.Button(option_buttons, text="Save answer", command=self._save_option).pack(side="left", padx=2)
        ttk.Button(option_buttons, text="Remove answer", command=self._remove_option).pack(side="left", padx=2)
        ttk.Button(right, text="What am I editing?", command=self._help).grid(row=6, column=0, sticky="e")

        bottom = ttk.Frame(self, padding=(8, 0, 8, 8))
        bottom.grid(row=1, column=0, columnspan=3, sticky="ew")
        bottom.columnconfigure(0, weight=1)
        self.status = ttk.Label(bottom, text=str(self.path))
        self.status.grid(row=0, column=0, sticky="w")
        ttk.Button(bottom, text="Preview scene", command=self._preview).grid(row=0, column=1, padx=4)
        ttk.Button(bottom, text="Game events", command=self._open_orchestrator).grid(row=0, column=2, padx=4)
        ttk.Button(bottom, text="Save + validate", command=self.save).grid(row=0, column=3, padx=4)
        ttk.Button(bottom, text="Restore last save", command=self._restore_backup).grid(row=0, column=4, padx=4)
        ttk.Button(bottom, text="Quit", command=self.close).grid(row=0, column=5)

    def _scene_selected(self, _event: object = None) -> None:
        selection = self.scene_list.curselection()
        if selection and selection[0] != self.scene_index:
            self._load_scene(selection[0])

    def _mark_dirty(self) -> None:
        self.dirty = True
        self.title(f"The Quarantine — Screenplay Editor • unsaved changes")

    def _load_scene(self, index: int) -> None:
        if not self.script.scenes or index < 0 or index >= len(self.script.scenes):
            return
        self._apply_branch()
        self._apply_scene()
        self.scene_index = index
        self.scene = self.script.scenes[index]
        self.scene_list.selection_clear(0, "end")
        self.scene_list.selection_set(index)
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
            f"Choice {number + 1} — {branch.prompt[:52]}"
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
        return f"{beat.kind.title()} — {who}{beat.text[:70]}"

    def _beat_selected(self, _event: object = None) -> None:
        selection = self.beat_list.curselection()
        self._load_beat(selection[0] if selection else None)

    def _load_beat(self, index: int | None) -> None:
        self.beat_kind.set("")
        self.beat_speaker_var.set("")
        self.beat_text.delete("1.0", "end")
        if self.scene is None or index is None or index >= len(self.scene.beats):
            return
        beat = self.scene.beats[index]
        self.beat_kind.set(beat.kind)
        self.beat_speaker_var.set(beat.speaker or "")
        self.beat_text.insert("1.0", beat.text)
        self._set_tts_defaults(beat.speaker)

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

    def _set_tts_defaults(self, speaker: str | None = None) -> None:
        choices = self._speaker_choices()
        self.tts_speaker["values"] = choices
        preferred = speaker if speaker in choices else choices[0]
        self.tts_speaker.set(preferred)
        tone, transmission = VOICE_DEFAULTS.get(
            preferred, ("formal" if preferred == "broadcast" else "neutral", "door")
        )
        self.tts_tone.set(tone)
        self.tts_set.set(transmission)
        self.tts_backend.set("auto")
        self.tts_cue.set("none")

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
        safe_scene = re.sub(r"[^a-z0-9-]+", "-", self.scene.scene_id.lower()).strip("-")
        safe_speaker = re.sub(r"[^a-z0-9-]+", "-", speaker.lower()).strip("-")
        tone = re.sub(r"[^a-z0-9-]+", "-", self.tts_tone.get().lower()).strip("-")
        transmission = re.sub(
            r"[^a-z0-9-]+", "-", self.tts_set.get().lower()
        ).strip("-")
        cue = self.tts_cue.get().strip().lower()
        variation = "-".join(
            part for part in (tone, transmission, cue if cue != "none" else "") if part
        )
        return f"screenplay-{safe_scene}-line-{number:02d}-{safe_speaker}-{variation}"

    def _generate_voice(self) -> None:
        text = self.beat_text.get("1.0", "end").strip()
        speaker = self.tts_speaker.get().strip()
        if not text:
            messagebox.showerror("No line selected", "Write or select a line before generating its voice.")
            return
        if not speaker:
            messagebox.showerror("Choose a speaker", "Choose Visitor or Broadcast before generating a clip.")
            return
        if self.tts_button is None:
            return
        command = [
            sys.executable,
            "scripts/tts.py",
            "--line", text,
            "--name", self._voice_name(),
            "--speaker", speaker,
            "--tone", self.tts_tone.get() or "neutral",
            "--set", self.tts_set.get() or "clean",
            "--backend", self.tts_backend.get() or "auto",
        ]
        cue = self.tts_cue.get().strip()
        if cue and cue != "none":
            command.extend(("--cue", cue))
        self.tts_button.configure(state="disabled")
        self.tts_status["text"] = "Making the clip… the editor is still usable."
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
        if self.tts_button is not None:
            self.tts_button.configure(state="normal")
        code, output = result
        if code == 0:
            self.tts_status["text"] = "Voice clip ready in web/res/vo and registered in the manifest."
        else:
            self.tts_status["text"] = "Voice clip was not made."
            messagebox.showerror(
                "Voice generation stopped",
                "The line was not changed. Check the details below:\n\n" + output[-3000:],
            )

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
                f"Choice {number + 1} — {candidate.prompt[:52]}"
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
        return f"{option.label[:58]}  →  {option.next_scene}"

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
        return f"Day {scene.day:02d} — {scene.title}"

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
        preview.title(f"Preview — Day {self.scene.day:02d}: {self.scene.title}")
        preview.geometry("620x560")
        preview.columnconfigure(0, weight=1)
        preview.rowconfigure(0, weight=1)
        text = tk.Text(preview, wrap="word", padx=18, pady=18)
        text.grid(row=0, column=0, sticky="nsew")
        text.insert("end", f"DAY {self.scene.day}\n{self.scene.title}\n\n")
        for beat in self.scene.beats:
            if beat.speaker:
                text.insert("end", f"{beat.speaker.upper()}\n{beat.text}\n\n")
            else:
                text.insert("end", f"[{beat.text}]\n\n")
        for branch in self.scene.branches:
            text.insert("end", f"{branch.prompt}\n")
            for option in branch.options:
                text.insert("end", f"  • {option.label}\n")
            text.insert("end", "\n")
        text.configure(state="disabled")

    def _open_orchestrator(self) -> None:
        if self.event_window is not None and self.event_window.winfo_exists():
            self.event_window.lift()
            return
        window = tk.Toplevel(self)
        self.event_window = window
        window.title("The Quarantine — Game events")
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
        filter_kind = ttk.Combobox(
            left,
            values=("All kinds", "broadcast", "visitor", "choice", "aftermath", "ending"),
            state="readonly",
            width=32,
        )
        filter_kind.set("All kinds")
        filter_kind.pack(fill="x", pady=3)
        ttk.Label(left, text="Day timeline · click to place a moment").pack(
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
        label = tk.StringVar()
        source = ttk.Combobox(right, state="readonly")
        speaker = ttk.Combobox(right, state="readonly")
        cue = ttk.Combobox(right, values=("none",) + CUES, state="readonly")
        next_scene = ttk.Combobox(right, state="readonly")
        effects = tk.Text(right, height=6, wrap="word")

        fields = (
            ("Kind", event_kind),
            ("Day", day),
            ("Hour (0–23)", hour),
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

        def nudge_hour(amount: float) -> None:
            try:
                value = min(23.5, max(0.0, float(hour.get()) + amount))
            except ValueError:
                value = 12.0
            hour.set(f"{value:g}")

        time_buttons = ttk.Frame(right)
        time_buttons.grid(row=2, column=2, padx=(5, 0))
        ttk.Button(time_buttons, text="−30m", width=5, command=lambda: nudge_hour(-0.5)).pack(side="left")
        ttk.Button(time_buttons, text="+30m", width=5, command=lambda: nudge_hour(0.5)).pack(side="left", padx=(3, 0))
        ttk.Label(right, text="Story changes (one key=value per line; optional)").grid(
            row=9, column=0, sticky="nw", pady=3
        )
        effects.grid(row=9, column=1, sticky="nsew", pady=3)
        ttk.Label(
            right,
            text="Examples: visitor.present=true   ·   alarm.level=high",
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
                y = top + (event.hour / 24.0) * (bottom - top)
                color = {
                    "broadcast": "#4b75a8",
                    "visitor": "#9b5c45",
                    "choice": "#6d62a8",
                    "aftermath": "#66845a",
                    "ending": "#9a7a36",
                }.get(event.kind, "#666666")
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
                    y,
                    text=f"{event.hour:04.1f}  {event.label[:28]}",
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
            if close is not None and abs(close.hour - placed_hour) <= 0.5:
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
            for event in ordered_events():
                event_list.insert("end", self._event_label(event))
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
                    float(hour.get()),
                    label.get().strip(),
                    source.get().strip(),
                    speaker.get().strip(),
                    "" if cue.get() == "none" else cue.get().strip(),
                    [line.strip() for line in effects.get("1.0", "end").splitlines() if line.strip()],
                    self._scene_id_from_label(next_scene.get()),
                )
                if event.day < 1 or event.day > 21 or event.hour < 0 or event.hour >= 24:
                    raise ValueError("Day must be 1–21 and hour must be from 0 to under 24.")
                if not event.label:
                    raise ValueError("Give the event a short description.")
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

        def duplicate_event() -> None:
            original = selected_event()
            if original is None:
                return
            event_id.set("")
            label.set(f"Copy of {original.label}")
            load(None)
            day.set(str(original.day))
            hour.set(str(original.hour))
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
            if not messagebox.askyesno("Remove event?", f"Remove ‘{event.label}’ from the game schedule?", parent=window):
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

    @staticmethod
    def _event_label(event: Event) -> str:
        return f"Day {event.day:02d} · {event.hour:04.1f} · {event.kind.title()} · {event.label[:42]}"

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
        self.scene_list.delete(0, "end")
        for scene in self.script.scenes:
            self.scene_list.insert("end", self._scene_choice_label(scene))
        self.next_scene_box["values"] = ["END"] + [
            self._scene_choice_label(scene) for scene in self.script.scenes
        ]
        self._load_scene(0)
        self.dirty = False
        self.title("The Quarantine — Screenplay Editor")
        self.status["text"] = f"Restored. The replaced copy is kept at {before_restore.name}."

    def _help(self) -> None:
        messagebox.showinfo(
            "A gentle guide",
            "Scene: one day in the story.\n\n"
            "Story moments: things the player sees or hears. Use Action for description and Dialogue for spoken words.\n\n"
            "Choices: the question shown to the player. Each answer leads to another day, or END for an ending.\n\n"
            "The filing label is hidden; the editor creates one for you.\n\n"
            "Your old screenplay is backed up as story.screenplay.bak whenever you save.",
        )

    def save(self) -> None:
        self._apply_scene()
        self._apply_branch()
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
        self.title("The Quarantine — Screenplay Editor")
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
