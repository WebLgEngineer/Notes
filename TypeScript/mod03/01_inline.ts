namespace mod03 {
    class Employee {
        static count = 0;
        private age = 0;
        constructor(public id:number, public name: string, age: number) {
            this.Age = age;
            Employee.count++; //全部的 class 共用的變數
        }

        get Age() {
            return this.age;
        }

        set Age(value: number) {
            if (value > 0) {
                this.age = value
            }
        }

    }
    let emp = new Employee(1, "Mary", 33);
    console.log(emp.id, emp.name, emp.Age);// 1 Mary 33

    let emp2 = new Employee(2, "John", -22);
    console.log(emp2.id, emp2.name, emp2.Age); // 2 John 0
}