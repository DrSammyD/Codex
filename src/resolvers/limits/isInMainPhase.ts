import { State } from './../../models/state';
import { Card } from '../../models/card';
import { Base, Phase } from '../../models/base';
import { Resolver } from '../resolver';
import { selectCard } from '../decorators/selectCard';
import { selectBase } from '../decorators/selectBase';
import { Type } from '../../models/board';

interface Options { base: Base };
export class IsInMainPhase extends Resolver<Options>{
  @selectBase(Type.self)
  public resolve(options: Promise<Options>) {
    return options.then(opts => opts.base.phase === Phase.main);
  }
}
