// export {};
namespace mod06 {
    interface Employee {
        id: number;
        name: string;
    }
    interface Sales {
        bonus: number;
    }
    type UcomSales = Employee & Sales;
    let s: UcomSales = {
        id: 1,
        name: 'Mary',
        bonus: 1000
    };
    console.log(s.id, s.name, s.bonus);

}