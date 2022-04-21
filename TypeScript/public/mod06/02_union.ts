namespace mod06 {
    function getColor(c: string | { color: string }|{test:string}) {
        if (typeof c === "string") { //Type Guard
            console.log(c.toUpperCase()); //Narrowing
        } else if("color" in c) {
            console.log(c.color+"...");
        } else{
            console.log(c.test);
        }
    }
    getColor("green");
    getColor({color:"red"});
    getColor({test:"aaaa"});

}