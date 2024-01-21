interface Course {
    readonly title: string,
    subtitle: string,
    lessonCount?: number,
}

const course1: unknown = {
    title: "typescript bootcamp",
    subtitle: "learning the typescript of journey",
    lessonCount: 10,
};

if (isCourse(course)) {
    
}

function isCourse(value: unknown):value is Course {

    const course1= value as Course;

    return course1?.title != null && course1?.subtitle != null;
}