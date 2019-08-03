import { Base } from './../../models/base';
import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Resolver } from '../resolver';
import { selectTarget } from '../decorators/selectTarget';
import { selectSource } from '../decorators/selectSource';
import { selectCard } from '../decorators/selectCard';
import { selectBase } from '../decorators/selectBase';
import { Type } from '../../models/board';

interface Options { card: Card, base: Base }

export class PlayCard extends Resolver<Options>{
  @selectCard("hand")
  @selectBase(Type.self)
  public resolve(options: Promise<Options>) {
    return options.then(opts => {
      opts.base.cardAreas.play.push(opts.card);
      opts.base.cardAreas.hand = opts.base.cardAreas.hand.filter(card => card != opts.card);
      return opts;
    });
  }
}
