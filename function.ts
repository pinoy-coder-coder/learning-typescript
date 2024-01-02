interface Course {
    title: string,
    subtitle: string,
    lessonCount: number,
}

function printCourse(title: string, subtitle: string, lessonCount: number): Course  { 

    console.log(`this course are : ${title} ${subtitle} ${lessonCount}`);

    return {
        title,
        subtitle,
        lessonCount
    }
}
printCourse("learning typescript", "about typescript journey", 100)