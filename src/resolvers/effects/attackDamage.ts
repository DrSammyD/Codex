import { Base } from './../../models/base';
import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Resolver } from '../resolver';
import { selectTarget } from '../decorators/selectTarget';
import { selectSource } from '../decorators/selectSource';

interface Options { source: Card, sourceBase: Base, target: Card, targetBase: Base }

export class AttackDamage extends Resolver<Options>{
  @selectSource()
  @selectTarget()
  public resolve(options: Promise<Options>) {
    return options;
  }
}
