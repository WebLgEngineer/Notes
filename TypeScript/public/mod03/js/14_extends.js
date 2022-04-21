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
    class Sales extends Employee {
        constructor(id, name, bonus) {
            super(id, name);
            this.bonus = bonus;
        }
    }
    let emp = new Sales(1, "Mary", 3000);
    console.log(emp.getInfo(), emp.bonus);
})(mod03 || (mod03 = {}));
