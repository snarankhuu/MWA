"use strict";
exports.__esModule = true;
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    ;
    University.prototype.graduation = function (year) {
        console.log("Graduationg " + this.dept + " " + year + " students");
    };
    return University;
}());
exports.University = University;
