import { AttackDamage } from '../../../effects/attackDamage';
import { ReadOnly } from '../../../../types/readonly.d';
import { Template } from '../../../../models/template';
import { Patrol } from '../../../../resolvers/effects/patrol';
export const timelyMessenger: ReadOnly<Template> = {
  cost: 1,
  health: 1,
  attack: 1,
  attributes: ["unit", "tech0", "neutral", "mercenary"],
  actions: [
    {
      ability: false,
      effects: [AttackDamage]
    },
    {
      ability: false,
      effects: [Patrol],
    }
  ]
}
