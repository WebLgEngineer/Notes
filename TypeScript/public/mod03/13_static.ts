namespace mod03{
    class Employee {  
            static count=0;   
            constructor(public id: number,public  name: string) {
                Employee.count++;
            }
            getInfo() {
                return `${this.id}: ${this.name}, count:${Employee.count}`;
            }
        }
        let emp = new Employee(1, "Mary");  
        console.log(emp.getInfo());
        let emp2 = new Employee(2, "John");  
        console.log(emp2.getInfo());        
}