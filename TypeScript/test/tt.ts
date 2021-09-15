interface MyFunc{
    x:number;
    y:number;
}

function fun1(p:MyFunc){
    console.log(p.x,p.y);
}
fun1({x:100,y:200});