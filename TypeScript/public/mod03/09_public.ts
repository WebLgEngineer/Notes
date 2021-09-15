namespace mod03{
    class Employee {
        private id:number;
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
    //console.log(emp.id,emp.name);
    console.log(emp.name);
  
}