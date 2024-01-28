class Course {
   
    //member variable of typescript private and public
        constructor(
           private _title:string,
           private subtitle ="",
           private creationDate =new Date(2000,1,1)
        ) {
            
        }

        get title() {
            return this._title;
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
    
    const typescript = new Course("Typescript Bootcamp");
    
    console.log(typescript.title);

    const react = new Course("React for beginner");
    console.log(react.title)