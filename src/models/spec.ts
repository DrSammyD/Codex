import { Card } from './card';
export = Main;
module Main {
  export interface Spec {
    hero: Card;
    cards: Card[];
    name: string;
  }
}
