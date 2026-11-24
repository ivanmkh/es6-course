function isEmpty(value) {
  // null and undefined are empty
  if (value == null) return true;

  // Dates are values, not containers — any Date instance (valid or
  // "Invalid Date") counts as present, so it is never empty.
  if (value instanceof Date) {
    return false;
  }

  // strings and arrays: check length
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  // Map / Set: emptiness is defined by size
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // plain objects: check for own enumerable keys
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  // numbers, booleans, etc. are never "empty"
  return false;
}

console.assert(isEmpty(null) === true);
console.assert(isEmpty(undefined) === true);
console.assert(isEmpty('') === true);
console.assert(isEmpty([]) === true);
console.assert(isEmpty({}) === true);
console.assert(isEmpty(0) === false);
console.assert(isEmpty(false) === false);
console.assert(isEmpty('a') === false);
console.assert(isEmpty([0]) === false);
console.assert(isEmpty({ a: 1 }) === false);
console.assert(isEmpty(new Map()) === true);
console.assert(isEmpty(new Map([[1, 'a']])) === false);