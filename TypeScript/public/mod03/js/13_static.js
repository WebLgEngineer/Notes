"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            Employee.count++;
        }
        getInfo() {
            return `${this.id}: ${this.name}, count:${Employee.count}`;
        }
    }
    Employee.count = 0;
    let emp = new Employee(1, "Mary");
    console.log(emp.getInfo());
    let emp2 = new Employee(2, "John");
    console.log(emp2.getInfo());
})(mod03 || (mod03 = {}));
