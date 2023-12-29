//typescript with arrow function
function saveCourse(course, callback) {
    setTimeout(function () {
        callback("success");
    }, 1000);
}
saveCourse({ title: "typescript" }, function () { return console.log("save successfully"); });
