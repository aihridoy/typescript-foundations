const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value === true ? "Active" : "Inactive";
    }
};


const formatCoordinate = (coordinate: readonly [latitude: number, longitude: number, locationName: string]): string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
};


interface Course {
    title: string,
    students: number,
    isPublished: boolean
};

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const filteredCourses = courses.filter((course: Course): boolean =>
        course.isPublished === true && course.students >= minStudents);
    return filteredCourses;
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item: T): T[K] => item[key]);
};


class Employee {
    constructor(protected name: string, private baseSalary: number) { };

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    };
};

class Manager extends Employee {
    constructor(name: string, baseSalary: number, private department: string) {
        super(name, baseSalary);
    };

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    };
};


const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    };

    return new Promise<string>((resolve): void => {
        setTimeout((): void => {
            resolve("Access Granted");
        }, 1000);
    });
};