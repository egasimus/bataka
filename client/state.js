$.lib.riko.M({

  server:
    null,

  connection:
    null,

  p2p:
    { broker: null
    , peers: [] },

  user: $.util.storageGet("user",
    { id:   $.lib.shortid()
    , nick: null }),

  people:
    0,

  threads: $.util.storageGet("threads",
    {}),

  lastSeenPosts: $.util.storageGet("lastSeenPosts",
    {}),

  collapsedThreads: $.util.storageGet("collapsedThreads",
    [])

})
