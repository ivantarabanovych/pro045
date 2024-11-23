"use strict";
var student = ["ivan", 85.7];
function displayStudentInfo(student) {
    var name = student[0], grade = student[1];
    console.log("Student name: ".concat(name));
    console.log("Average Grade: ".concat(grade));
}
displayStudentInfo(student);
