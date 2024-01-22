let anyValue;
let CourseStatus1;
if (CourseStatus1 == "draft") {
}
else if (CourseStatus1 == "published") {
}
else {
    unexpectedError(CourseStatus1);
}
function unexpectedError(value) {
    throw new Error(`unexpected error: ${value}`);
}
