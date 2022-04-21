"use strict";
var mod03;
(function (mod03) {
    //function declaration
    function func1(p) {
        console.log(p.x, p.y);
    }
    //function expression
    let func2 = function (p) {
        console.log(p.x, p.y);
    };
    //es6:arrow function
    let func3 = (p) => {
        console.log(p.x, p.y);
    };
    func1({ x: 100, y: 200 });
    func2({ x: 300, y: 400 });
    func3({ x: 500, y: 600 });
})(mod03 || (mod03 = {}));
