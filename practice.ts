interface Course {
    title: string,
    students: number,
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const filteredCourses = courses.filter((course: Course): boolean =>
        course.isPublished === true && course.students >= minStudents);
    return filteredCourses;
}

const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

const res = getPopularCourses(courses, 80);
console.log(res); 