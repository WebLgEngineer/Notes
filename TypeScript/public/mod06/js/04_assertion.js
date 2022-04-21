"use strict";
var mod06;
(function (mod06) {
    let c = {
        walk() {
            console.log("Cat is walking");
        }
    };
    let p = {
        walk() {
            console.log("Person is walking");
        }, work() {
            console.log("Person is working");
        }
    };
    function getAnimal(a) {
        return a;
    }
    let a1 = getAnimal(c);
    let a2 = getAnimal(p);
    a1.walk();
    a2.walk();
    // if ((<Person>a1).work !== undefined) {
    //     (<Person>a1).work();
    // }
    // if ((<Person>a2).work !== undefined) {
    //     (<Person>a2).work();
    // }
    if ("work" in a1) {
        a1.work();
    }
    if ("work" in a2) {
        a2.work();
    }
})(mod06 || (mod06 = {}));
