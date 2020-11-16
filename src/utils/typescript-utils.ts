export type UnwrapPromise<T> = T extends PromiseLike<infer U> ? U : T;

type Primitive = null | boolean | number | string;

interface JsonMap {
  [member: string]: Primitive | JsonArray | JsonMap;
}
interface JsonArray extends Array<Primitive | JsonArray | JsonMap> {}

export type Json = JsonMap | JsonArray | Primitive;
