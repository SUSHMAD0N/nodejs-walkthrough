const doSomething = () => console.log('test');
const measureDoingSomething = () => {
  console.time('doSomething()');
  // do something, and measure the time it takes
  doSomething();
  console.timeEnd('doSomething()');
};
measureDoingSomething();
console.log('\x1b[33m%s\x1b[0m', 'hi!');

const chalk = require('chalk');

console.log(chalk.red('hi!'));

