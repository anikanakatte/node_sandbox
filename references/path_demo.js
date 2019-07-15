const path = require("path");

//display basename
console.log(path.basename(__filename));

//display dirname
console.log(path.dirname(__filename));

//display extension
console.log(path.extname(__filename));

//display path Object
console.log(path.parse(__filename));

//concatenate path
console.log(path.join(__dirname, "test", "index.html"));
