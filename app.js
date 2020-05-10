const http = require('http'); // node 내장 모듈 불러옴
const hostname = '127.0.0.1'; // localhost와 동일
const port = 3000;
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
  })
  .listen(port, hostname);
console.log('Server running at http://' + hostname + ':' + port);

console.log('test-ing');
