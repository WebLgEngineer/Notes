namespace mod02 {
    enum Color { red, blue, green };

    let c: Color = Color.green;
    console.log(c); //2
    console.log(Color[c]); // "green"

    display(c);

    function display(color: Color) {
        switch (color) {
            case Color.red:
                console.log("red...");
                break;
            case Color.blue:
                console.log("blue...");
                break;
            case Color.green:
                console.log("green...");
                break;
        }
    }
}