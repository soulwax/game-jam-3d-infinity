import 'package:web/web.dart' as web;





abstract class HudElement<T> {
  final web.Element el;
  HudElement(this.el);
  void update(T state);
}
