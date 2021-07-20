const os = require('os');
let n1 = process.argv[2];
let n2 = process.argv[3];
console.log(n1 * n2);
console.log(os.cpus());
console.log(os.platform());
console.log(os.freemem());
console.log(os.userInfo().username);