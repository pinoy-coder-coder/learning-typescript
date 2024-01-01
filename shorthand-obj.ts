//shorthand object
interface Course {
    title: string,
    subtitle: string,
    lessonCount: number,
}

//this part is the shorthand
const title = "typescript bootcamp",
subtitle ="learning typescript and buildin",
lessonCount = 10

const course: Course = {
    title,
    subtitle,
    lessonCount
}

console.log(course);