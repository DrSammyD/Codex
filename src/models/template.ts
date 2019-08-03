import { Action } from './action';
import { Limit } from './limit';
import { Effect } from './effect';
import { Cost } from './cost';
import { State } from './state';
import { Attribute } from './attribute';
export interface Template {
  readonly cost?: number;
  readonly health?: number;
  readonly attack?: number;
  readonly attributes: Attribute[];
  readonly actions: Action[];
}
