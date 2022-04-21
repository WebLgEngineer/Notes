"use strict";
var mod06;
(function (mod06) {
    class GenericClass {
    }
    let c = new GenericClass();
    c.add = (i, j) => i.toUpperCase() + "," + j.toLowerCase();
    console.log(c.add("aAa", "Baa"));
    let c2 = new GenericClass();
    c2.add = (i, j) => i + j;
    console.log(c2.add(100, 50));
})(mod06 || (mod06 = {}));
