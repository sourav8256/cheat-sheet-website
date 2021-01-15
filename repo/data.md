const io = require("socket.io-client");

const socket = io("ws://example.com/my-namespace", {
  reconnectionDelayMax: 10000,
  query: {
    auth: "123"
  }
});


# disconnect

 // CLIENT CODE
  socket.on('disconnect', function(){
      // Do stuff (probably some jQuery)
  });