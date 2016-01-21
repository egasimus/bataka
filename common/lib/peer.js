(function (id) {
  var Peer   = require('peerjs')
    , config = { host: 'egregor.es', port: '9999', key: 'ibasi0987654321', debug: 3 }
  return new Peer(id, config)
})
