// Synchronous
// 1. file read / I/o / intensive task ---> single thread ----> not go single thread pool---->

const fs = require("fs");

const data = fs.readFileSync("./hello.txt", { encoding: "utf8" });

console.log(data);
