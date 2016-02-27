(function () {
  console.debug = console.log
  var socket = new (require('ws'))("ws://localhost:1622");
  var connection = require('q-connection')(socket);
  var api = require('riko-api/client')(function () { return connection })
  socket.onopen = function () {
    api('subscribe').then(function (data) {
      require('fs').writeFileSync('export-'+Number(new Date())+'.json', data);
      process.exit()
    })
  }
})
