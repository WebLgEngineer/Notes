namespace mod04{
    function add(i:number,j?:number) { //j:number|undefined (union type)
        if (typeof j==="undefined") { //typeof, Type Guard(runtime)
            return i;
        } else {
            return i+j; //j:number, narrowing
        }       
    }
    console.log(add(10,20));
    console.log(add(50));
}