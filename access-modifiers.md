# Access Modifiers in TypeScript

## Introduction

Access modifiers control where class properties and methods can be accessed. TypeScript provides `public`, `private`, and `protected`. It also provides `readonly`, which controls reassignment rather than visibility.

## Public

Public members can be accessed inside the class, in subclasses, and outside the class. Class members are public by default.

```typescript
class Student {
    public name: string = "Rakib";
}

const student = new Student();
student.name = "Sadia";
```

## Private

Private members can only be accessed within the class that declares them. They help keep internal details behind methods that control how those details are used.

```typescript
class Account {
    private balance: number = 0;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }
}
```

Code outside `Account` cannot directly access `balance` through normal TypeScript type checking.

## Protected

Protected members are accessible within their declaring class and its subclasses, but not from outside those classes.

```typescript
class Employee {
    protected name: string = "Alice";
}

class Manager extends Employee {
    getName(): string {
        return this.name;
    }
}
```

Unlike a private member, `name` is available inside the subclass.

## Readonly

A readonly property can be initialized when declared or assigned in the constructor. TypeScript prevents reassignment afterward.

```typescript
class Product {
    constructor(public readonly id: number) {}
}

const product = new Product(101);
// product.id = 202; // TypeScript error
```

Here, `id` is publicly readable but cannot be reassigned. However, readonly does not deeply freeze objects or arrays stored in a property.

## Conclusion

These modifiers express a class's intended boundaries. Public exposes members, private restricts them to one class, protected includes subclasses, and readonly prevents reassignment. TypeScript checks these restrictions during compilation; they do not automatically provide runtime security.