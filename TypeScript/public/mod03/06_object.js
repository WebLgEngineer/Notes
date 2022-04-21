let employee={
    name:"Mary",
    age:29
};
employee.id=1;
employee.getAge=function () {
    return this.age;
};
console.log(employee.id,employee.name,employee.getAge());