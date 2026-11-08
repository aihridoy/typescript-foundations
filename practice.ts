const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item: T): T[K] => item[key]);
}

const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];

const res = pluckValues(users, "role");
console.log(res); 