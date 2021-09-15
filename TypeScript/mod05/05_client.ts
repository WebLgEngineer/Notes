///<reference path="03_namespace.ts" />
///<reference path="04_var.ts" />

let emp=new HR.Employee(1,"Mary");
console.log(emp.getInfo());

import MyEmployee=HR.Employee;
let emp2=new MyEmployee(2,"John");
console.log(emp2.getInfo());

console.log(HR.projectName);