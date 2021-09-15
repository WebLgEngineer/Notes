"use strict";
var mod02;
(function (mod02) {
    var Color;
    (function (Color) {
        Color[Color["red"] = 1] = "red";
        Color[Color["blue"] = 2] = "blue";
        Color[Color["green"] = 4] = "green";
    })(Color || (Color = {}));
    ;
    var c;
    c = Color.green | Color.blue;
    console.log(c);
})(mod02 || (mod02 = {}));
