(function (state) {

  var p2p = state.p2p.broker && state.p2p.broker.open
    , ppl = state.people / 2; // counts socket connections, which are 2 per user

  if (ppl < 0) {
    ppl = "less than zero people online. само нечовеци. or rather a bug"
  } else if (ppl === 0 && state.server) {
    ppl = "if a tree falls in a forest and nobody is there to hear it, does it make a sound?"
  } else if (ppl === 1) {
    ppl = "you are alone. better post something! this will make you less alone."
  } else {
    ppl = "~ " + ppl + " people here"
  }

  return $.h(".status",
    [ $.h("input#username", { type: "text", placeholder: "onanimus" })
    //, $.h(".statusItem", [ $.h("input#password", { type: "password", placeholder: "secret (for tripcode)" }) ])
    , $.h(".statusItem", (state.server ? "" : "not ") + "connected to server")
    , $.h(".statusItem", ppl)
    //, $.h(".statusItem", (p2p          ? "" : "not ") + "connected to peer broker")
    //, $.h(".statusItem", "connected to " + state.p2p.peers.length + " peers") ])
    , $.h(".statusThreads", Object.keys(state.threads).reverse().map(statusThread))
    ])

  function statusThread (threadId) {
    var thread = state.threads[threadId]
      , first  = thread.posts[0]
      , last   = thread.posts[thread.posts.length - 1];
    return $.h(".statusThread",
      [ $.h(".statusThreadText", first.text || $.h("em", "(кура ми янко)"))
      , first === last ? null : $.h("div",
        [ $.h(".statusThreadUser", last.user || $.h("em", "onan."))
        , $.h(".statusThreadText", last.text || $.h("em", "(кура ми янко)")) ])])
  }

})
