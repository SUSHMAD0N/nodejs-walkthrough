const querystring = require('querystring');

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }))

console.log(querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
{ encodeURIComponent: gbkEncodeURIComponent }))


function gbkEncodeURIComponent (){
    console.log('Test')
}