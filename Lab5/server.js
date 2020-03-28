var   http 	= require('http');
var   url  	= require('url');
var   fs	= require('fs');
var   io 	= require('socket.io');

const port = 3000;
const server = http.createServer((req, res) => {
	var path = url.parse(req.url).pathname;
  	switch (path) {
    case '/':
      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, { 'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' })
        res.write(data, 'utf8');
        res.end();
      });
      break;

    default: send404(res);
  }
}),

  send404 = function (res) {
    res.writeHead(404);
    res.write('404');
    res.end();
  };

  server.listen(port, function() {
  console.log(`Server running at port ${port}`); 
});

	// Setup socket.io
	var io = io.listen(server);

	// Setup socket listeners   
	io.on('connection',function(client) {

	  console.log('New user connected!');

	  client.on('connected', () => {
	    console.log('Connection accepted.');
	  });

	  client.on('disconnected', () => {
	    console.log('Disconected...');
	  });

	  client.on('send', (msg) => {
	    console.log(`Received message: ${msg} - from client`);
	  });
});

 

