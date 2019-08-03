import { Trigger } from './trigger';
import { Limit } from './limit';
import { Effect } from './effect';
import { Cost } from './cost';
export interface Action {
  ability: boolean;
  limits: Limit[];
  costs: Cost[];
  triggers: Trigger[];
  effects: Effect[];
}
