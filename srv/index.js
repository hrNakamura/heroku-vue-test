import express from 'express';
// import socketIO from "socket.io";

export default (app, http) => {
  const port = process.env.PORT || 3000;
  app.set('port', port);
  app.use(express.json());
  //
  app.get('/foo', (req, res) => {
    res.json({ msg: 'Welcome to Vue.js and Express server' });
  });
  //
  // app.post('/bar', (req, res) => {
  //   res.json(req.body);
  // });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
