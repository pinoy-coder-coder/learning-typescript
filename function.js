function printCourse(title, subtitle, lessonCount) {
    console.log(`this course are : ${title} ${subtitle} ${lessonCount}`);
    return {
        title,
        subtitle,
        lessonCount
    };
}
printCourse("learning typescript", "about typescript journey", 100);
