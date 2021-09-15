export default class Employee {
    constructor(public id:number,public name:string) {
        
    }
    getInfo(){
        return `${this.id}: ${this.name}`;
    }
}

export let projectName = "HR Management";