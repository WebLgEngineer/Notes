namespace mod04{
    function sum(...numbers:number[]) { //rest parameter
        //numbers.forEach(i=>console.log(i));
        console.log(...numbers); //spread syntax

        let result=0;
        numbers.forEach(i=>result+=i);
        return result;
    }

    // sum(1,3,4,7);
    console.log(sum(1,3,4,7));
    console.log(sum(1,3,7));
    console.log(sum(1,3));
}