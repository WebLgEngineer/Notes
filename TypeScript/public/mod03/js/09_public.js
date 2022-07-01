"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }
    let emp = new Employee(1, "Mary");
    //console.log(emp.id,emp.name);
    console.log(emp.name);
})(mod03 || (mod03 = {}));
