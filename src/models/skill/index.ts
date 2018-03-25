import { Skill, SkillID } from './types';

export default Skill;

const allSkills: Skill[] = [
  {
    id:        SkillID.Overall,
    name:      'Overall',
    primary:   '#ffffff',
    secondary: '#eeeeee'
  },
  {
    id:        SkillID.Attack,
    name:      'Attack',
    primary:   '#791902',
    secondary: '#e7e226'
  },
  {
    id:        SkillID.Defence,
    name:      'Defence',
    primary:   '#667dc9',
    secondary: '#f7edeb'
  },
  {
    id:        SkillID.Strength,
    name:      'Strength',
    primary:   '#154f2d',
    secondary: '#c31600'
  },
  {
    id:        SkillID.Hitpoints,
    name:      'Hitpoints',
    primary:   '#cacdca',
    secondary: '#ca0909'
  },
  {
    id:        SkillID.Ranged,
    name:      'Ranged',
    primary:   '#4d640b',
    secondary: '#de5600'
  },
  {
    id:        SkillID.Prayer,
    name:      'Prayer',
    primary:   '#dbd6d0',
    secondary: '#f1d00e'
  },
  {
    id:        SkillID.Magic,
    name:      'Magic',
    primary:   '#c2c4c7',
    secondary: '#1e3aa9'
  },
  {
    id:        SkillID.Cooking,
    name:      'Cooking',
    primary:   '#581b6f',
    secondary: '#aa170b'
  },
  {
    id:        SkillID.Woodcutting,
    name:      'Woodcutting',
    primary:   '#7e521f',
    secondary: '#0b4600'
  },
  {
    id:        SkillID.Fletching,
    name:      'Fletching',
    primary:   '#043d41',
    secondary: '#dcd80d'
  },
  {
    id:        SkillID.Fishing,
    name:      'Fishing',
    primary:   '#287c8e',
    secondary: '#f7c922'
  },
  {
    id:        SkillID.Firemaking,
    name:      'Firemaking',
    primary:   '#e35d00',
    secondary: '#e2d100'
  },
  {
    id:        SkillID.Crafting,
    name:      'Crafting',
    primary:   '#855633',
    secondary: '#c95200'
  },
  {
    id:        SkillID.Smithing,
    name:      'Smithing',
    primary:   '#434233',
    secondary: '#f1b919'
  },
  {
    id:        SkillID.Mining,
    name:      'Mining',
    primary:   '#23231a',
    secondary: '#156298'
  },
  {
    id:        SkillID.Herblore,
    name:      'Herblore',
    primary:   '#0b7211',
    secondary: '#fef903'
  },
  {
    id:        SkillID.Agility,
    name:      'Agility',
    primary:   '#2a2c91',
    secondary: '#9a0707'
  },
  {
    id:        SkillID.Thieving,
    name:      'Thieving',
    primary:   '#784165',
    secondary: '#0d0d0c'
  },
  {
    id:        SkillID.Slayer,
    name:      'Slayer',
    primary:   '#2b2828',
    secondary: '#7c1419'
  },
  {
    id:        SkillID.Farming,
    name:      'Farming',
    primary:   '#275f28',
    secondary: '#72dc5f'
  },
  {
    id:        SkillID.Runecraft,
    name:      'Runecraft',
    primary:   '#cfd1ce',
    secondary: '#ebaa00'
  },
  {
    id:        SkillID.Hunter,
    name:      'Hunter',
    primary:   '#706741',
    secondary: '#311f03'
  },
  {
    id:        SkillID.Construction,
    name:      'Construction',
    primary:   '#d3c4b7',
    secondary: '#f8d600'
  }
];

/* skills in the order that they appear in OSRS */
const orderedSkills = [
  allSkills[SkillID.Attack],
  allSkills[SkillID.Hitpoints],
  allSkills[SkillID.Mining],
  allSkills[SkillID.Strength],
  allSkills[SkillID.Agility],
  allSkills[SkillID.Smithing],
  allSkills[SkillID.Defence],
  allSkills[SkillID.Herblore],
  allSkills[SkillID.Fishing],
  allSkills[SkillID.Ranged],
  allSkills[SkillID.Thieving],
  allSkills[SkillID.Cooking],
  allSkills[SkillID.Prayer],
  allSkills[SkillID.Crafting],
  allSkills[SkillID.Firemaking],
  allSkills[SkillID.Magic],
  allSkills[SkillID.Fletching],
  allSkills[SkillID.Woodcutting],
  allSkills[SkillID.Runecraft],
  allSkills[SkillID.Slayer],
  allSkills[SkillID.Farming],
  allSkills[SkillID.Construction],
  allSkills[SkillID.Hunter]
];

export const Skills = {
  overall:      allSkills[SkillID.Overall],
  attack:       allSkills[SkillID.Attack],
  defence:      allSkills[SkillID.Defence],
  strength:     allSkills[SkillID.Strength],
  hitpoints:    allSkills[SkillID.Hitpoints],
  ranged:       allSkills[SkillID.Ranged],
  prayer:       allSkills[SkillID.Prayer],
  magic:        allSkills[SkillID.Magic],
  cooking:      allSkills[SkillID.Cooking],
  woodcutting:  allSkills[SkillID.Woodcutting],
  fletching:    allSkills[SkillID.Fletching],
  fishing:      allSkills[SkillID.Fishing],
  firemaking:   allSkills[SkillID.Firemaking],
  crafting:     allSkills[SkillID.Crafting],
  smithing:     allSkills[SkillID.Smithing],
  mining:       allSkills[SkillID.Mining],
  herblore:     allSkills[SkillID.Herblore],
  agility:      allSkills[SkillID.Agility],
  thieving:     allSkills[SkillID.Thieving],
  slayer:       allSkills[SkillID.Slayer],
  farming:      allSkills[SkillID.Farming],
  runecraft:    allSkills[SkillID.Runecraft],
  hunter:       allSkills[SkillID.Hunter],
  construction: allSkills[SkillID.Construction],
  all:          allSkills,
  ordered:      orderedSkills
};
