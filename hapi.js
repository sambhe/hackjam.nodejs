const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 7000,
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(req, res) {
    return res({message: 'Hapi app is running on port 7000'});
  }
});

server.app.title = "Hapi JS";

server.start((err) => {
  console.log('Hapi app is running on port 7000');
});
