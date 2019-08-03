import { Attribute } from '../../models/attribute';
import { Type } from '../../models/board';
import { Limit } from './../../models/limit';
export const isInPatrolState: Limit = {
  key: "IsInPatrolState",
  channel: ["patrol"],
  selectors: [{
    attributes: [Attribute.Unit],
    owner: Type.self
  }]
}
