(function (app) {
  var web     = require('glagol-web')
    , resolve = require('path').resolve
    , client  = web.app({}, resolve(__dirname, '../client'),
                            resolve(__dirname, '../common'))
    , routes  = [ web.route('/', client.handler) ]
    , server  = web.server($.options.host, $.options.port, routes);

  server.http.on('listening', function () {
    console.log('open ' + $.options.host + ':' + $.options.port +
      ' in default browser')
  })

  return server;
})
