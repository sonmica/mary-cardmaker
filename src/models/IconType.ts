export const IconTypeArray = [
  'acrobatic',
  'attached-shield',
  'back-pain',
  'blade-drag',
  'bolt-spell-cast',
  'claw-slashes',
  'convince',
  'crossed-swords',
  'daggers',
  'despair',
  'divert',
  'egyptian-walk',
  'extra-time',
  'goblin',
  'healing',
  'high-shot',
  'invisible',
  'magnifying-glass',
  'person',
  'player-time',
  'pull',
  'shield-bash',
  'spell-book',
  'sunglasses',
  'surprised',
  'swordwoman',
  'sword-clash',
  'talk',
  'walk',
] as const;
export type IconType = typeof IconTypeArray[number];