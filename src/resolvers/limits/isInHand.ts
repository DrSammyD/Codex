import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Base } from "../../models/base";
import { selectBase } from '../decorators/selectBase';
import { Type } from '../../models/board';
import { selectCard } from '../decorators/selectCard';
import { Resolver } from '../resolver';

interface Options { card: Card, base: Base };
export class IsInHand extends Resolver<Options>{
  @selectCard("hand")
  @selectBase(Type.self)
  public resolve(options: Promise<Options>) {
    return options.then(opts => !!~opts.base.cardAreas.hand.indexOf(opts.card));
  }
}
