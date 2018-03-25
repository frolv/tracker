export enum SkillID {
  Overall,
  Attack,
  Defence,
  Strength,
  Hitpoints,
  Ranged,
  Prayer,
  Magic,
  Cooking,
  Woodcutting,
  Fletching,
  Fishing,
  Firemaking,
  Crafting,
  Smithing,
  Mining,
  Herblore,
  Agility,
  Thieving,
  Slayer,
  Farming,
  Runecraft,
  Hunter,
  Construction
}

export interface Skill {
  id:        number;
  name:      string;
  primary:   string;
  secondary: string;
}