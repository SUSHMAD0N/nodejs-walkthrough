const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('Dataaaaaaaa',data);
} catch (err) {
  console.error(err);
}
