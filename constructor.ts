class Course {
    title:string;
    subtitle:string;
    creationDate: Date;

    constructor(
        title:string,
        subtitle:string,
        creationDate: Date,
    ) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }

    age(){
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        return Math.round(ageInMs / 1000 / 60 / 24);
    }
}

const course = new Course(
    "Typescript Bootcamp", 
    "journey of learning Typescript", 
    new Date(1,23,2024));

console.log(course.age())