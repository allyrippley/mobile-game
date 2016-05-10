/* Temp express setup */

import express from 'express'
import path from 'path'
const app = express()

/* Access public dir w/o react-router */

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));

app.get('*', function(req, res, next) {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


/* Error Handling */

app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});


/* Start Server */

const port = 3000;
const server = app.listen(port);

console.log('Serving: localhost:' + port);

/* Adding Socket IO */
const io = require('socket.io').listen(server)
console.log("Polling server is running at port: " + port)

/* adding event listener for socket */
let connections = []
let title = 'Untitled'

io.sockets.on('connection', function(socket) {
  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1)
    socket.disconnect()
    console.log("Disconnect: %d sockets remaining.", connections.length)
  })
  socket.emit('welcome', {
    title: title
  })
  connections.push(socket)
  console.log("Connect: %d sockets connected.", connections.length)
})
