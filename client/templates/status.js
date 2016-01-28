(function (state) {

  var p2p = state.p2p.broker && state.p2p.broker.open;

  return $.h(".status",
    [ $.h(".statusItem", [ $.h("input#username", { type: "text",     placeholder: "onanimus" }) ])
    //, $.h(".statusItem", [ $.h("input#password", { type: "password", placeholder: "secret (for tripcode)" }) ])
    , $.h(".statusItem", (state.server ? "" : "not ") + "connected to server")
    , $.h(".statusItem", (p2p          ? "" : "not ") + "connected to peer broker")
    , $.h(".statusItem", "connected to " + state.p2p.peers.length + " peers") ])

})
