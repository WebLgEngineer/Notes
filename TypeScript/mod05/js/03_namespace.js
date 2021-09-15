"use strict";
var HR;
(function (HR) {
    class Employee {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        getInfo() {
            return `${this.id}: ${this.name}`;
        }
    }
    HR.Employee = Employee;
})(HR || (HR = {}));
//let emp=new HR.Employee(1,"Mary");
// import MyEmployee=HR.Employee;
// let emp=new MyEmployee(1,"John");
// console.log(emp.getInfo());
