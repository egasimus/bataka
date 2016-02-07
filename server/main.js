(function (app) {
  var web     = require('glagol-web')
    , resolve = require('path').resolve.bind(null, __dirname)
    , client  = web.app({}, resolve('../client'), resolve('../common'))
    , routes  = [ web.route('/',       client.handler)
                , web.route('/upload', _.upload) ]
    , server  = web.server($.options.host, $.options.port, routes);

  server.http.on('listening', function () {
    console.log('open ' + $.options.host + ':' + $.options.port +
      ' in your browser')
  })

  server.socket.on("connection", function (socket) { $.connect(socket) });

  return server;
})
