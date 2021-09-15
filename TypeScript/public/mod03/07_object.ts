let employee={
    name:"Mary",
    age:29,
    getAge:function(){}
};

employee.getAge=function () {
    return this.age;
};
console.log(employee.name,employee.getAge());