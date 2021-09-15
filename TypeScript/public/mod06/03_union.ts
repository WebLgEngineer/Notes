namespace mod06 {
    interface Cat {
        walk(): void;
    }
    interface Person {
        walk(): void;
        work(): void;
    }
    let c: Cat = {
        walk() {
            console.log("Cat is walking");
        }
    };
    let p: Person = {
        walk() {
            console.log("Person is walking");
        }, work() {
            console.log("Person is working")
        }
    };
    function getAnimal(a: any): Cat | Person {
        return a;
    }
    let a1 = getAnimal(c);
    let a2 = getAnimal(p);
    a1.walk();
    a2.walk();
}