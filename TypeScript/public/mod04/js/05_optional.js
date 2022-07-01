"use strict";
var mod04;
(function (mod04) {
    function add(i, j) {
        if (typeof j === "undefined") { //typeof, Type Guard(runtime)
            return i;
        }
        else {
            return i + j; //j:number, narrowing
        }
    }
    console.log(add(10, 20));
    console.log(add(50));
})(mod04 || (mod04 = {}));
