import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Resolver } from '../resolver';
import { selectCard } from '../decorators/selectCard';

interface Options { card: Card };
export class IsInAttackState extends Resolver<Options>{
  @selectCard("play")
  public resolve(options: Promise<Options>) {
    return options.then(opts => !!~[State.Ready].indexOf(opts.card.state));
  }
}
