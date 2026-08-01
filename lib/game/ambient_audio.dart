/// Maps an authored ambient channel to a restrained shipped sound cue.
String? ambientSoundForChannel(String channel) => switch (channel) {
  'street' => 'winnow',
  'letterbox' => 'gate',
  _ => null,
};
