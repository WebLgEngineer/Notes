namespace mod03{
    interface MyMath{
        (x:number,y:number):number;
    }

    let add:MyMath=function (i,j) {
        return i+j;
    };
    console.log(add(20,10));

    let sub:MyMath=(i,j)=>i-j;
    console.log(sub(20,10));
}