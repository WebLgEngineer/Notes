namespace mod03{
    interface MyFunc{
        x:number;
        y?:number;
    }
 
    //es6:arrow function
    let func3=(p:MyFunc)=>{
        if (p.y===undefined) {
            console.log(p.x);
        } else {
            console.log(p.x,p.y);
        }      
    };
  
    func3({x:500,y:600});  
    func3({x:700});         
}