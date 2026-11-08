const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value === true ? "Active" : "Inactive"
    }
}

const res = processInput(false);
console.log(res);