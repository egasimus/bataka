(function (state) {

  return $.h(".status",
    [ $.h(".statusItem", "not connected to server")
    , $.h(".statusItem", (state.p2p.broker ? "" : "not ") + "connected to peer broker")
    , $.h(".statusItem", "connected to " + state.p2p.peers.length + " peers") ])

})
