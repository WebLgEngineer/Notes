"use strict";
var mod02;
(function (mod02) {
    var coordinate;
    coordinate = [10, 20];
    console.log(coordinate[0], coordinate[1]);
    var data;
    data = [100, "aaa", new Date()];
    console.log(data[0] + 50, data[1].toUpperCase(), data[2].toLocaleDateString("zh-tw"));
})(mod02 || (mod02 = {}));
