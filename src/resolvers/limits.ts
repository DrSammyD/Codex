import { IsInAttackState } from './limits/isInAttackState';
import { IsInPatrolState } from './limits/isInPatrolState';
import { HasMoneyToPayForCard } from "./limits/hasMoneyToPayForCard";
import { IsInHand } from "./limits/isInHand";
import { Resolver, ResolverMap } from './resolver';
import { IsInMainPhase } from './limits/isInMainPhase';

export = Main;
module Main {
  export let Limits = {
    IsInHand: IsInHand,
    IsInPatrolState: IsInPatrolState,
    IsInAttackState: IsInAttackState,
    IsInMainPhase: IsInMainPhase,
    HasMoneyToPayForCard: HasMoneyToPayForCard
  };
  Limits as ResolverMap;
  export type Limits = typeof Limits;
}
