import { Resolver } from "../resolver";
import { Card } from "../../models/card";
import { Channels } from "../channels";
import { Base } from "../../models/base";

export = Main;

module Main {
  export function selectSource(): MethodDecorator {
    return function (
      target: Resolver<{ source: Card, sourceBase: Base }>,
      propertyKey: "resolve",
      descriptor: PropertyDescriptor
    ) {
      const original = target[propertyKey];
      target[propertyKey] = (options: Promise<{ source: Card, sourceBase: Base }>) => {
        return original(options.then(opts => opts));
      };
    };
  }
}
