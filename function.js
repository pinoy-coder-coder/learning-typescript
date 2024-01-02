function printCourse(title, subtitle, lessonCount) {
    console.log("this course are : ".concat(title, " ").concat(subtitle, " ").concat(lessonCount));
    return {
        title: title,
        subtitle: subtitle,
        lessonCount: lessonCount
    };
}
printCourse("learning typescript", "about typescript journey", 100);
