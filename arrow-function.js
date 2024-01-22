//typescript with arrow function
function saveCourse(course, callback) {
    setTimeout(() => {
        callback("success");
    }, 1000);
}
saveCourse({ title: "typescript" }, () => console.log("save successfully"));
