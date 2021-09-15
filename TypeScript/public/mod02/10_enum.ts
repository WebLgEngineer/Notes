namespace mod02{
    enum  Color{
        red = 0b1,
        blue =0b10,
        green =0b100
    };
    let c :Color;
    c = Color.green | Color.blue
    console.log(c);
}