(function () {
  console.debug = console.log
  var socket = new (require('ws'))("ws://localhost:1622");
  var connection = require('q-connection')(socket);
  var api = require('riko-api/client')(function () { return connection })
  var data = require('fs').readFileSync(process.argv[2], 'utf8').trim();
  socket.onopen = function () {
    api('import', data).then(function (data) {
      console.log("imported" + data);
      process.exit()
    }).done()
  }
})
