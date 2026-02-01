## What Is Interoperability?

**Interoperability** means that **TypeScript and JavaScript can work together in the same project**.

This is possible because:

> **TypeScript is a superset of JavaScript**
> → Every valid JavaScript file is also valid TypeScript.

This allows teams to:

* Gradually migrate from JavaScript to TypeScript
* Use existing JavaScript libraries
* Mix `.js` and `.ts` files safely

---

## How TypeScript Understands JavaScript

TypeScript can:

* Import `.js` files into `.ts` files
* Compile `.ts` and `.js` together
* Provide type checking for JavaScript (with help)

Example:

```ts
import { greet } from "./utils.js";
```

TypeScript does **not block JavaScript usage** — it enhances it.

---

## Common Interoperability Scenarios

### 1️⃣ Using JavaScript inside a TypeScript Project

You can freely use `.js` files inside a TypeScript project.

**utils.js**

```js
export function greet(name) {
  return `Hello, ${name}`;
}
```

**main.ts**

```ts
import { greet } from "./utils.js";

greet("Joseph");
```

✔ This works without any special setup.

---

### 2️⃣ Migrating JavaScript → TypeScript Gradually

You do **not** need to rewrite everything at once.

Migration path:

1. Keep `.js` files
2. Rename files to `.ts` one by one
3. Add types gradually

Before:

```js
function add(a, b) {
  return a + b;
}
```

After:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

---

### 3️⃣ Adding Types to JavaScript Using JSDoc

You can add TypeScript intelligence **without converting to `.ts`**.

```js
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

✔ VS Code now gives:

* Autocomplete
* Type checking
* Error warnings

---

### 4️⃣ Using JavaScript Libraries in TypeScript

Most JavaScript libraries do **not include types by default**.

TypeScript uses **type declaration files** (`.d.ts`) to understand them.

Example:

```bash
npm install lodash
npm install --save-dev @types/lodash
```

Now TypeScript understands:

* Function signatures
* Return types
* Auto-completion

---

## Key Takeaways

* JavaScript and TypeScript can live together
* TypeScript does not replace JavaScript — it enhances it
* Interoperability enables gradual adoption
* `@types/*` packages give TypeScript knowledge of JS libraries

---

## Best Practice

✔ Start with JavaScript
✔ Add TypeScript slowly
✔ Use TypeScript where correctness matters most

