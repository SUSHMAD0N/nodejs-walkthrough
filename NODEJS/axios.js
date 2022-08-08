const axios = require('axios');
const http = require('http')

axios.post('https://whatever.com/todos', {
  todo: 'Buy the milk',
});

const server = http.createServer(async (req, res) => {
    const buffers = [];
  
    for await (const chunk of req) {
      buffers.push(chunk);
    }
  
    const data = Buffer.concat(buffers).toString();
  
    console.log(JSON.parse(data).todo); // 'Buy the milk'
    res.end();
  });
  