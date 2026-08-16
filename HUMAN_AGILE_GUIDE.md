# THE QUARANTINE — HUMAN AGILE GUIDE

> Status: operational notes for humans
>
> Product authority: `MASTERPLAN.md`
>
> Unity migration authority: `../UNITY_PLAN.md`
>
> Repository rules: `GROUND_RULES.md`

This guide explains how humans can move the project forward in short, reviewable
increments without creating another plan. It owns no product requirements and
no migration decisions. If it disagrees with either authority above, those plans
win and this guide must be corrected.

Use this as a lightweight Scrumban handbook: ordered product and migration
packets provide the backlog; humans pull the smallest ready item, keep work in
progress low, integrate continuously, and review real playable results.

---

## 1. The working agreement

1. Build the game vertically, not one discipline at a time.
2. Keep one obvious owner for every active packet.
3. Prefer a playable, imperfect slice over several disconnected complete
   subsystems.
4. Integrate early. A detached class, prefab, model, or dialogue file is not an
   increment.
5. Keep decisions visible and evidence factual.
6. Treat human visual, audio, accessibility, and play judgment as work—not a
   ceremonial approval at the end.
7. Use minimalistic human-like code: direct names, narrow ownership, no
   speculative framework, and no abstraction without a current need.
8. Stop starting and start finishing. When an item is blocked, resolve or split
   it before opening more work.
9. Do not measure progress by file count, test count, code volume, model count,
   or percentages.
10. Every week should end with a more truthful playable build or a resolved
    high-risk decision.

The shortest useful question is:

> What can a player do in the packaged build at the end of this increment that
> they could not do at the start?

If the answer is “nothing,” the work may still be necessary, but it must name the
risk or dependency it retired.

---

## 2. Sources and repositories

The workspace contains three histories:

| Repository | Path | Owns |
|---|---|---|
| Game | repository root | Dart reference, shared content/assets, Unity project, migration plan |
| Documentation | `tmp/` | product masterplan, this guide, durable operational records |
| Pixeldart | `external/pixeldart/` | renderer submodule; reference only during Unity transition unless explicitly tasked |

Always inspect both relevant worktrees:

```sh
git status --short
git -C tmp status --short
git -C external/pixeldart status --short
```

Do not combine a game/Unity change, documentation decision, and Pixeldart change
in one commit. A packet may need coordinated commits, but each repository keeps a
coherent history and explicit dependency.

Before planning work, read only:

- `MASTERPLAN.md` sections 0, 1, 9, 10, and the relevant product packet;
- `../UNITY_PLAN.md` sections 0–6 and the relevant `MIG-*` packet;
- `GROUND_RULES.md`; and
- files named by the packet.

Do not read every historical document in `tmp/`. Many predate the reconciled
plans and can contain stale implementation assumptions.

---

## 3. Recommended method: one-week Scrumban

Use one-week planning horizons with continuous integration. Do not force the
project into fixed sprint scope when content, art, and engine risks are still
being discovered.

### Board columns

| Column | Plan state | Meaning |
|---|---|---|
| Ready | `OPEN` with dependencies closed | Small enough, inputs known, acceptance test named. |
| Doing | `ACTIVE` | One owner is implementing it now. |
| Review | `ACTIVE` | Implementation is complete; automated/human evidence is being reviewed. |
| Partial | `PARTIAL` | A tested useful subset landed; exact remainder is visible. |
| Blocked | `BLOCKED` | Decision/input/authority is named; no hidden work continues. |
| Done | `CLOSED` | Production-path checks and required human review passed. |
| Removed | `DROPPED` | Human decision records why it left scope. |

The plan file keeps the official state. The physical/digital board is a view,
not a second authority. Update both in the same working session.

### Work-in-progress limits

For a small team:

- Maximum two implementation packets `ACTIVE` across the whole project.
- Maximum one active packet per person.
- Maximum one visible packet waiting for human review.
- Expedite only a broken main build, data loss, rights violation, or work that
  blocks every ready packet.

If the limit is full, help finish, review, test, simplify, document a decision,
or unblock. Do not pull another packet.

### Cadence

| Moment | Timebox | Purpose |
|---|---:|---|
| Weekly replenishment | 30–45 min | Review goals, close stale state, split the next ready work, confirm owners/reviewers. |
| Daily check | 5–10 min async or live | State facts: finished, next, blocker, review needed. No status theater. |
| Midweek integration | 30 min | Run the current packaged path and address integration drift early. |
| Review/demo | 30–60 min | Demonstrate production behavior, inspect evidence, accept/reject human gates. |
| Retrospective | 20–30 min | Choose one process improvement and assign it. |

Cancel a ceremony when it has no decision or inspection to perform. Keep the
cadence; discard the theater.

---

## 4. Human roles

One person may wear several hats, but name the active hat so decision authority
is clear.

### Product owner

- Protects the red thread and ordered outcomes.
- Resolves scope, story meaning, platform, and release questions.
- Accepts or rejects product behavior, not implementation style alone.
- Records decisions in the product masterplan.

### Unity technical owner

- Protects assembly, state-ownership, content-import, save, and build boundaries.
- Selects and pins the Unity editor patch/packages.
- Reviews minimalistic code and prevents framework growth.
- Owns architecture decisions and the packaged build path.

### Content owner

- Protects screenplay/corpus and stable IDs.
- Reviews story event, choice, callback, residue, and text-lock changes.
- Prevents Unity-generated assets from becoming canon.

### Packet owner

- Owns one active packet from ready check through evidence and handoff.
- Coordinates narrow changes across disciplines without expanding scope.
- Keeps the branch/build green and asks early when authority is missing.

### Human experience reviewer

- Reviews visible, audio, accessibility, motion, pacing, or complete-play
  evidence as applicable.
- Uses a real packaged build and named hardware.
- Writes specific approval/rejection notes.
- Is never replaced by an agent or automated screenshot comparison.

### Release owner

- Owns build identity, evidence index, rights/provenance, known issues, and final
  go/no-go coordination.
- Cannot replace the required specialist/human reviews with one signature.

---

## 5. Choosing the next item

Pull work in this order:

1. Broken main build, corrupt shared content, data loss, or rights issue.
2. The first `OPEN` migration packet whose dependencies are `CLOSED`.
3. A blocker preventing that packet.
4. A small defect found in the currently accepted vertical slice.
5. Evidence/review needed to close existing work.

Do not prioritize by excitement, visual impressiveness, or who is currently
free. Renderer effects, full art passes, voice batches, and campaign expansion
remain behind their gates even when someone could start them today.

Use this value test when two ready items compete:

```text
priority = player-loop value + risk retired + dependency unblocked
           - integration uncertainty - review debt
```

Do not turn that expression into a numeric scoring system. It is a discussion
prompt. The ordered plans break ties.

---

## 6. Definition of Ready

A packet is ready only when all boxes are true:

- [ ] Its ID and state exist in the correct plan and ledger.
- [ ] Every dependency is `CLOSED` or explicitly waived by a human decision.
- [ ] One observable outcome is written in player or architecture terms.
- [ ] Inputs and expected write scope are exact.
- [ ] Stable IDs/schema changes are known or explicitly absent.
- [ ] The production integration point is identified.
- [ ] Focused automated checks are named.
- [ ] Packaged-build evidence is named where relevant.
- [ ] A real human reviewer is scheduled for visible/audio/usability work.
- [ ] Required assets, rights, editor version, and hardware are available.
- [ ] The item is small enough for one owner to finish in roughly one to three
      working days.
- [ ] Stop conditions and the likely highest risk are understood.

If one box is false, refine, split, or block the packet. Do not begin and hope
the missing decision appears later.

---

## 7. How to split work vertically

Split by observable behavior, not file layer.

Good slice:

```text
Player approaches the closed front door, receives one focus target, opens it
through the production command path, hears the acoustic transition, saves,
reloads, and sees the same accepted state.
```

Weak horizontal slices:

```text
Create all door DTOs.
Create every door prefab.
Write the entire audio abstraction.
Finish all UI mockups.
```

A small vertical slice may include a DTO, one domain rule, one binding, one
minimal prompt, and one PlayMode test. That is acceptable because it proves the
boundary end to end. Keep ownership narrow by choosing one primary directory
and coordinating only the smallest necessary interface changes.

### Splitting checklist

For each child packet, answer:

1. What single behavior becomes observable?
2. What is the one authoritative state owner?
3. What is the production input and output?
4. What can be represented by a labeled proxy?
5. What evidence closes it independently?
6. What deliberately remains for the next child?

Use stable child IDs and dependencies. Do not change the parent to `CLOSED`
until every acceptance condition is represented by closed children.

### Spikes

A spike answers one risky question and should usually fit within half a day.
It produces:

- a short decision;
- measured evidence or a minimal disposable experiment;
- the rejected alternatives;
- impact on packet scope; and
- no production framework unless the implementation packet accepts it.

Timebox the question, not a vague investigation. Delete disposable spike code
or clearly isolate it outside production.

---

## 8. Daily implementation loop

### Before coding

1. Check all three repository statuses.
2. Pull/update without overwriting unrelated local work.
3. Confirm packet state, owner, dependencies, and reviewer.
4. Run the narrow existing baseline check.
5. Read the production caller and existing tests.
6. Restate the behavior path in one line.

### While coding

1. Add or tighten the smallest meaningful test/fixture.
2. Implement the direct path.
3. Integrate it through the real composition root.
4. Run focused checks frequently.
5. Keep changes scoped; record outside findings instead of folding them in.
6. Ask as soon as story, visual, rights, save, or architecture authority is
   missing.

### Before review

1. Read the diff as a reviewer.
2. Remove scaffolding, unused public API, noisy logs, broad comments, and
   speculative abstractions.
3. Verify no generated or unrelated mass diff appeared.
4. Run the packet checks and applicable shared checks.
5. Produce packaged/capture/audio evidence where required.
6. Update packet and ledger accurately.

### After review

- `APPROVED`: close the packet, integrate, and make the next dependency ready.
- `REJECTED`: set `PARTIAL`, write exact corrections, and retain evidence.
- New unrelated finding: create a candidate backlog entry; do not reopen scope.
- Regression: reopen the owning closed packet with the new evidence.

---

## 9. Definition of Done

Done means all applicable conditions pass:

### Behavior

- [ ] The promised behavior works through production input and composition.
- [ ] Rejected/invalid paths fail clearly and safely.
- [ ] Save/reload and exactly-once behavior are covered where state changes.
- [ ] Stable IDs and schema compatibility are preserved or migrated.

### Code and assets

- [ ] Code follows the Unity plan's minimalistic human-like rule.
- [ ] One obvious state owner exists; no duplicate mutable truth was added.
- [ ] No speculative framework, placeholder API, hidden lookup, or global state
      remains.
- [ ] Tests cover behavior rather than private implementation.
- [ ] Generated outputs are reproducible and owned.
- [ ] Assets have rights/provenance and correct proxy/accepted status.

### Evidence

- [ ] Focused checks pass with exact commands recorded.
- [ ] Applicable shared/build checks pass.
- [ ] Packaged runtime was used where the packet requires it.
- [ ] Visible/audio/accessibility/pacing changes have a named real-human result.
- [ ] Failure artifacts and replay steps exist when anything remains partial.

### Hygiene

- [ ] Packet body and compact ledger agree.
- [ ] Documentation records decisions, not a progress diary.
- [ ] Unrelated work was preserved.
- [ ] Temporary processes, files, captures, and branches are handled explicitly.
- [ ] `Remainder` is `none` before `CLOSED`.

“Code complete,” “works in Editor,” “agent says it looks good,” and “most tests
pass” are not Done.

---

## 10. Review and demonstration

Review the behavior before reviewing every implementation detail:

1. State the packet outcome and build identity.
2. Run the shortest production scenario live.
3. Show negative/failure behavior.
4. Show save/reload if stateful.
5. Inspect captures/audio/hardware evidence when applicable.
6. Review the diff for ownership and minimal code.
7. Decide `APPROVED`, `REJECTED`, or “technical checks pass; human gate pending.”

Keep review notes concrete:

```text
Good: Door state, collider, prompt, and low-pass agree after reload.
Reject: At 1920x1080 the prompt overlaps captions at 150% UI scale.
Required: Move prompt into its reserved lane and recapture default/large UI.
Not in scope: Final door material and handle model.
```

Avoid “looks good,” “polish later,” and requests unrelated to the packet.

### Visual review

Use the exact human-eyes record in the masterplan/Unity plan. Review ordinary
play distance, not only Scene view or free camera. Compare high/safe,
default/accessibility, light/dark, and before/after states required by the
packet. A reviewer can reject mood even when pixel metrics pass.

### Playtest review

Observe without coaching. Record:

- where the player stops or becomes lost;
- what they believe their current goal is;
- what action they expected;
- whether they understand the consequence;
- time spent per beat/day;
- accessibility or discomfort issues; and
- their interpretation of people and events, without correcting it.

Fix comprehension of actions and consequences. Do not force one interpretation
of the central horror.

---

## 11. Bugs and production incidents

### Severity

| Severity | Meaning | Response |
|---|---|---|
| S0 | Data loss, rights/security issue, or unrecoverable save corruption. | Stop normal work; owner and recovery plan immediately. |
| S1 | Main/build broken, required route blocked, boot failure, or campaign cannot continue. | Expedite within WIP; fix or revert before feature work. |
| S2 | Feature incorrect with a safe workaround; visible/audio/accessibility regression. | Add to owning packet or next ready defect slot. |
| S3 | Minor polish or developer-only inconvenience. | Record only if evidence and player impact justify it. |

Bug record:

```text
ID:
Build/commit:
Environment:
Player impact:
Reproduction:
Expected:
Actual:
Evidence:
Owning packet/system:
Severity:
```

Fix the cause in its owning system. Do not add a second state flag, fallback
manager, or scene-specific special case merely to make the symptom disappear.

---

## 12. Decisions and blockers

A blocker must say:

```text
Blocked packet:
Missing decision/input:
Why work cannot safely continue:
Checks/alternatives already tried:
Decision owner:
Needed by:
Safe work that can continue elsewhere:
```

Decisions that affect product intent go in `MASTERPLAN.md`. Unity architecture
decisions go in `unity/Docs/Decisions/` after the project exists. Temporary
working notes do not become authority.

Use an ADR only when at least one is true:

- the choice changes an assembly or state boundary;
- it introduces/removes a package;
- it changes persistence/content compatibility;
- it has a costly reversal;
- two plausible approaches have materially different tradeoffs.

Do not write an ADR for routine class names or obvious implementation details.

---

## 13. Sustainable planning and metrics

Track only signals that help decisions:

- Age of each `ACTIVE`, `PARTIAL`, and `BLOCKED` packet.
- Time from `ACTIVE` to production-path review.
- Number of reopened packets and why.
- Main/build health.
- Human-review queue age.
- Day/act playtest duration and repeated confusion points.
- Escaped save, route, rights, accessibility, or state-ownership defects.

Do not use story points, velocity, lines of code, commits, screenshots, assets,
or test totals as productivity targets. They encourage the wrong game.

At retrospective, choose one improvement only. Examples:

- split packets earlier;
- schedule the human reviewer before work starts;
- reduce import/build feedback time;
- add one production fixture for a repeated regression;
- remove a confusing duplicate owner; or
- improve one error message that repeatedly blocks diagnosis.

Assign an owner and review its effect next week. A list of ten unowned process
ideas is not an improvement.

---

## 14. Meetings and templates

### Weekly replenishment agenda

```text
1. Is main/build healthy?
2. Which packets changed state, and does evidence support it?
3. What is blocked or aging?
4. What is the first dependency-ready packet?
5. Is it small and Ready? If not, split/refine now.
6. Who owns it, and who reviews the human gate?
7. What packaged behavior should exist by next review?
8. What will we deliberately not start?
```

### Daily update

```text
Packet/state:
Finished since last update:
Next observable step:
Blocker/decision:
Review needed:
```

### Review request

```text
Packet:
Outcome:
Build/commit:
Production scenario:
Checks:
Artifacts:
Known limits:
Human questions:
```

### Retrospective

```text
Helped:
Hurt:
One change for next week:
Owner:
How we will know it helped:
```

---

## 15. Suggested first working session

Do not start Unity implementation before this short human session:

1. Read the product red thread aloud and confirm it still describes the game.
2. Assign the product, Unity technical, content, and experience-review hats.
3. Review `MIG-00` and fill its missing human decisions.
4. Confirm the Unity 6.3 LTS patch-selection process and available Windows build
   environment.
5. Decide whether public Dart saves require cross-engine import.
6. Confirm when Dart feature freeze occurs and what emergency fixes remain
   allowed afterward.
7. Make `MIG-00` Ready, assign one owner, and schedule its review.
8. Leave every later packet `OPEN`.

The outcome is not code. It is a small, unambiguous transition charter that lets
the first implementation packet begin without guessing.

---

## 16. Weekly health check

At the end of each week, answer yes or no:

- Did a packaged player behavior improve or a major risk close?
- Is WIP within the limit?
- Does every active/partial/blocked item have one owner and exact next action?
- Are product and Unity plan states truthful?
- Did humans review every visible/audio/usability change that claims acceptance?
- Is the code becoming simpler or at least not more abstract?
- Are shared content and stable IDs still authoritative?
- Can a clean environment reproduce the current evidence?
- Is the next ready packet obvious?
- Did we avoid starting gated art, voice, effects, or campaign work early?

If three or more answers are “no,” do not increase capacity or start more work.
Use the next replenishment session to reduce WIP, repair the build/board, and
restore one clear path to Done.
