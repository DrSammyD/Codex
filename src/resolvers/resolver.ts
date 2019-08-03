export = Main;
module Main {
  export abstract class Resolver<T> {
    public abstract resolve(options: Promise<T>): Promise<T | boolean>
  }
  export interface ResolverMap {
    [key: string]: { new(): Resolver<any> }
  }
}
