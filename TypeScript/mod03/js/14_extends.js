"use strict";
var mod03;
(function (mod03) {
    class Employee {
        //將物件加入private直接變成屬性 不需要加上 this.id = id;
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }
    //繼承Employee
    class Sales extends Employee {
        constructor(id, name, bonus) {
            super(id, name); //直接存父類別屬性
            this.bonus = bonus;
        }
    }
    let emp = new Sales(1, "Mary", 3000);
    console.log(emp.getInfo(), emp.bonus); //無法使用emp.id 與 emp.name 因為設有private
})(mod03 || (mod03 = {}));
//# sourceMappingURL=14_extends.js.map