var course1 = {
    title: "learning typescript",
    lessonCount: 100,
};
var course2 = {
    title: "Walking new life 2024",
    lessonCount: 1,
};
//typescript rest function passing unlimited argument
function printCount(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title);
    }
}
printCount("Welcome to typescript", course1, course2);
