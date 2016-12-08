(function () {

  var https = require('https');
  var process = require('process');

  function api(server) {
    server.route({
      method: 'GET',
      path: '/api/v0/listGames',
      handler: function (request, reply) {
        var content = ''; 
        var req = https.request({
          hostname: process.env.ORIGIN,
          path: '/API/game',
          method: 'GET'
        }, function (res) {
          res.on('data', function(d) {
            content += d;
          });
        });

        req.end();
        req.on('close', function() {
          reply(JSON.parse(content));
        });  
      }
    });
  }
  
  module.exports = api;
})();