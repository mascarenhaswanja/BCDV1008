const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  // response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Slot Machine');

  // request
  if  (req.url === '/play') {
  	console.log('playing..');
  }
  else {  
  	if  (req.url === '/spin') {
  		console.log('spinning..');
  	}
  	else {
  		console.log("Please play or spin");
  	}
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});