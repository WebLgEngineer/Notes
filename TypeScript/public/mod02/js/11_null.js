"use strict";
var mod02;
(function (mod02) {
    var i;
    console.log(i === undefined); //true
    var j = null;
    console.log(j === null); //true
    // let m:number=null;
    // console.log(m);
    var m = null; //union type
    console.log(m);
    // let n:number;
    // console.log(n); //error
})(mod02 || (mod02 = {}));
