namespace mod06 {
    interface MyFunc{
        length:number;
    }
    function printData<T extends MyFunc>(p: T): void {
        console.log(p.length);
    }
    printData<string>("aaa");
    printData<number[]>([1,2,3,4,5,7]);

}