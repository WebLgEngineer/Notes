namespace mod04{
    interface MyMath{
        (i:number,j:number):number;
    }
    let add: MyMath;
    add = function(i,j){
        return i+j;
    }
    console.log(add(10,20));
    //箭頭凾式
    let sub: MyMath;
    sub=(i,j)=>i-j;
    console.log(sub(30,40));
}