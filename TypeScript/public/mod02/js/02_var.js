"use strict";
var mod02;
(function (mod02) {
    var i = 10;
    var j = 20; //type inference
    //j="30"; //strongly typed, error
    var m; //any
    m = 30;
    m = '20';
    var n;
    n = 30;
})(mod02 || (mod02 = {}));
