let add=function(){
    console.log(arguments.length, ...arguments);
};
add(10,20);
console.log("-----------------------");

//es6 arrow function
let sub=()=>{
    console.log(arguments.length, ...arguments);
};
sub(30,40);

//==========================================

let obj={
    id:100,
    getId:function(){
        console.log(this.id);
    }
}
obj.getId(); //this -> obj
console.log("-----------------------");

let obj2={
    id:100,
    getId:()=>{
        console.log(this.id);
    }
}
obj2.getId(); //this -> global object