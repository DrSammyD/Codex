import { Attribute } from '../../models/attribute';
import { Type } from '../../models/board';
import { Limit } from './../../models/limit';
export const hasMoneyToPayForCard: Limit = {
  key: "HasMoneyToPayForCard",
  channel: ["playCard"],
  selectors: [{
    attributes: [Attribute.Card],
    owner: Type.self
  }]
}
