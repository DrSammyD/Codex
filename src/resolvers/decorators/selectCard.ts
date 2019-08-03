import { Type } from "../../models/board";
import { Resolver } from "../resolver";
import { Card } from "../../models/card";
import { CardAreas } from "../../models/base";

export = Main;
module Main {
  export function selectCard(area: keyof CardAreas): MethodDecorator {
    return function (
      target: Resolver<{ card: Card }>,
      propertyKey: "resolve",
      descriptor: PropertyDescriptor
    ) {
      const original = target[propertyKey];
      target[propertyKey] = (options: Promise<{ card: Card }>) => {
        return original(options.then(opts => opts));
      };
    };
  }
}
