//typescript with arrow function
function saveCourse(course, callback: Function) {
    setTimeout(() => {
        callback("success")
    }, 1000);
}

saveCourse({title:"typescript"}, 
    () => console.log("save successfully"));