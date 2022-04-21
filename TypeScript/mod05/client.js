var HR;
(function (HR) {
    var Employee = /** @class */ (function () {
        function Employee(id, name) {
            this.id = id;
            this.name = name;
        }
        Employee.prototype.getInfo = function () {
            return this.id + ": " + this.name;
        };
        return Employee;
    }());
    HR.Employee = Employee;
})(HR || (HR = {}));
//let emp=new HR.Employee(1,"Mary");
// import MyEmployee=HR.Employee;
// let emp=new MyEmployee(1,"John");
// console.log(emp.getInfo());
var HR;
(function (HR) {
    HR.projectName = "HR Management";
})(HR || (HR = {}));
///<reference path="03_namespace.ts" />
///<reference path="04_var.ts" />
var emp = new HR.Employee(1, "Mary");
console.log(emp.getInfo());
var MyEmployee = HR.Employee;
var emp2 = new MyEmployee(2, "John");
console.log(emp2.getInfo());
console.log(HR.projectName);
