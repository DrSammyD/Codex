import { Resolver } from "../resolver";
import { Card } from "../../models/card";
import { Channels } from "../channels";
import { Base } from "../../models/base";

export = Main;

module Main {
  export function selectTarget(): MethodDecorator {
    return function (
      target: Resolver<{ target: Card, targetBase: Base }>,
      propertyKey: "resolve",
      descriptor: PropertyDescriptor
    ) {
      const original = target[propertyKey];
      target[propertyKey] = (options: Promise<{ target: Card, targetBase: Base }>) => {
        return original(options.then(opts => opts));
      };
    };
  }
}
