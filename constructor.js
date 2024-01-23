var Course = /** @class */ (function () {
    function Course(title, subtitle, creationDate) {
        this.title = title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Course.prototype.age = function () {
        var ageInMs = new Date().getTime() - this.creationDate.getTime();
        return Math.round(ageInMs / 1000 / 60 / 24);
    };
    return Course;
}());
var course = new Course("Typescript Bootcamp", "journey of learning Typescript", new Date(1, 23, 2024));
console.log(course.age());
