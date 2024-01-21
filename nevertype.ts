let anyValue: any;

type CourseStatus1 = "draft" | "published";

let CourseStatus1 : CourseStatus1;

if (CourseStatus1 == "draft") {
    
}
else if (CourseStatus1 == "published") {
    
}
else{
    unexpectedError(CourseStatus1);
}
function unexpectedError(value:never){
    throw new Error(`unexpected error: ${value}`);
}