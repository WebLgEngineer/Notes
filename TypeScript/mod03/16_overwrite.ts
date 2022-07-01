namespace mod03 {
    class Employee {
        //將屬性改成protected 才能存取
        constructor(protected id: number, protected name: string) {

        }
        getInfo() {
            return `${this.id}:${this.name}`;
        }
    }
    //繼承Employee
    class Sales extends Employee {
        constructor(id: number, name: string, public bonus: number) {
            super(id, name); //直接存父類別屬性
        }
        getInfo2() {
            return `${super.getInfo()}:${this.bonus}:${this.id}`;
        }
    }

    let emp = new Sales(1, "Mary", 3000);
    console.log(emp.getInfo2());
}