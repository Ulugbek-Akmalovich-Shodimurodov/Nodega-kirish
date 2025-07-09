const os = require('os');

// Bo'sh xotirani olish (baytda)
const freemem = os.freemem();

// Foydalanuvchi haqidagi ma'lumot
const userInfo = os.userInfo();

console.log('Free Memory:', freemem, 'bytes');
console.log('User Info:', userInfo);



// const path = require('node:path');

// console.log(__filename);

// const parseObj = path.parse(__filename);

// console.log(parseObj);
