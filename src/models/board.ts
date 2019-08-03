import { isInMainPhase } from '../impl/limits/isInMainPhase';
import { hasMoneyToPayForCard } from '../impl/limits/hasMoneyToPayForCard';
import { isInHand } from '../impl/limits/isInHand';
import { isInPatrolState } from '../impl/limits/isInPatrolState';
import { isInAttackState } from '../impl/limits/isInAttackState';
import { Effect } from './effect';
import { Limit } from "./limit";
import { Base } from './base';
import { Card } from './card';

export enum Type {
  self = 0,
  friendly = 1,
  opponent = 2
}
export interface Entity {
  effects: {
    source: Card;
    effect: Effect;
  }[];
  limits: {
    source: Card;
    limit: Limit;
  }[];
}
export interface Board extends Entity {
  teams: Base[][]
}

export function createBoard(players: number, teams: boolean): Board {
  return {
    effects: [],
    limits: [{
      source: null,
      limit: isInAttackState
    }, {
      source: null,
      limit: isInPatrolState
    }, {
      source: null,
      limit: isInHand
    }, {
      source: null,
      limit: hasMoneyToPayForCard
    }, {
      source: null,
      limit: isInMainPhase
    }],
    teams: []
  }
}
