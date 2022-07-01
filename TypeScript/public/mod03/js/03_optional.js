"use strict";
var mod03;
(function (mod03) {
    //es6:arrow function
    let func3 = (p) => {
        if (p.y === undefined) {
            console.log(p.x);
        }
        else {
            console.log(p.x, p.y);
        }
    };
    func3({ x: 500, y: 600 });
    func3({ x: 700 });
})(mod03 || (mod03 = {}));
