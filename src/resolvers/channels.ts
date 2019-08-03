import { Limit } from '../models/limit';
export = Main;
module Main {
  export interface Channels {
    patrol: {
      limit: {},
      effect: {}
    },
    attack: {
      limit: {},
      effect: {}
    },
    playCard: {
      limit: {},
      effect: {}
    }
  };
}
