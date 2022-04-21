namespace mod03{
    class Employee {
       
        constructor(private id:number,public name:string) {
         
        }
        getInfo(){
            return `${this.id}: ${this.name}`;
        }
    }
    let emp=new Employee(1,"Mary");
    // console.log(emp.id,emp.name);
    console.log(emp.name);
  
}