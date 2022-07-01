namespace mod04{
    let add:Function=function (i:number,j:number) {
        return i+j;
    };
    console.log(add(10,20));

    let sub:Function=(i:number, j:number)=>i-j;
    console.log(sub(30,40));
}