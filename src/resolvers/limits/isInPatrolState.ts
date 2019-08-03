import { Base } from './../../models/base';
import { Type } from './../../models/board';
import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Resolver } from '../resolver';
import { selectCard } from '../decorators/selectCard';
import { selectBase } from '../decorators/selectBase';
export function isInPatrolState(source: Card, target: Card) {
  return !!~[State.Fatigued, State.Ready].indexOf(source.state)
}

interface Options { card: Card };
export class IsInPatrolState extends Resolver<Options>{
  @selectCard("play")
  public resolve(options: Promise<Options>) {
    return options.then(opts => !!~[State.Fatigued, State.Ready].indexOf(opts.card.state));
  }
}
