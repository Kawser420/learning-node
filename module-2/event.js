const EventEmitter = require("node:events");

class schoolBell extends EventEmitter {}

const sch = new schoolBell();
sch.on("ring", () => {
  console.log("Yahoo!! school class off now");
});

const oneMoreClass = new schoolBell();
sch.on("ring", () => {
  console.log("ringing but one more call left");
});

const broken = new schoolBell();
sch.on("broken", () => {
  console.log("broken the ring bell");
});

sch.emit("ring");
sch.emit("broken");
