import { Channels } from './../resolvers/channels';
import { Effect } from './effect';
import { Attribute } from './attribute';
import { Board, Type } from './board';
import { Effects } from '../resolvers/effects';
import { Trigger } from './trigger';
import { Limit } from './limit';
export interface Effect {
  key: keyof Effects;
  channel: keyof Channels;
}
export interface Persistent extends Effect, Passive { }
export interface Passive {
  selectors: Selector[];
  start: Trigger;
  end: Trigger;
}
export interface Selector {
  owner: Type;
  attributes: Attribute[];
}
