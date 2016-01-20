(function (app) {
  var web     = require('glagol-web')
    , resolve = require('path').resolve
    , client  = web.app({}, resolve(__dirname, '..', 'client'))
    , host    = $.options.host
    , port    = $.options.port
    , routes  = [ client.route('/'), client.route('/control') ]
    , server  = web.server(host, port, routes);

  server.http.on('listening', function () {
    console.log('open ' + host + ':' + port + ' in default browser')
  })

  return server;
})
