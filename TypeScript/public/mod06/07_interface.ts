namespace mod06 {
    interface printDataFn<T> {
        (p: T): void;
    }
    
    let f1:printDataFn<number>;
    f1=i=>console.log(i+50);
    f1(100);

    let f2:printDataFn<string>;
    f2=s=>console.log(s.toUpperCase());
    f2("aAa");
}