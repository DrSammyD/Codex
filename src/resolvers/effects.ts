import { AttackDamage } from './effects/attackDamage';
import { Resolver, ResolverMap } from './resolver';
import { Patrol } from './effects/patrol';

export = Main;
module Main {
  export let Effects = {
    AttackDamage: AttackDamage,
    Patrol: Patrol
  };
  Effects as ResolverMap;
  export type Effects = typeof Effects;
}
