import { AttackDamage } from './../effects/attackDamage';
import { isInAttackState } from '../limits/isInAttackState';
import { Action } from './../../models/action';
export const Attack: Action = {
  ability: false,
  costs: null,
  triggers: null,
  limits: [],
  effects: [AttackDamage]
}
