namespace mod02 {
    let s: string = "aaa";
    console.log(s.toUpperCase());
    let s2: any = "bbb";
    console.log(s2.toUpperCase());

    let n:number=s2;
    console.log(n+50);

    let s3: unknown = "bbb";
//    console.log(s3.toUpperCase()); //error

   // let m:number=s3; //unknown->number (x)
}