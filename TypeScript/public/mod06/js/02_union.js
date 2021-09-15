"use strict";
var mod06;
(function (mod06) {
    function getColor(c) {
        if (typeof c === "string") { //Type Guard
            console.log(c.toUpperCase()); //Narrowing
        }
        else if ("color" in c) {
            console.log(c.color + "...");
        }
        else {
            console.log(c.test);
        }
    }
    getColor("green");
    getColor({ color: "red" });
    getColor({ test: "aaaa" });
})(mod06 || (mod06 = {}));
