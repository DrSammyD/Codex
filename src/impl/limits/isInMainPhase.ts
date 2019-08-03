import { Attribute } from '../../models/attribute';
import { Type } from '../../models/board';
import { Limit } from './../../models/limit';
export const isInMainPhase: Limit = {
  key: "IsInMainPhase",
  channel: ["playCard", "patrol", "attack"],
  selectors: [{
    attributes: [Attribute.Card],
    owner: Type.self
  }]
}
