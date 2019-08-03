import { Entity } from './board';
import { isInMainPhase } from '../impl/limits/isInMainPhase';
import { hasMoneyToPayForCard } from '../impl/limits/hasMoneyToPayForCard';
import { isInHand } from '../impl/limits/isInHand';
import { isInAttackState } from './../impl/limits/isInAttackState';
import { isInPatrolState } from './../impl/limits/isInPatrolState';
import { Limit } from './limit';
import { Effect } from './effect';
import { Deck } from './deck';
import { Rune } from './rune';
import { Action } from './action';
import { Card } from './card';
import { Spec } from './spec';
import { Addon } from './addon';
import { Specs } from '../impl/specs';

export enum Phase {
  ready = 0,
  upkeep = 1,
  main = 2,
  draw = 3,
  tech = 4,
  await = 5
}

export interface Base extends Entity {
  phase: Phase;
  actions: Action[];
  specs: {[P in keyof Specs]?: Spec }
  workers: number;
  gold: number;
  cardAreas: CardAreas;
}
export interface CardAreas {
  slots: Card[];
  buildings: Card[];
  draw: Card[];
  hand: Card[];
  future: Card[];
  play: Card[];
  discard: Card[];
  trash: Card[];
  patrol: Card[];
}

export function createBase(
  specs: [keyof Specs, keyof Specs, keyof Specs] | [keyof Specs],
  starter: keyof Deck,
  turn: number,
  base: Card): Base {
  const playMat: Base = {
    effects: [],
    limits: [],
    phase: Phase.await,
    actions: [],
    specs: {},
    cardAreas: {
      slots: [],
      buildings: [],
      draw: [],
      hand: [],
      future: [],
      play: [],
      discard: [],
      trash: [],
      patrol: []
    },
    workers: turn > 1 ? 5 : 4/*  number */,
    gold: 0/*  number */
  };
  specs.forEach((spec) => playMat.specs[spec] = Specs[spec]);
  return playMat;
}
