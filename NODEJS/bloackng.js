const fs = require('fs');

const data = fs.readFileSync('./file.txt'); // blocks here until file is read
console.log('Data',data.toString());
console.log("non-bloacking ");// will run after console.log


