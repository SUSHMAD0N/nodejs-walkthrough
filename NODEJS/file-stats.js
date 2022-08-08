const fs = require('fs');

fs.stat('./file.txt', (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log('stats',stats)
  // we have access to the file stats in `stats`
  stats.isFile(); // true
  stats.isDirectory(); // false
  stats.isSymbolicLink(); // false
  stats.size; // 1024000 //= 1MB
})