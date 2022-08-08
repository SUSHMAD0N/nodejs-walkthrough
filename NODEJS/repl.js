const repl = require('repl');
repl.start();

// a Unix style prompt
const local = repl.start('$ ');


local.on('exit', () => {
    console.log('exiting repl');
    process.exit();
  });
  