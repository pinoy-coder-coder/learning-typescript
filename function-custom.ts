//function custom in typescript
interface Course {
    title: string;
    subtitle: string;
    lessonCount: number;
}

//custom side of function
type createCourse =(title: string, subtitle: string, lessonCount: number) => Course;

type OnCreateCourse =(korso: Course) => void;

const createCourse = (title: string, subtitle: string, lessonCount: number, callback: OnCreateCourse) =>  { 

    console.log(`this course are : ${title} ${subtitle} ${lessonCount}`);

    const korso = {
        title,
        subtitle,
        lessonCount
    };

    callback(korso);
    return korso;
    
}
