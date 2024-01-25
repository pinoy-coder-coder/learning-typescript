class Course {
   
    //member variable of typescript private and public
        constructor(
           private _title:string,
           private subtitle:string,
           private creationDate: Date,
        ) {
            
        }
   
        //setter part
        set title(newTitle:string) {
            if (!newTitle ) {
                throw "This cannot be empty";
            }
            this._title = newTitle;
        }
    
        //getter part
        get age(){
            const ageInMs = new Date().getTime() - this.creationDate.getTime()
    
            return Math.round(ageInMs / 1000 / 60 / 24);
        }
    }
    
    const course = new Course(
        "Typescript Bootcamp", 
        "journey of learning Typescript", 
        new Date(2024,12,1));
    
    course.title = "New Course Sysllabus";
    
    console.log(course);