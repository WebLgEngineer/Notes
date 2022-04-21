namespace mod03{
    interface MyFunc{
        x:number;
        y:number;
    }

    //function declaration
    function func1(p:MyFunc) {
        console.log(p.x, p.y);
    }

    //function expression
    let func2=function (p:MyFunc) {
        console.log(p.x,p.y);   
    };

    //es6:arrow function
    let func3=(p:MyFunc)=>{
        console.log(p.x,p.y);
    };

    func1({x:100,y:200});
    func2({x:300,y:400});
    func3({x:500,y:600});       
}