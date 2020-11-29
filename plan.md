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

socket

source of socket.io.js file should be from the server itself

http://127.0.0.1:3000/socket.io/socket.io.js

where http://127.0.0.1:3000 is the socket server.



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
 





## Web server

### file serving

app.get('/', function(req, res){
  console.log("hit");
  res.sendFile(__dirname + '/index.html');
});
    