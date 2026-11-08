const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    return new Promise<string>((resolve): void => {
        setTimeout((): void => {
            resolve("Access Granted");
        }, 1000);
    })
};

const res = await validateAgeAsync(15);
console.log(res);

