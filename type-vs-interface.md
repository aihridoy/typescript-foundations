# Type vs Interface in TypeScript

## Introduction

TypeScript provides `type` aliases and `interface` to describe data structures. Both help us check object shapes, but they have differences that affect when we should use them.

## What They Have in Common

Both can describe an object with typed properties:

```typescript
type User = {
    name: string;
    age: number;
};

interface Student {
    name: string;
    age: number;
}
```

Both also support optional properties, readonly properties, and function signatures.

## Key Differences

A type alias can represent more than an object shape. It can describe unions, primitives, and tuples:

```typescript
type Status = "active" | "inactive";
type Coordinate = [number, number];
```

An interface mainly describes the structure of objects. Interfaces support declaration merging: declarations with the same name can contribute members to one interface.

```typescript
interface Profile {
    name: string;
}

interface Profile {
    age: number;
}
```

The resulting `Profile` requires both properties. Type aliases cannot be redeclared this way.

Interfaces commonly extend other interfaces using `extends`. Type aliases commonly combine object types using intersections:

```typescript
interface Employee extends Profile {
    employeeId: number;
}

type Admin = Profile & {
    permissions: string[];
};
```

## Which Should I Choose?

I would choose an interface for an object contract that should support extension or declaration merging. I would choose a type alias for unions, tuples, or other type expressions. For ordinary object shapes, either works, so consistency within the project also matters.

## Conclusion

Neither option is always better. Understanding their capabilities helps us select the one that expresses our intended data model clearly.