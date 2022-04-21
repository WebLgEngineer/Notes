namespace mod08 {
    function add(x: number, y: number): number;
    function add(x: string, y: string): string;
    function add(x: string): string;
    function add(x: unknown, y?: unknown): unknown {
        if (typeof x === "string" && typeof y === "string") {
            return `${x.toUpperCase()} ${y.toUpperCase()}`
        }
        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        if (typeof x === "string" && typeof y === "undefined") {
            return x.toLowerCase();
        }
    }
    console.log(add("aAa", "bBb"));
    console.log(add(100, 200));
    console.log(add("cCc")); 

}