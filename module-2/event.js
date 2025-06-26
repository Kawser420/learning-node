const EventEmitter = require("node:events");

class schoolBell extends EventEmitter {}

const sch = new schoolBell();
sch.on("ring", () => {
  console.log("Yahoo!! school class off now");
});

sch.emit("ring");
