(function (state) {

  var p2p = state.p2p.broker && state.p2p.broker.open
    //, ppl = state.people / 2; // counts socket connections, which are 2 per user

  //if (ppl < 0) {
    //ppl = "less than zero people online. само нечовеци. or rather a bug"
  //} else if (ppl === 0 && state.server) {
    //ppl = "if a tree falls in a forest and nobody is there to hear it, do the crushed squirrels make a sound?"
  //} else if (ppl === 1) {
    //ppl = "you are alone. better post something! this will make you less alone."
  //} else {
    //ppl = "~ " + ppl + " people here"
  //}

  var username = $.h("input#username",
    { type: "text"
    , placeholder: "onanimus"
    , value: $.state.user.nick()
    , onchange: $.emit("username") });

  var newThread = $.h("a.statusThread",
    { href: "#submitForm"
    , onclick: function () { document.getElementById("submitText").focus() } },
    statusThreadDetails("+ submit", "new thread..."))

  var threads = Object.keys(state.threads).reverse().map(statusThread);

  return $.h(".status",
    [ username 
    //, $.h(".statusItem", [ $.h("input#password", { type: "password", placeholder: "secret (for tripcode)" }) ])
    , $.h(".statusItem", (state.server ? "" : "not ") + "connected to server")
    //, $.h(".statusItem", ppl)
    //, $.h(".statusItem", (p2p          ? "" : "not ") + "connected to peer broker")
    //, $.h(".statusItem", "connected to " + state.p2p.peers.length + " peers") ])
    , $.h(".statusThreads", [newThread].concat(threads))
    ])

  function statusThread (threadId) {
    var thread   = state.threads[threadId]
      , first    = thread.posts[0]
      , last     = thread.posts[thread.posts.length - 1]
      , newPosts = $.util.getNewPosts(threadId)
      , firstNew = $.util.getFirstNewPost(threadId);

    return $.h("a.statusThread",
      { href: newPosts
          ? '#post_' + firstNew
          : '#thread_' + thread.id
      , onclick: $.util.scrollToFirstNewPost(thread.id) },
      [ newPosts ? $.h(".statusThreadNewPosts", String(newPosts)) : null
      , $.h(".statusThreadDetails", statusThreadDetails(
          first.user || $.h("em", "onan."),
          first.text || $.h("em", "(кура ми янко)")
        ).concat([ first === last ? null : $.h("div", statusThreadDetails(
          last.user || $.h("em", "onan."),
          last.text || $.h("em", "(кура ми янко)"))) ])) ]) }

  function statusThreadDetails (user, text) {
    return [ $.h(".statusThreadUser", user)
           , $.h(".statusThreadText", text) ]; }

})
