"use strict";
var mod03;
(function (mod03) {
    class Employee {
        constructor(id, name, age) {
            this.id = id;
            this.name = name;
            this.age = 0;
            this.Age = age;
        }
        get Age() {
            return this.age;
        }
        set Age(value) {
            if (value > 0) {
                this.age = value;
            }
        }
    }
    let emp = new Employee(1, "Mary", 33);
    console.log(emp.id, emp.name, emp.Age);
    let emp2 = new Employee(2, "John", -22);
    console.log(emp2.id, emp2.name, emp2.Age);
})(mod03 || (mod03 = {}));
