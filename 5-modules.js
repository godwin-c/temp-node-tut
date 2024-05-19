
const names = require('./1-names')
const sayHi = require('./2-utils')
const data = require('./3-alt-flav')

require('./4-mind-grenade');
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);

const os = require('os')
//get info about the user
const user = os.userInfo();

console.log(user);

console.log(`System uptime is : ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

const path = require('path');
const { fileURLToPath } = require('url');

console.log(path.sep);

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);