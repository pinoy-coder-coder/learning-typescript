interface Course {
    title: string,
    subtitle: string,
    lessonCount: number,
}

type CourseRecord =[string, string, number];

const courseRecord: CourseRecord = ["typescript", "typescript joruney", 100];

function createCourse(title:string, subtitle:string): CourseRecord {
    console.log(`Create a course title: ${title} ${subtitle}`);

    return[title, subtitle, 100]
}