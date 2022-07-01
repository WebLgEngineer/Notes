namespace mod03{
    class Employee {
        id:number;
        name:string;
        constructor(id:number,name:string) {
            this.id=id;
            this.name=name;
        }
        getInfo(){
            return `${this.id}: ${this.name}`;
        }
    }
    let emp=new Employee(1,"Mary");
    console.log(emp.getInfo());
}