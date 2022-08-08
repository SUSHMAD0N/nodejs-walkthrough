const fs = require('fs');

const content = 'Hi Everone!';

fs.writeFile('./file.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});
