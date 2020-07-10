const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('🚀 Hello World!');
    res.end();
  })
  .listen(process.env.PORT || 3000);
