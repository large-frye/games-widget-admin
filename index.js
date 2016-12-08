/**
 * Created by andrewfrye on 12/1/16.
 */
(function () {
  var hapi = require('hapi'),
    inert = require('inert'),
    process = require('process'),
    server = new hapi.Server();

  server.connection({ port: 3000 });

  server.register(inert, function (err) {
    if (err)
      throw err;

    /** Assets */
    server.route({
      method: 'GET',
      path: '/assets/{file*}',
      handler: {
        directory: {
          path: 'assets'
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/dist/{file*}',
      handler: {
        directory: {
          path: 'dist'
        }
      }
    });

    /** node_modules */
    server.route({
      method: 'GET',
      path: '/node_modules/{file*}',
      handler: {
        directory: {
          path: 'node_modules'
        }
      }
    });

    server.route({
      method: 'GET',
      path: '/',
      handler: function (req, reply) {
        reply.file('./index.html');
      }
    });

    var apiRoutes = require('./routes/api')(server);

    // server.route({
    //   method: 'GET',
    //   path: '/api/v0/health-check',
    //   handler: function(request, reply) {
    //     reply([{
    //       status: 'OK',
    //       build: '20161202_b1'
    //     }]);
    //   }
    // });
  });

  server.start(function (err) {
    if (err) throw err;

    console.log('Server running at ' + server.info.uri);
  });

})();