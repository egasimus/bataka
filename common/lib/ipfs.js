(function () {
  var ipfs = require('ipfs-js');
  ipfs.setProvider({host: 'ipfs.egregor.es', port: '80'})
  return ipfs;
})()
