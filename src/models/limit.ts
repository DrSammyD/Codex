import { Channels } from './../resolvers/channels';
import { Effect, Passive, Persistent, Selector } from './effect';
import { Attribute } from './attribute';
import { Type } from './board';
import { Limits } from '../resolvers/limits';

export interface Limit {
  key: keyof Limits;
  channel: (keyof Channels)[];
  selectors: Selector[];
}
export interface Persistent extends Limit, Passive { }
