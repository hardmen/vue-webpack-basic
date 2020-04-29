/* ========= Check variable's type ========== */
import { toString } from './type-conversion';

export function isPrimitive(x: any): boolean {
  return (
    typeof x === 'string' ||
    typeof x === 'number' ||
    typeof x === 'symbol' ||
    typeof x === 'boolean'
  );
}

export function isArray(x: unknown) {
  return Array.isArray(x);
}
// ???
// export function isArray<T>(x: unknown): x is T[] {
//   return Array.isArray(x);
// }

export function isFunction(x: unknown) {
  return typeof x === 'function';
}

export function isObject(x: unknown) {
  return typeof x === 'object' && x !== null;
}

export function isPlainObject(x: unknown) {
  return toString(x) === '[object Object]';
}
