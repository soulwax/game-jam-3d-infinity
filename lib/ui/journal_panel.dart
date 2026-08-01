import 'dart:js_interop';

import 'package:web/web.dart' as web;

import '../config.dart';
import '../journal/entry.dart';
import '../journal/journal.dart';
import '../sim/interaction.dart';
import '../sim/time.dart';
import 'panel.dart';

class JournalPanel extends Panel {
  final Journal journal;
  final GameTime time;
  final InteractionEngine interactionEngine;
  final void Function()? onOpenCost;

  late final web.HTMLElement _leftPage;
  late final web.HTMLElement _rightPage;
  late final web.HTMLElement _rightDayLabel;
  late final web.HTMLElement _tapeFill;
  late final web.HTMLElement _entryPicker;
  late final web.HTMLElement _resultBox;

  web.HTMLElement? _selectedBtn;
  int? selectedOrdinal;
  int _rightDay = 1;

  JournalPanel(
    web.Document document,
    this.journal,
    this.time,
    this.interactionEngine, {
    this.onOpenCost,
  }) : super(document) {
    root.appendChild(buildElement(document, 'div', cls: 'journal-title', text: 'The Journal'));

    final pages = buildElement(document, 'div', cls: 'journal-pages');
    _leftPage = buildElement(document, 'div', cls: 'page page-left');
    _rightPage = buildElement(document, 'div', cls: 'page page-right');
    pages.appendChild(_leftPage);
    pages.appendChild(_rightPage);
    root.appendChild(pages);

    root.appendChild(_buildTurnControls());
    root.appendChild(_buildTapeRoll());
    root.appendChild(_buildConsult());

    final html = document.documentElement;
    if (html is web.HTMLElement) {
      html.style.setProperty('--shake-max-deg', '${journalJitterMaxDeg}deg');
      html.style.setProperty('--shake-max-px', '${journalJitterMaxPx}px');
    }
  }

  @override
  void open() {
    super.open();
    onOpenCost?.call();
    final maxDay = time.dayNumber - 1 < 1 ? 1 : time.dayNumber - 1;
    _rightDay = _clampDay(_rightDay, maxDay);
    _refreshPicker();
    _renderPages();
  }

  web.HTMLElement _buildTurnControls() {
    final row = buildElement(document, 'div', cls: 'page-turn');
    final prev = buildElement(document, 'button', cls: 'turn-prev', text: '‹ earlier');
    prev.setAttribute('type', 'button');
    prev.addEventListener('click', ((web.Event _) => _turn(-1)).toJS);
    final next = buildElement(document, 'button', cls: 'turn-next', text: 'later ›');
    next.setAttribute('type', 'button');
    next.addEventListener('click', ((web.Event _) => _turn(1)).toJS);
    _rightDayLabel = buildElement(document, 'span', cls: 'right-day-label');
    row.appendChild(prev);
    row.appendChild(_rightDayLabel);
    row.appendChild(next);
    return row;
  }

  void _turn(int delta) {
    final maxDay = time.dayNumber - 1 < 1 ? 1 : time.dayNumber - 1;
    _rightDay = _clampDay(_rightDay + delta, maxDay);
    _renderPages();
  }

  int _clampDay(int day, int maxDay) {
    if (day < 1) return 1;
    if (day > maxDay) return maxDay;
    return day;
  }

  web.HTMLElement _buildTapeRoll() {
    final wrap = buildElement(document, 'div', cls: 'tape-roll');
    wrap.style.setProperty('width', '${tapeRollWidthRem}rem');
    _tapeFill = buildElement(document, 'div', cls: 'tape-fill');
    wrap.appendChild(_tapeFill);
    return wrap;
  }

  web.HTMLElement _buildConsult() {
    final box = buildElement(document, 'div', cls: 'consult');
    box.appendChild(buildElement(document, 'div', cls: 'consult-label', text: 'Cite an entry'));
    _entryPicker = buildElement(document, 'div', cls: 'entry-picker');
    _resultBox = buildElement(document, 'div', cls: 'consult-result');
    box.appendChild(_entryPicker);
    box.appendChild(_resultBox);
    return box;
  }

  void _refreshPicker() {
    _entryPicker.textContent = '';
    _selectedBtn = null;
    selectedOrdinal = null;
    _resultBox.textContent = '';
    for (final entry in interactionEngine.getSelectableEntries()) {
      final btn = buildElement(document, 'button', cls: 'picker-entry', text: entry.current.toString());
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', ((web.Event _) => _select(entry.ordinal, btn)).toJS);
      _entryPicker.appendChild(btn);
    }
  }

  void _select(int ordinal, web.HTMLElement btn) {
    _selectedBtn?.className = 'picker-entry';
    btn.className = 'picker-entry selected';
    _selectedBtn = btn;
    selectedOrdinal = ordinal;
  }

  void showResult(ConsultationResult result, InteractionType audience) {
    _resultBox.textContent = '';
    if (result.selectedOrdinal == null) return;
    final event = interactionEngine.createHumiliationEvent(result, audience);
    if (event == null) {
      _resultBox.appendChild(buildElement(document, 'div', cls: 'result confirm', text: 'Confirmed.'));
      return;
    }
    final callout = buildElement(document, 'div', cls: 'result humiliation');
    callout.appendChild(buildElement(document, 'div', cls: 'humiliation-audience', text: event.audience.name));
    callout.appendChild(buildElement(document, 'div', cls: 'humiliation-text', text: event.contradictionText));
    _resultBox.appendChild(callout);
  }

  void _renderPages() {
    _renderEntries(_leftPage, [
      for (final e in journal.entries) if (e.day == time.dayNumber) e,
    ]..sort((a, b) => a.ordinal.compareTo(b.ordinal)));

    _rightDayLabel.textContent = 'Day $_rightDay';
    _renderEntries(_rightPage, [
      for (final e in journal.entries) if (e.day == _rightDay) e,
    ]..sort((a, b) => a.ordinal.compareTo(b.ordinal)));

    final ratio = journalLockSupply <= 0
        ? 0.0
        : (journal.locksRemaining / journalLockSupply).clamp(0.0, 1.0);
    _tapeFill.style.setProperty('width', '${(ratio * 100).toStringAsFixed(1)}%');
  }

  void _renderEntries(web.HTMLElement page, List<Entry> entries) {
    page.textContent = '';
    for (final entry in entries) {
      page.appendChild(_entryElement(entry));
    }
  }

  web.HTMLElement _entryElement(Entry entry) {
    final wrap = buildElement(document, 'div', cls: 'entry');
    for (var i = 0; i < entry.revisions.length; i++) {
      final struck = i != entry.revisions.length - 1;
      wrap.appendChild(_lineElement(entry.revisions[i], struck: struck));
    }
    final margin = entry.margin;
    if (margin != null) {
      final m = _lineElement(margin, struck: false);
      m.className = '${m.className} margin';
      wrap.appendChild(m);
    }
    return wrap;
  }

  web.HTMLElement _lineElement(Line line, {required bool struck}) {
    final el = buildElement(
      document,
      'div',
      cls: struck ? 'hand-line struck' : 'hand-line',
      text: line.toString(),
    );
    el.style.setProperty('--shake', line.shakiness.toString());
    return el;
  }
}
