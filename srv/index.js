import express from 'express';
import ip from 'ip';
// import socketIO from "socket.io";

export default (app, http) => {
  const port = process.env.PORT || 3000;
  app.set('port', port);

  var gateway = '10.60.183.0';
  var mask = '255.255.255.0';
  app.use((req, res, next ) => {
    var reqIP = req.connection.remoteAddress;
    var reqGateway = ip.mask(reqIP, mask);
    if(ip.isEqual(gateway, reqGateway)){
      next();
    }else{
      res.send('not allowed :' + reqIP + ', ' + reqGateway);
    }
  });

  app.use(express.json());
  //
  app.get('/foo', (req, res) => {
    res.json({ msg: 'Welcome to Vue.js and Express server' });
  });
  //
  app.post('/bar', (req, res) => {
    res.json(req.body);
  });
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
