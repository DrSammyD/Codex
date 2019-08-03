import { Card } from './card';

export = Main;
module Main {
  export interface Deck {
    cards: Card[];
  }
  export module Decks {
    export const Neutral = null as Deck;
    export const Green = null as Deck;
    export const Red = null as Deck;
    export const Blue = null as Deck;
    export const Black = null as Deck;
    export const White = null as Deck;
    export const Purple = null as Deck;
  }
  export type Specs = typeof Decks;
}
