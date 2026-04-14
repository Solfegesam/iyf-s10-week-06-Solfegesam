console.log("1 - Start");

setTimeout(() => {
    console.log("2 - Timeout 0ms");
}, 0);

console.log("3 - Middle");

setTimeout(() => {
    console.log("4 - Timeout 100ms");
}, 100);

console.log("5 - End");
