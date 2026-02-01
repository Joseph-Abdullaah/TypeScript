## What Is `tsconfig.json`?

`tsconfig.json` is a **configuration file** that tells TypeScript:

* How to compile your code
* What rules to enforce
* Where files come from
* Where compiled files go

Without it:

* You must compile files manually
* No project-wide rules exist

With it:

* TypeScript understands your entire project

---

## Basic Example Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

## Explanation of Each Configuration Option

### 🔹 `target`

```json
"target": "ES2020"
```

Specifies **which JavaScript version** TypeScript outputs.

* Higher target → newer JS features
* Lower target → more compatibility

Common values:

* `ES5` (old browsers)
* `ES2015`
* `ES2020` ✅ recommended

---

### 🔹 `module`

```json
"module": "CommonJS"
```

Defines how modules are compiled.

* `CommonJS` → Node.js
* `ESNext` → modern bundlers (Vite, Webpack)

For beginners:
✅ Use `CommonJS`

---

### 🔹 `rootDir`

```json
"rootDir": "src"
```

Tells TypeScript:

> “My source TypeScript files are here”

Keeps project organized.

---

### 🔹 `outDir`

```json
"outDir": "dist"
```

Where compiled JavaScript files go.

This separates:

* Source code (`src`)
* Output code (`dist`)

---

### 🔹 `strict`

```json
"strict": true
```

Enables **all strict type-checking rules**.

This includes:

* No implicit `any`
* Proper `null` handling
* Safer function typing

🔴 Turning this off does **NOT** disable TypeScript
🟢 It only removes extra safety checks

**Recommended:** Always keep `true`

---

### 🔹 `esModuleInterop`

```json
"esModuleInterop": true
```

Allows cleaner imports from JavaScript libraries.

Without it:

```ts
import * as express from "express";
```

With it:

```ts
import express from "express";
```

---

### 🔹 `skipLibCheck`

```json
"skipLibCheck": true
```

Skips checking type definitions of libraries.

Why?

* Faster compilation
* Avoids noisy third-party errors

Safe and recommended.

---

### 🔹 `include`

```json
"include": ["src"]
```

Tells TypeScript **which files to compile**.

Only files inside `src` will be processed.

---

## Common Beginner Mistakes

❌ Thinking `strict: false` disables TypeScript
❌ Editing many strict flags manually
❌ Mixing output files with source files

---

## Recommended Beginner Rule

✔ Use `strict: true`
✔ Fix errors instead of hiding them
✔ Learn what the compiler teaches you

---

## Final Summary

* `tsconfig.json` controls the entire TypeScript project
* Configuration defines safety, structure, and output
* Strict mode improves learning and code quality
* This setup works for React, Node, and backend projects


