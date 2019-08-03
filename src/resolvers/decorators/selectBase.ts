import { Resolver } from "../resolver";
import { Card } from "../../models/card";
import { Channels } from "../channels";
import { Base } from "../../models/base";
import { Type } from "../../models/board";

export = Main;

module Main {
  export function selectBase(type: Type): MethodDecorator {
    return function (
      target: Resolver<{ base: Base }>,
      propertyKey: "resolve",
      descriptor: PropertyDescriptor
    ) {
      const original = target[propertyKey];
      target[propertyKey] = (options: Promise<{ base: Base }>) => {
        return original(options.then(opts => opts));
      };
    };
  }
}
