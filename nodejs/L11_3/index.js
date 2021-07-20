const fs = require('fs');

fs.writeFile("hello.txt", "hello world", e => {});
fs.writeFileSync("hello.txt", "Hello world");

fs.appendFileSync("hello.txt", "hello world");
fs.appendFile("hello.txt", "hello world", e => {});

let text = fs.readFileSync("hello.txt", "utf8");
console.log(text);

fs.readFile("hello.txt", "utf8", (e, text) => {
    console.log(text);
});

fs.unlinkSync("hello.txt");
fs.unlink("hello.txt", e => {});