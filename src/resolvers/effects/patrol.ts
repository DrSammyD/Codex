import { Base } from './../../models/base';
import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Resolver } from '../resolver';
import { selectTarget } from '../decorators/selectTarget';
import { selectSource } from '../decorators/selectSource';
import { selectCard } from '../decorators/selectCard';

interface Options { card: Card, target: Card, targetBase: Base }

export class Patrol extends Resolver<Options>{
  @selectCard("patrol")
  @selectTarget()
  public resolve(options: Promise<Options>) {
    return options;
  }
}
