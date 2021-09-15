"use strict";
async function callApi() {
    // let response=await fetch("https://www.google.com");
    let response = await fetch("02_union.ts");
    let result = await response.text();
    console.log(result);
}
callApi();
console.log(1, "begin");
