# JavaScript ES6+ : 60-Day Beginner → Advanced Plan

**Owner:** Ivan  
**Start date:** ____________  **Target finish:** ____________  
**Daily budget:** 90–120 min, 5 study days/week (12 weeks)  
**Rule zero:** you learn by typing code, not by watching videos.

---

## 1. How to use this plan

- Each day = one small, finishable unit. Do them **in order**; later days assume earlier ones.
- Every day has **Learn** (read/watch), **Do** (write code), **Ship** (artifact + commit).
- Days 10, 20, 30, 40, 50, 60 are **checkpoint + project days**. Never skip these — they're where learning actually sticks.
- "ES6" here means **modern JavaScript**: ES2015 core plus everything shipped since (through ES2026). Syntax alone is not the goal; the execution model, async, modules and tooling are.
- Feature availability moves fast. Before relying on a very new API, verify on MDN / Can I use / the TC39 finished-proposals list.

### Pacing options

| Track | Schedule | Daily time | Notes |
|---|---|---|---|
| **Standard** (recommended) | 12 weeks, Mon–Fri | 90–120 min | Days as written |
| Fast track | 30 days | 3–4 h | Merge day pairs (1+2, 3+4, …), keep all checkpoints |
| Relaxed | ~6 months | 40–50 min | Split each day into 2 sessions |
| Weekend-only | ~20 weeks | 4 h Sat + Sun | 3 days per weekend |

**Falling behind?** Skip items marked ⭐ (stretch), never skip checkpoints. Max 2 days of debt, then use a weekend as buffer.

---

## 2. Day 0 — Setup (60–90 min, before Day 1)

- [ ] Install **Node.js LTS** (`node -v`, `npm -v` work in terminal)
- [ ] Install **VS Code** + extensions: ESLint, Prettier, Error Lens, JavaScript Debugger
- [ ] Install **Git**, create repo `js-es6-60`, push to GitHub (private is fine)
- [ ] Bookmark: MDN, javascript.info, Node docs, TC39 proposals
- [ ] Create the folder structure below and commit it
- [ ] Pick a fixed daily time slot and put it in your calendar

```text
js-es6-60/
├─ README.md          # this plan + progress log
├─ notes/             # week-01.md ... week-12.md, flashcards.md, traps.md
├─ days/
│  ├─ day-01/
│  ├─ day-02/
│  └─ ...
└─ projects/
   ├─ p1-expenses/
   ├─ p2-library/
   ├─ p3-store/
   ├─ p4-dashboard/
   ├─ p5-spa/
   └─ capstone/
```

---

## 3. Daily ritual (≈100 min)

| Time | Activity |
|---|---|
| 10 min | **Recall:** re-read yesterday's notes, answer 3 flashcards from memory |
| 25 min | **Learn:** MDN / javascript.info chapter for today's topic only |
| 55 min | **Do:** write the exercises by hand, predict output *before* running |
| 10 min | **Ship:** notes in your own words + `git commit -m "day-07: closures"` |

### Non-negotiable rules

1. **Predict → run → explain.** Before executing any snippet, write your predicted output as a comment.
2. **20-minute struggle rule.** Stuck? Try 20 min alone, then search. Never paste a solution you can't explain line by line.
3. **No copy-paste typing.** Retype every example.
4. **Rubber duck.** End each day explaining the concept out loud in 3 sentences, no notes.
5. **AI discipline.** Ask for hints, reviews and counterexamples — not finished solutions. If AI writes code for you, re-implement it from memory the next morning.
6. **No frameworks until Day 50.** Vanilla JS only. This is the whole point.
7. **One commit per day minimum.** Green squares are cheap motivation.

### Weekends

- **Saturday (60–90 min):** 2 katas (Exercism / Codewars) using *only* concepts learned so far + refactor one earlier day's file.
- **Sunday:** rest, or 30 min of passive input (talk/article) + update `notes/flashcards.md`.
- **Spaced repetition:** review flashcards from day −1, −3, −7, −21.

---

## 4. Core resources (free unless noted)

- **MDN JavaScript Guide + Reference** — your primary source of truth
- **javascript.info** — best structured tutorial, do the tasks at the end of each chapter
- **Exploring JS** (Axel Rauschmayer) — deep, precise, free online
- **You Don't Know JS Yet** (Kyle Simpson) — free on GitHub; scope/closures & `this`/prototypes books
- **Eloquent JavaScript** — free online, good exercise sets
- **Node.js docs**, **Vite docs**, **Vitest docs**, **ESLint rules docs**
- **TC39 proposals repo** + **Can I use** — for feature status
- Talks: *What the heck is the event loop anyway?* (Philip Roberts), *In The Loop* (Jake Archibald)
- Practice: Exercism JS track, Codewars, Frontend Mentor (for UI projects)
- Public APIs for projects: Open-Meteo, GitHub REST, PokeAPI, JSONPlaceholder

---

## PHASE 1 — Foundations with modern syntax (Days 1–10)

### Week 1 — Language basics

- [x] **Day 1 — Environment & first run**
  - **Learn:** how JS executes (engine, browser vs Node), `<script defer>` vs `type="module"`, `'use strict'`, console API, reading stack traces.
  - **Do:** run a file with Node; load a module script in an HTML page; use `console.log/table/time/trace`; deliberately cause 3 errors and read each stack trace.
  - **Ship:** `days/day-01/` + notes: "3 ways to run JS and when to use each".

- [x] **Day 2 — Variables, scope, types**
  - **Learn:** `let`/`const` vs `var`, block scope, hoisting, TDZ, 7 primitives + object, `typeof`, `null` vs `undefined`, dynamic typing.
  - **Do:** 8 predict-the-output snippets (`var` in loop, TDZ ReferenceError, `const` object mutation, `typeof null`, `typeof undeclared`); build a `typeof` table.
  - **Ship:** `scope-experiments.js` with a comment explaining every result.

- [ ] **Day 3 — Operators, coercion, equality**
  - **Learn:** arithmetic/comparison/logical operators, `==` vs `===`, the falsy list, `||` vs `??`, short-circuiting, `?.`, `&&=`/`||=`/`??=`, ternary.
  - **Do:** 12-row coercion prediction table, then verify; write `isEmpty(value)`; refactor nested `if`s into guard clauses + optional chaining.
  - **Ship:** notes: "when `??` beats `||`" with 2 real examples (0 and '').

- [ ] **Day 4 — Strings & template literals**
  - **Learn:** interpolation, multi-line, nesting, `String.raw`, tagged templates (concept), `slice/at/padStart/trim/replaceAll/split/normalize`, code points vs UTF-16 units.
  - **Do:** implement `slugify`, `truncate`, `titleCase`, `maskCard`; render a card as an HTML string; write a naive tagged template `safe` that escapes interpolated values.
  - **Ship:** `strings.js` with 10 `console.assert` checks.

- [ ] **Day 5 — Control flow + week review**
  - **Learn:** `if/else`, `switch` + fallthrough, `for`, `while`, `do…while`, `for…of` vs `for…in`, `break`/`continue`, early return.
  - **Do:** FizzBuzz three ways; number-guessing game (Node `readline` or `prompt`); iterate an object's entries safely; nested-loop pattern with labeled break ⭐.
  - **Ship:** `projects/`-style mini game + `notes/week-01.md` recap.

### Week 2 — Functions & arrays

- [ ] **Day 6 — Functions I**
  - **Learn:** declarations vs expressions vs arrows, default params (evaluated per call, can reference earlier params), rest params, return values, functions as first-class values.
  - **Do:** convert 5 functions to arrows and note where it breaks; `sum(...nums)`; default param with a side effect to prove per-call evaluation; `greet(name, greeting = \`Hi ${name}\`)`.
  - **Ship:** notes: 5 concrete differences between arrow and regular functions.

- [ ] **Day 7 — Functions II: callbacks & purity**
  - **Learn:** higher-order functions, callbacks, pure vs impure, side effects, `arguments` vs rest, IIFE, `fn.length`/`fn.name`, named function expressions.
  - **Do:** implement `repeat(n, fn)`, `tap`, `once`; turn an impure function pure; pass callbacks into 3 array methods.
  - **Ship:** `hof.js` + explain why arrow callbacks have no `arguments`.

- [ ] **Day 8 — Arrays: basics & mutation**
  - **Learn:** creation, holes, `length`, `at`, push/pop/shift/unshift/splice/slice/concat/includes/indexOf, sort/reverse mutate, `Array.isArray/from/of`, array-likes.
  - **Do:** build a stack and a queue; `Array.from({length: 5}, (_, i) => i * 2)`; sort numbers correctly; break something with `sort()` on strings vs numbers.
  - **Ship:** cheat sheet: mutating vs non-mutating array methods.

- [ ] **Day 9 — Arrays: map/filter/reduce & friends**
  - **Learn:** map/filter/reduce/find/findLast/findIndex/some/every/flat/flatMap/fill/keys/values/entries, chaining cost, reduce for grouping, when reduce hurts readability.
  - **Do:** 20-item product dataset → total, group by category, top 3 by price, unique tags, search+sort+paginate pipeline; re-implement `map` and `filter` using `reduce`.
  - **Ship:** `analytics.js` with 10 assertions.

- [ ] **Day 10 — CHECKPOINT 1 + Project 1**
  - **Do:** build **P1 Expense report** (spec in §10); answer **Self-test A**; refactor your ugliest file from this week.
  - **Ship:** project + README, 10 new flashcards, git tag `v0.1`.

---

## PHASE 2 — Objects, collections, iteration (Days 11–20)

### Week 3 — Data structures

- [ ] **Day 11 — Objects**
  - **Learn:** shorthand properties/methods, computed keys, bracket vs dot, `delete`, `in` vs `Object.hasOwn`, keys/values/entries, literal getters/setters, property order.
  - **Do:** implement `pick`, `omit`, `mapValues`, `invert`; array↔object conversions; word-frequency counter.
  - **Ship:** `objects.js` + notes: `for…in` vs `Object.keys` (inherited properties).

- [ ] **Day 12 — Destructuring**
  - **Learn:** array/object patterns, defaults, renaming, nesting, holes, swapping, destructuring in params and `for…of`, destructuring returns.
  - **Do:** refactor 8 earlier snippets; parse a nested config with defaults; `for (const {id, name} of users)`; destructure `Object.entries` pairs.
  - **Ship:** `destructuring.js` + note: defaults trigger only on `undefined`, not `null`/`0`/`''`.

- [ ] **Day 13 — Spread, rest & immutable updates**
  - **Learn:** spread in arrays/objects/args, merge order, shallow copy semantics, rest in patterns vs params, nested immutable updates, `structuredClone`, shallow `Object.freeze`.
  - **Do:** immutable `addItem/updateItem/removeItem/toggle`; update a value 3 levels deep without mutation; clone with `structuredClone` and discover what it drops (functions, class prototypes, getters).
  - **Ship:** `immutable.js` + assertions proving the source objects are untouched.

- [ ] **Day 14 — References, equality, cloning**
  - **Learn:** value vs reference, aliasing bugs, `Object.is` vs `===` (NaN, −0), shallow vs deep, JSON round-trip losses (undefined, Date, Map, cycles).
  - **Do:** 10 prediction snippets; write `deepEqual(a, b)` for plain data; cause an aliasing bug on purpose, then fix it.
  - **Ship:** notes: "5 ways copying data in JS goes wrong".

- [ ] **Day 15 — Map, Set, WeakMap, WeakSet**
  - **Learn:** APIs, insertion order, any key type, `size`, iteration, dedupe, set operations, WeakMap for private/associated data, object vs Map decision criteria.
  - **Do:** `unique`, `union`, `intersection`, `difference`; object-keyed cache with WeakMap; grouping with Map; compare lookup ergonomics vs `array.find`.
  - **Ship:** `collections.js` + decision table: array vs object vs Map vs Set.

### Week 4 — Iteration, symbols, errors

- [ ] **Day 16 — Iterables & iterators**
  - **Learn:** iteration protocol, `Symbol.iterator`, `next()`, iterable vs iterator, what `for…of`/spread/destructuring actually call, lazy sequences.
  - **Do:** lazy `range(start, end, step)`; make a `Playlist` class iterable; consume it 4 ways; infinite iterator driven manually with `next()`.
  - **Ship:** `iterables.js` + diagram of the protocol.

- [ ] **Day 17 — Symbols & meta-hooks**
  - **Learn:** `Symbol()`, descriptions, uniqueness, `Symbol.for/keyFor`, well-known symbols, `Symbol.toPrimitive`, `Symbol.toStringTag`, `Symbol.hasInstance`, why symbols vanish from JSON.
  - **Do:** `Money` object with `toPrimitive`; brand a class with `toStringTag`; attach collision-proof metadata with symbols.
  - **Ship:** notes: 3 genuinely useful symbol use cases.

- [ ] **Day 18 — Numbers, dates, Intl**
  - **Learn:** float pitfalls, epsilon comparison, `parseInt` radix, `Number.isFinite/isNaN`, BigInt (no implicit mixing), Math helpers, Date traps & time zones, `Intl.NumberFormat/DateTimeFormat/RelativeTimeFormat`. Research Temporal's current support status.
  - **Do:** money stored in cents; locale-aware `formatCurrency`/`formatRelative`; correct 2-decimal rounding; `daysBetween`; fix `0.1 + 0.2`.
  - **Ship:** `format.js` + notes: why floats must never hold money.

- [ ] **Day 19 — Errors & defensive code**
  - **Learn:** built-in error types, throw vs return, try/catch/finally (and `return` interactions), `error.cause`, custom error classes, guard clauses, validate at boundaries, never swallow errors.
  - **Do:** `ValidationError` + `NotFoundError`; safe `parseJSON`; validate a config object; rethrow with `cause`; write a tiny `assert` helper.
  - **Ship:** `errors.js` + notes: when to throw vs return a null/Result.

- [ ] **Day 20 — CHECKPOINT 2 + Project 2**
  - **Do:** build **P2 Library manager**; answer **Self-test B**; refactor; flashcards.
  - **Ship:** project + README, tag `v0.2`.

---

## PHASE 3 — Functions, `this`, OOP & FP (Days 21–30)

### Week 5 — The execution model

- [ ] **Day 21 — Scope & hoisting, deep**
  - **Learn:** global/module/function/block scope, scope chain, lexical binding, hoisting order (var vs function vs let/const), TDZ, shadowing, strict-mode differences, accidental globals.
  - **Do:** 12 predict-the-output drills; draw the scope chain for a 3-level nested function; hunt accidental globals in old code.
  - **Ship:** `notes/scope-quiz.md` — predicted vs actual, with reasons.

- [ ] **Day 22 — Closures**
  - **Learn:** what a closure really is, live bindings (not snapshots), loop pitfalls, private state, factories, module pattern, memoization.
  - **Do:** `counter()`, `createId()`, `memoize(fn)`, `once(fn)`, `createRateLimiter(n, ms)`; classic `var` + `setTimeout` loop, fixed 3 ways.
  - **Ship:** `closures.js` + a written 3-sentence definition of closure, no notes.

- [ ] **Day 23 — `this`, call/apply/bind**
  - **Learn:** default / implicit / explicit / `new` binding, arrow lexical `this`, method-extraction bug, `this` in callbacks and event handlers, `bind` for partial application, strict-mode `undefined`.
  - **Do:** 10 prediction snippets; fix a broken handler 3 ways (bind, arrow, wrapper); implement `myBind`; borrow an array method with `call`.
  - **Ship:** `notes/this-rules.md` decision table.

- [ ] **Day 24 — Prototypes**
  - **Learn:** `[[Prototype]]`, `prototype` vs `__proto__`, `Object.create`, what `new` does step by step, chain lookup & shadowing, `instanceof`, get/setPrototypeOf, why patching built-ins is bad.
  - **Do:** build `Animal` + `Dog` with constructor functions manually; inspect the chain in DevTools; `Object.create(null)` dictionary; write an `inherits` helper.
  - **Ship:** `prototypes.js` + chain diagram.

- [ ] **Day 25 — Classes**
  - **Learn:** class syntax, constructor, methods (non-enumerable), public/private fields, `#private`, static members & static blocks, getters/setters, computed method names, class expressions, `new.target`, classes aren't hoisted.
  - **Do:** `class Stack`; `class EventEmitter` with `#listeners`; static `from()` factory; validating setter; compare with your Day 24 prototype version.
  - **Ship:** `classes.js` + notes: class vs factory trade-offs.

### Week 6 — Design techniques

- [ ] **Day 26 — Inheritance & composition**
  - **Learn:** `extends`/`super` (constructor + methods), extending built-ins, overriding, polymorphism, duck typing, mixins, composition over inheritance, encapsulation.
  - **Do:** `Shape → Circle/Rectangle` with `area()`; `Serializable` mixin; refactor a 3-level hierarchy into composed functions.
  - **Ship:** notes: 2 examples from *your* code where inheritance made things worse.

- [ ] **Day 27 — Currying, composition, pipelines**
  - **Learn:** partial application vs currying, `compose`/`pipe`, point-free style and its readability limit, keeping pipelines pure.
  - **Do:** `curry(fn)` for fixed arity; `pipe(...fns)`; `slugify = pipe(trim, lower, replaceSpaces)`; write one "too clever" version and one readable version.
  - **Ship:** `fp.js` + your readability verdict.

- [ ] **Day 28 — Recursion & tree data**
  - **Learn:** base cases, call-stack limits, recursion vs iteration, DFS/BFS, flatten/unflatten, trampolines, why proper tail calls aren't usable in practice.
  - **Do:** recursive `deepClone`; `flattenTree`, `findById`, `pathTo`; render a comment tree to a string; trampoline a 100k-deep recursion ⭐.
  - **Ship:** `recursion.js`.

- [ ] **Day 29 — Practical functional patterns**
  - **Learn:** pure core / imperative shell, avoiding shared mutable state, Result/Maybe without libraries, frozen data, when FP is overkill.
  - **Do:** implement `Result` with `ok/err/map/flatMap`; rewrite one P2 flow as a pure pipeline returning Result instead of throwing.
  - **Ship:** `result.js` + refactor commit.

- [ ] **Day 30 — CHECKPOINT 3 + Project 3**
  - **Do:** build **P3 Store (pub/sub)**; answer **Self-test C**; flashcards.
  - **Ship:** project + README, tag `v0.3`.

---

## PHASE 4 — Asynchronous JavaScript (Days 31–40)

### Week 7 — Async core

- [ ] **Day 31 — Event loop**
  - **Learn:** single thread, call stack, task vs microtask queues, microtask checkpoint, rendering steps & `requestAnimationFrame`, `setTimeout(0)` ≠ now, `queueMicrotask`, Node phases + `process.nextTick`.
  - **Do:** predict ordering of 8 mixed sync/promise/timeout/await snippets, then verify; block the loop for 2 s and watch the UI freeze; watch the Philip Roberts talk.
  - **Ship:** `notes/event-loop.md` with predicted vs actual order + your own diagram.

- [ ] **Day 32 — Callbacks → promises**
  - **Learn:** async callback pattern, error-first convention, callback hell, inversion of control, `promisify`.
  - **Do:** promisify `setTimeout` and one Node `fs` callback; write a generic `promisify`; write a 4-level pyramid then flatten it.
  - **Ship:** `promisify.js`.

- [ ] **Day 33 — Promises deep**
  - **Learn:** states & settling, then/catch/finally, chaining and promise flattening, throwing inside `then`, the missing-`return` bug, unhandled rejections, the executor runs synchronously, `Promise.withResolvers` (check support).
  - **Do:** `wait(ms)`, `timeout(promise, ms)`; a 4-step chain; fix 6 deliberately broken chains; trigger and observe an unhandled rejection in Node.
  - **Ship:** `promises.js` + "5 promise mistakes I will not make".

- [ ] **Day 34 — Combinators & concurrency**
  - **Learn:** `all` (fail-fast) / `allSettled` / `race` / `any` (+ AggregateError), `Promise.try`, sequential vs parallel, mapping to promises, concurrency pools, batching.
  - **Do:** `mapLimit(items, limit, asyncFn)`; run 10 tasks with limit 3; timing table for sequential vs `all` vs pooled; build a success/failure report with `allSettled`.
  - **Ship:** `concurrency.js` + measured timings.

- [ ] **Day 35 — async/await**
  - **Learn:** async functions return promises, await unwrapping, try/catch/finally, the `forEach(async …)` trap, sequential-in-loop trap, parallel via `Promise.all`, top-level await in modules, async methods/arrows, async stack traces.
  - **Do:** convert Days 33–34 to async/await; demo `for` vs `forEach` with await; `retry(fn, {tries, delay})`; async IIFE in CommonJS.
  - **Ship:** `async-await.js` + notes: 3 places await silently serializes work.

### Week 8 — Async in the real world

- [ ] **Day 36 — HTTP & fetch**
  - **Learn:** request/response, methods, status codes, headers, JSON, CORS basics, `URL`/`URLSearchParams`, fetch rejects only on network errors (not 404/500), `AbortController`, `AbortSignal.timeout`.
  - **Do:** `apiGet/apiPost` wrapper with status check + JSON + timeout; send a POST with headers; handle 404 vs offline differently; read response headers.
  - **Ship:** `http.js` tested against a public API.

- [ ] **Day 37 — Async iteration & generators**
  - **Learn:** `Symbol.asyncIterator`, async generators, `for await…of`, consuming sync iterables of promises, backpressure concept, Node streams as async iterables.
  - **Do:** `paginate(url)` async generator; `for await` with early `break`; async `take(n)`; read a file line by line in Node.
  - **Ship:** `async-iter.js`.

- [ ] **Day 38 — Cancellation, races, timing**
  - **Learn:** abort patterns & combining signals, stale-response guards, debounce vs throttle, exponential backoff + jitter, cleanup discipline, idempotency.
  - **Do:** search-as-you-type with debounce + aborting stale requests; throttled scroll handler; retry wrapper that respects abort.
  - **Ship:** `timing.js` + a small HTML demo proving stale results never overwrite fresh ones.

- [ ] **Day 39 — Node async & files**
  - **Learn:** ESM in Node (`"type": "module"`), `import.meta.url`, `fs/promises`, `path`, `process.argv/env/exitCode`, `timers/promises`, `node --watch`, streams intro.
  - **Do:** CLI: read JSON → transform with your utils → write output; env-based config; correct exit codes on failure.
  - **Ship:** `days/day-39/cli/` + usage README.

- [ ] **Day 40 — CHECKPOINT 4 + Project 4**
  - **Do:** build **P4 API dashboard**; answer **Self-test D**; flashcards.
  - **Ship:** project + README, tag `v0.4`.

---

## PHASE 5 — Browser, modules, tooling, tests (Days 41–50)

### Week 9 — The platform

- [ ] **Day 41 — DOM essentials**
  - **Learn:** querySelector(All), NodeList vs HTMLCollection, create/append/replace/remove, `textContent` vs `innerHTML`, classList, dataset, attributes vs properties, `<template>`, DocumentFragment.
  - **Do:** render a data table; `renderList` (full re-render, then keyed updates); build a modal from a `<template>`; measure both render approaches ⭐.
  - **Ship:** `dom/` demo page.

- [ ] **Day 42 — Events**
  - **Learn:** addEventListener options (`once`, `passive`, `signal`), capture/bubble, `target` vs `currentTarget`, delegation, preventDefault/stopPropagation, CustomEvent/EventTarget, keyboard & pointer events, listener cleanup.
  - **Do:** delegated list with edit/delete; emit `cart:change` CustomEvent; keyboard shortcuts; remove all listeners via one AbortController.
  - **Ship:** `events/` demo + event-flow diagram.

- [ ] **Day 43 — Forms, URLs, routing**
  - **Learn:** submit event, FormData, constraint validation API, `URL`/`URLSearchParams`, History API (pushState/popstate), hash routing, labels & `aria-live` basics.
  - **Do:** validated signup form with inline errors; form→object serializer; query-string-driven filters; ~40-line hash router.
  - **Ship:** `forms-router/` demo.

- [ ] **Day 44 — Client storage & state**
  - **Learn:** localStorage/sessionStorage (sync, strings only), serialization + schema versioning/migrations, cookies overview, IndexedDB concept, `storage` events, quotas & privacy limits, single source of truth.
  - **Do:** `createStorage(namespace)` with version + safe parse + fallback; persist app state; sync state across two tabs.
  - **Ship:** `storage.js` + notes: when localStorage is the wrong tool.

- [ ] **Day 45 — ES modules**
  - **Learn:** named/default/namespace exports, re-exports & barrels, live bindings, hoisted imports, module scope + implicit strict mode, evaluate-once caching, circular deps, dynamic `import()`, code splitting, import maps & import attributes, ESM↔CJS interop.
  - **Do:** split P3 into 6 modules; lazy-load a heavy module on click; create a circular dependency, observe the symptom, fix it; draw the dependency graph.
  - **Ship:** `modules/` refactor + graph in notes.

### Week 10 — Professional workflow

- [ ] **Day 46 — npm & packages**
  - **Learn:** package.json fields, deps vs devDeps vs peerDeps, semver ranges, lockfiles, `npm ci`, scripts, npx, `exports` map, workspaces concept, `npm audit`.
  - **Do:** init a package; add 2 deps; scripts for dev/test/lint; run `npm outdated` + `audit`; inspect `npm pack` output.
  - **Ship:** `package.json` + notes: why lockfiles exist.

- [ ] **Day 47 — Build tooling & compatibility**
  - **Learn:** Vite dev server/HMR/build, bundling & tree shaking, source maps, env vars, ESLint flat config + Prettier, `.editorconfig`, Babel/browserslist/core-js, when transpiling is still needed, feature detection over UA sniffing.
  - **Do:** scaffold a vanilla Vite project; wire ESLint + Prettier; build and inspect the output bundle; add a fallback for one modern API.
  - **Ship:** committed tooling configs + a working `npm run build`.

- [ ] **Day 48 — Testing**
  - **Learn:** Vitest (or Jest): describe/it/expect, arrange-act-assert, spies & module mocks, fake timers, async tests, coverage and its limits, TDD loop, DOM testing basics.
  - **Do:** TDD `slugify`, `mapLimit`, `Result`; test debounce with fake timers; mock fetch for your http wrapper; ≥80% coverage on utils.
  - **Ship:** green `npm test` + coverage report.

- [ ] **Day 49 — Debugging & DevTools**
  - **Learn:** line/conditional/DOM/XHR breakpoints, stepping, scope & watch panels, async call stacks, `debugger`, console utilities, Network panel, Performance flame chart, Memory heap snapshots & detached nodes, Node `--inspect`.
  - **Do:** fix 5 seeded bugs using **breakpoints only** (console.log banned); find a leak in a demo page; record and read a performance profile.
  - **Ship:** `notes/debugging.md` — 5 root causes and how you found each.

- [ ] **Day 50 — CHECKPOINT 5 + Project 5**
  - **Do:** build **P5 Vanilla SPA**; answer **Self-test E**; flashcards.
  - **Ship:** deployed build + tests + tag `v0.5`.

---

## PHASE 6 — Advanced & professional (Days 51–60)

### Week 11 — Advanced language & runtime

- [ ] **Day 51 — Generators**
  - **Learn:** `function*`, `yield`/`yield*`, two-way communication via `next(value)`, `return`/`throw`, lazy pipelines, generator-based state machines, how async/await relates.
  - **Do:** `fibonacci()`, `take(iter, n)`, lazy map/filter over 1M items, `idGenerator()`; compare memory vs the array version.
  - **Ship:** `generators.js` + measurements.

- [ ] **Day 52 — Proxy & Reflect**
  - **Learn:** traps (get/set/has/deleteProperty/ownKeys/apply/construct), pairing with Reflect, invariants, revocable proxies, real use cases (validation, observability, defaults, negative indices), performance cost.
  - **Do:** validating proxy that throws on unknown keys; `observable(obj, onChange)`; `withDefault(obj, 0)`; negative-index array proxy; measure overhead ⭐.
  - **Ship:** `proxy.js` + notes: when Proxy is a bad idea.

- [ ] **Day 53 — Memory & garbage collection**
  - **Learn:** reachability, mark & sweep, closures retaining scope, leak sources (listeners, timers, detached DOM, unbounded caches, globals), WeakMap vs Map, WeakRef/FinalizationRegistry caveats, heap snapshots.
  - **Do:** create 3 leaks, snapshot, fix, snapshot again; swap a Map cache for WeakMap and compare retained size.
  - **Ship:** `notes/memory.md` with before/after evidence.

- [ ] **Day 54 — Performance & workers**
  - **Learn:** measure before optimizing, algorithmic wins vs micro-optimizations, forced reflow/layout thrash, batching DOM writes, rAF, `requestIdleCallback`, Web Workers + postMessage + transferables, SharedArrayBuffer/Atomics overview.
  - **Do:** profile a slow list render and fix it (fragment + batched writes); move a heavy computation into a Worker; record before/after numbers.
  - **Ship:** `perf/` with a results table.

- [ ] **Day 55 — Modern JS feature sweep (ES2016 → ES2026)**
  - **Learn:** `**`, `includes`, `padStart/End`, async iteration, optional catch binding, `flat/flatMap`, `Object.fromEntries`, `globalThis`, `?.`/`??`, BigInt, `allSettled`/`any`, logical assignment, numeric separators, `replaceAll`, `at`, top-level await, class fields/private/static blocks, `Object.hasOwn`, error `cause`, `findLast`, change-by-copy methods (`toSorted/toReversed/toSpliced/with`), `Object.groupBy`/`Map.groupBy`, RegExp `v` flag, iterator helpers, Set methods, `Promise.try`, `RegExp.escape`, explicit resource management (`using`/`await using`), Temporal. **Verify current support for the newest ones before using them.**
  - **Do:** one runnable example per feature you can use today; refactor older code with 5 of them; document fallbacks for the rest.
  - **Ship:** `notes/modern-js.md` — feature → use case → support caveat.

### Week 12 — Engineering practice & capstone

- [ ] **Day 56 — Security & robustness**
  - **Learn:** XSS (stored/reflected/DOM), safe DOM APIs & sanitization, prototype pollution, `Object.freeze`/`Object.create(null)`, CSRF concept, secrets never in frontend, CSP basics, dependency risk, validate at boundaries.
  - **Do:** exploit then fix an XSS in your SPA; write a vulnerable `deepMerge`, then harden it against `__proto__`; add validation to your API layer.
  - **Ship:** `notes/security.md` checklist.

- [ ] **Day 57 — Patterns & architecture**
  - **Learn:** module/revealing module, factory, observer, strategy, adapter, decorator, dependency injection, finite state machines, pure core / imperative shell, feature vs layer folders, config objects over long param lists, naming & JSDoc.
  - **Do:** design the capstone's layers; implement a UI state machine (idle/loading/success/error); replace an if-chain with a strategy map.
  - **Ship:** `notes/architecture.md` + diagram.

- [ ] **Day 58 — Types without TypeScript**
  - **Learn:** `// @ts-check`, `checkJs`, `@typedef/@param/@returns/@template`, JSDoc-driven inference, `.d.ts` concept, when to move to real TS.
  - **Do:** enable `@ts-check` on 3 util modules and fix every reported error; type `Result` and your store; note each bug the checker caught.
  - **Ship:** type-checked utils + "5 bugs types caught".

- [ ] **Day 59 — Capstone build day**
  - **Do:** implement the **Capstone** (§10) in small vertical slices: data layer → pure core → UI → tests → build. Commit per slice.
  - **Ship:** working deployed app + CI running lint & tests + README with architecture decisions.

- [ ] **Day 60 — Polish, review, next steps**
  - **Do:** self code review against §11 checklist; refactor 3 smells; add loading/empty/error states; answer **Self-test F**; write "solid vs shaky" list; choose your next track (§12).
  - **Ship:** tag `v1.0` + retrospective + a 90-day follow-up plan.

---

## 10. Project specs

> Build all of these **without frameworks**. Reuse your own utils — that's the point.

### P1 — Expense report (Day 10)
Input: array of `{id, date, amount, category, note}` (≥30 rows, hand-written or generated).  
Required: `total`, `byCategory`, `byMonth`, `topN`, `search`, `filter`, `sort`, `paginate` — all pure & immutable; amounts in cents; input validation with clear errors; `console.table` output.  
Done when: 10+ assertions pass, no function mutates its input, README explains the API.

### P2 — Library manager (Day 20)
Map-based store; Set for tags; `add/remove/borrow/return/search/byTag`; JSON persistence; custom error classes; destructured options objects; immutable snapshots for history.  
Done when: invalid operations throw typed errors, state survives reload, every public function has a JSDoc comment.

### P3 — Store with pub/sub (Day 30)
`createStore(initialState)` → `getState`, `setState/updater`, `subscribe(fn) → unsubscribe`, `select(selector)` with memoization, logger middleware, undo/redo (bounded history), private fields via `#`.  
Done when: subscribers fire only on actual change, undo/redo works 10 steps deep, no external mutation is possible.

### P4 — API dashboard (Day 40)
Public API of your choice. Required: parallel requests with a concurrency limit, timeout + retry with backoff + jitter, abort on new query, Map cache with TTL, async-generator pagination, explicit error taxonomy (network / HTTP / parse / abort), CLI or minimal HTML output.  
Done when: killing the network produces a useful message, not a crash; repeated queries hit the cache; timings logged.

### P5 — Vanilla SPA (Day 50)
3 views + router (hash or History), components as functions returning DOM nodes, delegated events, validated form, versioned localStorage persistence, ES modules, Vite build, Vitest tests, deployed (GitHub Pages/Netlify).  
Done when: deep links work on refresh, no `innerHTML` with user data, `npm test` green, bundle deployed and reachable.

### Capstone (Days 59–60) — pick one
Personal finance tracker · Kanban board with offline persistence + undo · Meal planner with API + shopping list · Docs/search browser for a public API.

**Requirements (all mandatory):**
- ≥8 ES modules, clear layering, pure core + imperative shell
- Async data layer with abort, retry, timeout, cache
- ≥25 tests, lint clean, `@ts-check` on core modules
- Loading / empty / error states everywhere; keyboard navigable
- README with architecture diagram + 5 decisions and their trade-offs
- CI (lint + test) and a deployed URL
- Performance budget: <100 KB gzipped JS, interactive <1 s on a mid-range phone
- Zero UI frameworks

---

## 11. Self-test banks & review checklist

Answer out loud, from memory. Anything you can't answer → re-study that day.

**A (Day 10)** 1) `var` vs `let` in a loop with `setTimeout` — output and why? 2) Why is mutating a `const` object legal? 3) `0 || 'x'` vs `0 ?? 'x'`? 4) Write a function that throws when a required argument is missing. 5) Name 6 mutating array methods.

**B (Day 20)** 1) Show a shallow-copy bug and fix it. 2) When is Map better than an object? 3) Destructure a nested object with renaming + defaults. 4) What does `Object.freeze` *not* do? 5) Make a plain object usable in `for…of`.

**C (Day 30)** 1) The four `this` binding rules + the arrow exception. 2) Implement `memoize` and name its memory risk. 3) What does `class` actually change vs prototypes? 4) Three fixes for the closure-in-loop bug. 5) One case where composition beats inheritance.

**D (Day 40)** 1) Order of: sync log, `setTimeout(0)`, `Promise.then`, `queueMicrotask`, await continuation. 2) `all` vs `allSettled` vs `race` vs `any`. 3) Why `forEach(async …)` fails, and the fix. 4) Does fetch reject on 404? Handle both cases. 5) How do you prevent a stale search response from winning?

**E (Day 50)** 1) Event delegation: why, and `target` vs `currentTarget`. 2) `innerHTML` risk + safe alternative. 3) Named vs default exports; what are live bindings? 4) Why a lockfile + `npm ci`? 5) Test a debounced function with fake timers.

**F (Day 60)** 1) Generator vs async generator: one use case each. 2) Give a Proxy invariant that will throw. 3) Three leak sources and how to prove one with a heap snapshot. 4) WeakMap vs Map for caches. 5) Where do side effects live in pure-core/imperative-shell, and why?

### Code review checklist (use on Day 60 and forever)
- [ ] No `var`, no accidental globals, no unused code
- [ ] No mutation of inputs or shared state
- [ ] Every async call has error handling; nothing swallows errors
- [ ] No sequential awaits that could be parallel
- [ ] Every listener/timer/subscription has a cleanup path
- [ ] No user data in `innerHTML`; no `__proto__`-unsafe merges
- [ ] Names describe intent; functions do one thing; no 60-line functions
- [ ] Boundary validation on all external data
- [ ] Tests cover the happy path + 2 failure paths
- [ ] Comments explain *why*, not *what*

---

## 12. Common traps (keep this in `notes/traps.md`)

1. `const` freezes the **binding**, not the value.
2. Spread and `Object.assign` are **shallow**.
3. Defaults trigger only on `undefined`.
4. `sort()` without a comparator sorts lexicographically.
5. `this` depends on **call site**, not definition site (except arrows).
6. `forEach` ignores returned promises.
7. `await` inside a loop serializes work.
8. `fetch` resolves on 404/500 — check `response.ok`.
9. `Promise.all` fails fast; siblings keep running (no auto-cancel).
10. `setTimeout(fn, 0)` is a task, after all microtasks.
11. `JSON.stringify` drops `undefined`, functions, symbols; mangles Date/Map; throws on cycles.
12. `0.1 + 0.2 !== 0.3` — never store money as floats.
13. `Object.freeze` is shallow; frozen ≠ immutable deep.
14. Modules are singletons — module-level mutable state is shared.

---

## 13. Progress tracker

| Week | Days | Theme | Milestone | Done |
|---|---|---|---|---|
| 1 | 1–5 | Basics, scope, strings, flow | Guessing game | ☐ |
| 2 | 6–10 | Functions & arrays | **P1 Expenses** | ☐ |
| 3 | 11–15 | Objects, destructuring, collections | Immutable utils | ☐ |
| 4 | 16–20 | Iterators, symbols, errors | **P2 Library** | ☐ |
| 5 | 21–25 | Scope, closures, `this`, classes | EventEmitter class | ☐ |
| 6 | 26–30 | OOP design & FP | **P3 Store** | ☐ |
| 7 | 31–35 | Event loop, promises, async/await | Concurrency pool | ☐ |
| 8 | 36–40 | fetch, abort, async iteration | **P4 Dashboard** | ☐ |
| 9 | 41–45 | DOM, events, storage, modules | Router demo | ☐ |
| 10 | 46–50 | npm, Vite, tests, debugging | **P5 SPA (deployed)** | ☐ |
| 11 | 51–55 | Generators, Proxy, memory, perf | Perf report | ☐ |
| 12 | 56–60 | Security, architecture, types | **Capstone v1.0** | ☐ |

---

## 14. Exit criteria — you're "advanced" when you can…

- Explain the event loop with a diagram, and predict mixed async output correctly.
- Explain closures, `this`, and the prototype chain without notes.
- Build a modular vanilla app with tests, lint, build and deployment from scratch.
- Debug with breakpoints, heap snapshots and performance profiles — not just `console.log`.
- Handle async error, cancellation, retry and race conditions deliberately.
- Read MDN/spec text and TC39 proposals and judge whether a feature is safe to use.
- Justify design trade-offs (class vs factory, inheritance vs composition, throw vs Result).

## 15. After Day 60 — pick one 90-day track

1. **TypeScript** properly (generics, narrowing, config, migration of your capstone).
2. **A framework** (React / Svelte / Vue) — you'll now understand what it does for you.
3. **Backend JS**: Node/Bun/Deno, HTTP server, DB, auth, testing, deployment.
4. **Testing & quality depth**: Playwright, integration/contract tests, CI/CD.
5. **CS fundamentals in JS**: data structures, algorithms, complexity — using your own utils.
6. **Open source**: read a small library's source, file an issue, land a PR.

**Keep forever:** daily code, weekly refactor, monthly retrospective, and the habit of reading primary sources.