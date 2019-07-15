const file = require("fs");
const path = require("path");

//create folder
// file.mkdir(path.join(__dirname, "test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

//create and write file
// file.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world!",
//   err => {
//     if (err) throw err;
//     console.log("File created and written..");

//     //appending data to the file
//     file.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "I love Node JS!",
//       err => {
//         if (err) throw err;
//         console.log("File appended....");
//       }
//     );
//   }
// );

//write file overwrites the previous content in the file.

//read file, the second parameter is character encoding. If it is not specified, buffer data will be displayed.
file.readFile(
  path.join(__dirname, "test", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

//rename file
file.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  err => {
    if (err) throw err;
    console.log("File renamed....");
  }
);
