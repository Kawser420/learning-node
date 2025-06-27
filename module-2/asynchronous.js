// Asynchronous
// 2. file read -> single thread -> event loop -> thread pool -> task completed

const fs = require("fs");

fs.readFile("./hello.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.log("Something Went Wrong", err);
    return;
  }
  console.log(data);
});
