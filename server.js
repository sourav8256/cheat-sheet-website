var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',            // required, the root of the server file tree
  port: 1002,               // required, the port to listen
  name: 'my-http-server',   // optional, defaults to any interface
  cors: '*',                // optional, defaults to undefined
  followSymlink: true,      // optional, defaults to a 404 error
  templates: {   // optional, defaults to 'index.html'
    notFound: '404.html'    // optional, defaults to undefined
  }
});

var currentPath = process.cwd();
console.log("path is ",currentPath);

server.start(function () {
  console.log('Server listening to', server.port);
});

