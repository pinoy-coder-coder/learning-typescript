var _a, _b, _c;
//type null and undefine
var title = null;
// console.log(title);
if (!title) {
    console.log("this is not null statement");
}
else {
    console.log("this a null statement");
}
//type chaining with the nested 
var course = {
    addtxt: {
        title: "learning typescript journey",
    }
};
// console.log(`the course: ${course.title}`);
if ((_a = course === null || course === void 0 ? void 0 : course.addtxt) === null || _a === void 0 ? void 0 : _a.title) {
    console.log("the course: ".concat(course.addtxt.title));
}
else {
    console.log("the course is hard");
}
//type chaining with null coalescing
var korso = {
    addtxt: {
        titolo: "learning typescript journey"
    }
};
var balita = (_c = (_b = korso === null || korso === void 0 ? void 0 : korso.addtxt) === null || _b === void 0 ? void 0 : _b.titolo) !== null && _c !== void 0 ? _c : "no title found";
logCourseTitle(korso);
function logCourseTitle(korso) {
    var _a, _b;
    //validation for error null coalecing
    if (!((_a = korso === null || korso === void 0 ? void 0 : korso.addtxt) === null || _a === void 0 ? void 0 : _a.titolo)) {
        console.log("text field error!");
    }
    if ((_b = korso === null || korso === void 0 ? void 0 : korso.addtxt) === null || _b === void 0 ? void 0 : _b.titolo) {
        console.log("the title is: " + balita);
    }
}
;
