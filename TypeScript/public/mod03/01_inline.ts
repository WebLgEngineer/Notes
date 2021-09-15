namespace mod03{
    //function declaration
    function func1(p:{x:number;y:number}) {
        console.log(p.x,p.y);
    }

    //function expression
    let func2=function (p:{x:number;y:number}) {
        console.log(p.x,p.y);   
    };

    //es6:arrow function
    let func3=(p:{x:number;y:number})=>{
        console.log(p.x,p.y);
    };

    func1({x:100,y:200});
    func2({x:300,y:400});
    func3({x:500,y:600});       
}