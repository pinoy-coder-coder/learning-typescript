class Course {
   
//member variable of typescript private and public
    constructor(
       public title:string,
       private subtitle:string,
       private creationDate: Date,
    ) {
        
    }

    changeTitle() {
        this.title = "";

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

    //accessing member variable public
    course.title = "in progress learning typescript";
    //accessing member variable public
    course.subtitle = "road to million trip";

console.log(course.age())