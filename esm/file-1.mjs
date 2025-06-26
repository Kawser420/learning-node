// file-2 import
import { x, multiply } from "./file-2.mjs";
import add from "./file-2.mjs";

// file-3 import
import {
  x as X3,
  add as ADD3,
  multiply as MULTIPLY3,
  y as Y3,
} from "./file-3.mjs";

// file-2 work--------------- Aliasing
console.log(x);
console.log(add(3, 100));
console.log(multiply);
// file 3 work--------> Aliasing
console.log(X3);
console.log(ADD3(20, 10, 70));
console.log(MULTIPLY3(100, 100));
console.log(Y3);
