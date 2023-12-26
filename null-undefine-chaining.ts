//type null and undefine
let title = null;
// console.log(title);

if (!title) {
    console.log("this is not null statement");
}
else{
    console.log("this a null statement");
}

//type chaining with the nested 
const course = {
    addtxt:{
        title:"learning typescript journey",
    }
}
// console.log(`the course: ${course.title}`);
if (course?.addtxt?.title) {
    console.log(`the course: ${course.addtxt.title}`);
}
else{
    console.log(`the course is hard`)
}

//type chaining with null coalescing
const korso = {
    addtxt: {
        titolo:"learning typescript journey"
    }
}

const balita = korso?.addtxt?.titolo ?? "no title found";

logCourseTitle(korso);

function logCourseTitle(korso) {

    //validation for error null coalecing
    if (!korso?.addtxt) {
        console.log("text field error!")
    }
    
    if (korso?.addtxt?.titolo) {
        console.log("the title is: " + balita);
    }

};