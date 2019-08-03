import { Card } from './card';
export enum Type {

}
export interface Addon extends Card {
  addon: Type;
}
