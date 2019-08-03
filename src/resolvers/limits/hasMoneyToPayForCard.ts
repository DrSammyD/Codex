import { Card } from '../../models/card';
import { Base } from "../../models/base";
import { Resolver } from '../resolver';
import { selectCard } from '../decorators/selectCard';
import { selectBase } from '../decorators/selectBase';
import { Type } from '../../models/board';

interface Options { sourceBase: Base, card: Card };
export class HasMoneyToPayForCard extends Resolver<Options>{
  @selectCard("hand")
  @selectBase(Type.self)
  public resolve(options: Promise<Options>) {
    return options.then(opts => opts.sourceBase.gold >= opts.card.template.cost);
  }
}
