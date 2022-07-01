import "isomorphic-fetch";
async function callApi() {
    let response = await fetch("https://www.google.com");
    let result = await response.text();
    console.log(result);
}
callApi();
console.log(1, "begin");
