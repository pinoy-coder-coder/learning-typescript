const createCourse = (title, subtitle, lessonCount, callback) => {
    console.log(`this course are : ${title} ${subtitle} ${lessonCount}`);
    const korso = {
        title,
        subtitle,
        lessonCount
    };
    callback(korso);
    return korso;
};
