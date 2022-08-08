let buf = Buffer.from('Hey!');
console.log(buf)

 buf = Buffer.alloc(1024);
 console.log(buf)
  buf = Buffer.allocUnsafe(1024);

  console.log(buf)

 buf = Buffer.from('Hey!');
console.log(buf[0]); // 72
console.log(buf[1]); // 101
console.log(buf[2]); // 121

console.log(buf.toString());
 buf = Buffer.from('Hey!');
console.log(buf.length);


 buf = Buffer.from('Hey!');
for (const item of buf) {
  console.log(item); // 72 101 121 33
}


 buf = Buffer.alloc(4);
buf.write('Susshma!');

console.log(buf.toString())

 buf = Buffer.from('Hey!');
buf.subarray(0).toString(); // Hey!
const slice = buf.subarray(0, 2);
console.log(slice.toString()); // He
buf[1] = 111; // o
console.log(slice.toString()); // Ho


 buf = Buffer.from('Hey!');
let bufcopy = Buffer.alloc(4); // allocate 4 bytes
bufcopy.set(buf);

 buf = Buffer.from('Hey?');
 bufcopy = Buffer.from('Moo!');
bufcopy.set(buf.subarray(1, 3), 1);
console.log(bufcopy.toString()); // 'Mey!'
