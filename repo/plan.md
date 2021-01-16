code formatted for json using 

https://www.freeformatter.com/json-escape.html#ad-output



website hosted

https://cp1.awardspace.net/welcome/popup




css preparation


    inline-block - horizontal, top and bottom margin respected.
    block -  vertical
    inline - horizontal, top and bottom margin not respected.


    float - moves element to left or right.




# Node js




< script src="https://cdn.socket.io/socket.io-1.2.0.js">
</script>
 
  <script>
    $(function () {
      var socket = io("http://localhost:3000");
      $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
      });
      socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
        window.scrollTo(0, document.body.scrollHeight);
      });
    });
  </script>


source of socket.io.js file should be from the server itself

http://127.0.0.1:3000/socket.io/socket.io.js

where http://127.0.0.1:3000 is the socket server.

 
<!-- backend -->
 
 
npm install socket.io
  
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
 
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
 
http.listen(port, function(){
  console.log('listening on *:' + port);
});






//Sending broadcast to all/individual clients

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    
    // for sending broadcast to all clients
    io.emit('chat message', "response from socket");

    // for sending broadcast to the individual client that connecte
    // save the clients in an array for future use
    socket.emit('chat message', "response from socket");


    console.log("the msg is",msg);
  });
  //socket.emit("chat message", "socket emit");
  console.log("io connected");
});



### Clients



### Joining rooms

io.on('connection', socket => {
  socket.join('some room');
});


io.to('some room').emit('some event');


// send to multiple rooms at once
io.to('room1').to('room2').to('room3').emit('some event');


io.on('connection', function(socket){
  socket.to('some room').emit('some event');
  //In that case, every socket in the room excluding the sender will get the event.
});

### Adding headers

var io = require('socket.io')(http,{
    cors: {
      origin: '*',
      methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
    }
  });





## Web server

### File serving

app.get('/', function(req, res){
  console.log("hit");
  res.sendFile(__dirname + '/index.html');
});
    

### Access control

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
 









<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>





<!-- jQuery library -->\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js\"></script>\r\n


 


 if # found
    loop till next #
        if ## found
            loop till next ##
                if ### found
                    loop till next ###





 if # found
    set first index
    concatenate all non index lines as values
        if ## found
            set second index
            concatenate all non index lines as values
                if ### found
                    set third index
                    concatenate all non index lines as values



loop


  if # found
    set first index as index name set other index as null

  if ## found
    set second index and pop consecutive indexes

  if ## found
    set second index and pop consecutive indexes

  if not an index