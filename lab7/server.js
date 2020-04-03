const   http 	= require('http'),
        url  	= require('url'),
        fs	  = require('fs'),
        io  	= require('socket.io');
 
const mongoose    = require('mongoose');
const Restaurant  = require('./model/Restaurant');
const Order       = require('./model/Order');

const connectionString = 'mongodb+srv://wanja:wanja@cluster0-t8c4x.mongodb.net/Restaurants?retryWrites=true&w=majority'

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log('Mongoose connect successfully');
    },
  error => {
      console.log(`Mongoose could not connect to the database: ${error}`);
    }
  );

const server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;
    switch (path) {
    case '/':
      fs.readFile(__dirname + '/index.html', function (err, data) {
        if (err) return send404(res);
        res.writeHead(200, { 
          'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' 
        });
        res.write(data, 'utf8');
        res.end();
      });
      break;

    default: send404(res);
  }
});

const send404 = function (res) {
    res.writeHead(404);
    res.write('404');
    res.end();
};

const port = 3000;
 server.listen(port, function() {
    console.log(`Server running at port ${port}`); 
});

	// Setup socket.io
const ioServer = io.listen(server);

	// Setup socket listeners  
  // The client establish a new socket in the channel 
ioServer.on('connection',function(socket) {
    // client object, new client connection
  console.log('Connection accepted.');  // can have multiple clients

 // event listeners
  socket.on('disconnect', function() {
    console.log('Disconnected...');
  });

  socket.on('get-restaurants',() => {
    console.log('server get-restaurants called');
      
    //Restaurant.find({},(error, documents) => {
    Restaurant.find( { $and: [ { city: 'Queens', cuisine: 'Delicatessen' } ] },(error, documents) => {    if (error) console.log(`Error occurred on Restaurant.find(): ${error}`);
        else {
          console.log(`Restaurant.find() returned documents: ${documents}`)
          const data = documents.map(x =>  {
           return {
              name: x.name,
              cuisine: x.cuisine
            }
        });
        socket.emit("restaurants-data", data);
      //   socket.emit("restaurants-data", ["pizza", "chicken sandwiches"]);
      }  
     });
  });
    
  socket.on('get-orders',() => {
    console.log('get orders from server');
  
    Order.find({},(error, documents) => {
        if (error) console.log(`Error occurred on Order.find(): ${error}`);
        else {
          console.log(`Order.find() returned documents: ${documents}`)
          const data = documents.map(x => {
            return {
                order: x.order,
                customer: x.customer_name
            }
          });
          socket.emit('order-data', data);
        }  
    });
  });

  socket.on('add-order',() => {
      console.log('order data add by server');
 
      Order.create(
        {
         order : "Beer",
         customer_name : "Paul"
        },
      (error, documents) => {
        if (error) console.log(`Error occurend on Order.create(): ${error}`);
        else {
          console.log(`Order.create() returned documents: ${documents}`);
          
          socket.emit('order-data-added', documents);
        }
      });
  });
});