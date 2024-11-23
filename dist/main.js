"use strict";
var user = {
    id: 1,
    name: "Ivan",
    email: "ivanribak@gmail.com",
    age: 25
};
function printUserInfo(user) {
    console.log("User info: \n        ID: ".concat(user.id, "\n        Name: ").concat(user.name, "\n        Email: ").concat(user.email, "\n        Age: ").concat(user.age !== null ? user.age : "Not provided", "\n        "));
}
printUserInfo(user);
