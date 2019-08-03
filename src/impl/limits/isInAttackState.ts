import { Type } from '../../models/board';
import { Limit } from './../../models/limit';
export const isInAttackState: Limit = {
  key: "IsInAttackState",
  channel: ["attack"],
  selectors: [{
    owner: Type.self,
    attributes: null
  }]
}
