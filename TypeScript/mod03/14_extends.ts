namespace mod03 {
    class Employee {
                //將物件加入private直接變成屬性 不需要加上 this.id = id;
        constructor(private id: number, private name: string) {

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
    }

    let emp = new Sales(1, "Mary", 3000);
    console.log(emp.getInfo(), emp.bonus); //無法使用emp.id 與 emp.name 因為設有private
}