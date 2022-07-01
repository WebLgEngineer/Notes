"use strict";
var mod02;
(function (mod02) {
    var i = 10;
    console.log(i);
    function sayHi(name) {
        return "Hi " + name;
    }
    var result = sayHi("John");
    console.log(result);
})(mod02 || (mod02 = {}));
