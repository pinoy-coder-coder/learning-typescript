var Course = /** @class */ (function () {
    //member variable of typescript private and public
    function Course(_title, subtitle, creationDate) {
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course.prototype, "title", {
        //setter part
        set: function (newTitle) {
            if (!newTitle) {
                throw "This cannot be empty";
            }
            this._title = newTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "age", {
        //getter part
        get: function () {
            var ageInMs = new Date().getTime() - this.creationDate.getTime();
            return Math.round(ageInMs / 1000 / 60 / 24);
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var course = new Course("Typescript Bootcamp", "journey of learning Typescript", new Date(2024, 12, 1));
course.title = "New Course Sysllabus";
console.log(course);
