var Course = /** @class */ (function () {
    //member variable of typescript private and public
    function Course(_title, subtitle, creationDate) {
        if (subtitle === void 0) { subtitle = ""; }
        if (creationDate === void 0) { creationDate = new Date(2000, 1, 1); }
        this._title = _title;
        this.subtitle = subtitle;
        this.creationDate = creationDate;
    }
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
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
var typescript = new Course("Typescript Bootcamp");
console.log(typescript.title);
var react = new Course("React for beginner");
console.log(react.title);
