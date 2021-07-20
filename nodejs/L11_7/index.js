const fs = require("fs");

// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Hello world");
// writeableStream.end("end");
// let readableStream = fs.createReadStream("hello.txt", "utf8");

// readableStream.on("data", function (line) {
//     console.log(line);
// });

let readableStream = fs.createReadStream("hello.txt", "utf8");

let writeableStream = fs.createWriteStream("hello2.txt");

readableStream.pipe(writeableStream);