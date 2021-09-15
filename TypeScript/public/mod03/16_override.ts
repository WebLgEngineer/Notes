namespace mod03{
    class Employee {
        constructor(protected id:number, protected name:string) {
            
        }
        getInfo(){
            return `${this.id}: ${this.name}`;
        }
    }

    class Sales extends Employee {
        constructor(id:number,name:string, public bonus:number) {
            super(id,name);
        }
        // getInfo(){
        //     return `${this.id}: ${this.name}: ${this.bonus}`;
        // }

        getInfo(){
            return `${super.getInfo()}: ${this.bonus}`;
        }
    }
    let emp=new Sales(1,"Mary",3000);
    console.log(emp.getInfo());
}