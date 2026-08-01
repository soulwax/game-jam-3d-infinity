import 'math3.dart';

abstract class Particle {
  Vec3 position;
  Vec3 velocity;
  double life;
  Particle(this.position, this.velocity, this.life);
}
