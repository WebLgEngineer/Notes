namespace mod02 {
    let i: undefined;
    console.log(i === undefined); //true
    let j: null = null;
    console.log(j === null); //true

    // let m:number=null;
    // console.log(m);
    let m:number|null=null; //union type
    console.log(m);

    // let n:number;
    // console.log(n); //error
}