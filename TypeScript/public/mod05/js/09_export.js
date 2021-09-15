export class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getInfo() {
        return `${this.id}: ${this.name}`;
    }
}
export let projectName = "HR Management";
