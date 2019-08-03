import { Entity } from './board';
import { Rune } from './rune';
import { Template } from './template';
import { Limit } from './limit';
import { Effect } from './effect';
import { Cost } from './cost';
import { Base } from './base';
import { State } from './state';
import { Attribute } from './attribute';
export interface Card extends Entity {
  guid: AAGUID;
  template: Template;
  owner: Base;
  state: State;
  damage: number;
  armor: number;
  attached: Card[];
}
