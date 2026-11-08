const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
}


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