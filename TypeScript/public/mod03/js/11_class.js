"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor() {
            this.id = 0;
            this.name = "none";
        }
    }
    let emp = new Employee();
    console.log(1, emp.id, emp.name);
    emp.id = 100;
    emp.name = "aaa";
    console.log(2, emp.id, emp.name);
})(mod03 || (mod03 = {}));
