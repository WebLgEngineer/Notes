"use strict";
var mod02;
(function (mod02) {
    var Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["blue"] = 1] = "blue";
        Color[Color["green"] = 2] = "green";
    })(Color || (Color = {}));
    ;
    var c = Color.green;
    console.log(c); //2
    console.log(Color[c]); // "green"
    display(c);
    function display(color) {
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
})(mod02 || (mod02 = {}));
