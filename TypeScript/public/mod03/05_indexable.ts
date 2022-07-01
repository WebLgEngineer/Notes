namespace mod03 {
    interface DepartmentArray {
       readonly [index: number]: string;
       length:number;
    }
    let ar: DepartmentArray = ['IT', 'Sales', 'Accounting'];
   // ar[0] = "demo";
    console.log(ar[0], ar[1], ar[2]);

    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        console.log(element);
    }
}