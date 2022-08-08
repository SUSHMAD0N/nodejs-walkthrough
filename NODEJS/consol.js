console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints error message and stack trace to stderr:
//   Error: Whoops, something bad happened
//     at [eval]:5:15
//     at Script.runInThisContext (node:vm:132:18)
//     at Object.runInThisContext (node:vm:309:38)
//     at node:internal/process/execution:77:19
//     at [eval]-wrapper:6:22
//     at evalScript (node:internal/process/execution:76:60)
//     at node:internal/main/eval_string:23:3

 name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);

console.assert(true, 'does nothing');

console.assert(false, 'Whoops %s work', 'didn\'t');
// Assertion failed: Whoops didn't work

console.assert();
// Assertion failed

console.count('abc');
 console.countReset('abc');
 console.count('abc');


 const code = 5;
console.error('error #%d', code);
console.error('error', code);

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.time('100-elements');
for (let i = 0; i < 100; i++) {}
console.timeEnd('100-elements');


console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints "process: 365.227ms 42".
doExpensiveProcess2(value);
console.timeEnd('process');

function expensiveProcess1(){
    return 42;
}
function doExpensiveProcess2(value){
    console.timeEnd(value);

}

const obj = {
    name: 'joe',
    age: 35,
    person1: {
      name: 'Tony',
      age: 50,
      person2: {
        name: 'Albert',
        age: 21,
        person3: {
          name: 'Peter',
          age: 23,
        },
      },
    },
  };
  console.log(obj);

console.log(JSON.stringify(obj, null, 2));

require('util').inspect.defaultOptions.depth = null;

console.log(obj);

// `depth` tells util.inspect() how many times to recurse while formatting the object, default is 2
console.dir(obj, {
    depth: 10,
  });
  
  // ...or pass `null` to recurse indefinitely
  console.dir(obj, {
    depth: null,
  });

  
  // %o tells console.log() to string-format and log obj in its place
console.log('%o', obj);
