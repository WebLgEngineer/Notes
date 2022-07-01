namespace mod06 {
    class GenericClass<T> {
        add!: (x: T, y: T) => T;
    }
    let c = new GenericClass<string>();
    c.add = (i, j) => i.toUpperCase() + "," + j.toLowerCase();
    console.log(c.add("aAa", "Baa"));
    
    let c2 = new GenericClass<number>();
    c2.add = (i, j) => i + j;
    console.log(c2.add(100, 50));

}