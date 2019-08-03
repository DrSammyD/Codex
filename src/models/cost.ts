import { Limit } from './limit';
import { Effect } from './effect';
export interface Cost {
  selector: string;
  limits: Limit[];
  effects: Effect[];
}
