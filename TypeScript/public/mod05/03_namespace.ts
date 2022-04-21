namespace HR{
  export class Employee {
       constructor(public id:number,public name:string) {
           
       }
       getInfo(){
           return `${this.id}: ${this.name}`;
       }
   }
}

//let emp=new HR.Employee(1,"Mary");
// import MyEmployee=HR.Employee;
// let emp=new MyEmployee(1,"John");
// console.log(emp.getInfo());