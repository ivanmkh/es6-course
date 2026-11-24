// ---- == vs === ----
console.log(1 === '1');          // false
console.log(1 == '1');           // true
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(null == 0);          // false
console.log(undefined == 0);     // false
console.log(null == false);      // false

console.log('5' == 5);           // true
console.log('' == 0);            // true
console.log('0' == false);       // true
console.log(true == 1);          // true

// ---- truthiness ----
if ('0') console.log('runs');    // runs

const values = [0, '0', '', ' ', [], {}, NaN, null, undefined, -0];
for (const v of values) console.log(v, Boolean(v));

// ---- || vs ?? ----
{
  const count = 0;
  const name = '';
  console.log(count || 10, count ?? 10);       // 10 0
  console.log(name || 'anon', name ?? 'anon'); // anon (empty string)
  console.log(name || count, name ?? count);   // 0 (empty string)
}

// ---- short-circuiting ----
console.log(0 || 'a' || 'b');       // a
console.log(1 && 'x' && 0 && 'y');  // 0
console.log('' ?? 'z');             // (empty string)

// ---- optional chaining ----
{
  const user = null;
  // console.log(user.name);        // TypeError: Cannot read properties of null (reading 'name')
  console.log(user?.name);          // undefined
}
{
  const a = null;
  const b = {};
  console.log(a?.x.y.z);            // undefined (chain skipped)
  // console.log(b?.x.y);           // TypeError: ... undefined (reading 'y')
  console.log(b?.x?.y);             // undefined
  console.log(b.x?.y);              // undefined
}
{
  const config = null;
  // console.log(config.retries);   // throws: loud, finds the bug
  console.log(config?.retries);     // undefined: hides the bug
}

// ---- logical assignment ----
{
  let retries;
  retries ??= 3;
  console.log(retries);             // 3
  retries ??= 5;
  console.log(retries);             // 3
}
{
  let a = 0;
  let b = 0;
  a ||= 10;
  b ??= 10;
  console.log(a, b);                // 10 0
}
{
  let s = 'hi';
  let e = '';
  s &&= s + '!';
  e &&= e + '!';
  console.log(s, e);                // hi! (empty string)
}
{
  const user = { name: '  Ann  ' };
  const guest = {};
  user.name &&= user.name.trim();
  guest.name &&= guest.name.trim();
  console.log(user.name, guest.name); // Ann undefined
}

// ---- ternary ----
{
  const qty = 0;
  console.log(qty ? 'in cart' : 'empty');                    // empty
  console.log(qty ?? 'none');                                // 0
  console.log(qty === 0 ? 'zero' : qty ? 'some' : 'none');   // zero
}

// ---- parseInt vs unary + ----
console.log(parseInt('42px'));  // 42
console.log(parseInt('px42'));  // NaN
console.log(+'4 2');            // NaN

// ---- 12-row coercion table ----
// expression      | predicted | actual
// 1 + 2           | 3         | 3
// '1' + 2         | 12        | 12
// 1 + '2'         | 12        | 12
// '3' - 1         | 2         | 2
// '3' + 1 - 1     | 30        | 30
// true + 1        | 2         | 2
// null + 1        | 1         | 1
// undefined + 1   | NaN       | NaN
// '5' * '2'       | 10        | 10
// [] + []         | ''        | ''
// [1, 2] + 3      | 1,23      | 1,23
// +'42px'         | NaN       | NaN