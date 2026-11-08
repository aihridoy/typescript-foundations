const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}

const res = concatenateArrays([1, 2], [3, 4], [5]);
console.log(res); 