const course1 = {
    title: "typescript bootcamp",
    subtitle: "learning the typescript of journey",
    lessonCount: 10,
};
if (isCourse(course)) {
}
function isCourse(value) {
    const course1 = value;
    return (course1 === null || course1 === void 0 ? void 0 : course1.title) != null && (course1 === null || course1 === void 0 ? void 0 : course1.subtitle) != null;
}
