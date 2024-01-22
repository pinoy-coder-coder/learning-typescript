const course1 = {
    title: "learning typescript",
    lessonCount: 100,
};
const course2 = {
    title: "Walking new life 2024",
    lessonCount: 1,
};
//typescript rest function passing unlimited argument
function printCount(message, ...courses) {
    console.log(message);
    for (let course of courses) {
        console.log(course.title);
    }
}
printCount("Welcome to typescript", course1, course2);
