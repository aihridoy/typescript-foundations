# TypeScript Foundations

An assignment covering TypeScript fundamentals and object-oriented programming through eight problem solutions and two technical blogs.

## Topics Covered

- Optional parameters and default behavior
- Union types and type narrowing
- Readonly tuples
- Generics, rest parameters, and `keyof`
- Interfaces and array filtering
- Classes, inheritance, and access modifiers
- Promises and asynchronous validation

## Blog Posts

1. [Type vs Interface in TypeScript](./type-vs-interface.md)
2. [Access Modifiers in TypeScript](./access-modifiers.md)

## Project Structure

```text
├── solutions.ts
├── practice.ts
├── type-vs-interface.md
├── access-modifiers.md
├── README.md
├── package.json
├── package-lock.json
└── tsconfig.json
```

All eight assignment solutions are in `solutions.ts`. The practice.ts file was reused to test each problem during development.

## Run Locally

Install dependencies:

```bash
npm install
```

Check TypeScript types:

```bash
npm run typecheck
```

Run the practice file:

```bash
npm run practice
```