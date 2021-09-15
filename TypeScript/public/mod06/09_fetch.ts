import "isomorphic-fetch";

fetch("https://www.google.com")
    .then(response=>response.text())
    .then(console.log);
console.log(1,"begin");