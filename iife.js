((require, module, __dirname, __filename) => {
  let x = 10;
  ((name) => {
    let x = 10; // block scoop
    console.log(`Learning ${name}`);
  })("node");
  console.log(x);
  console.log(module);
  console.log(__dirname);
})(require, module, "./utils/add.js");
