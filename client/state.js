$.lib.riko.M({

  server:
    null,

  connection:
    null,

  p2p:
    { broker: null
    , peers: [] },

  user:
    { id: $.lib.shortid() },

  threads:
    {}

})

  //threads:
    //[ _.models.thread(1,
        //_.models.post(2, "hello world", null),
        //_.models.post(3. "fuck you", "http://placekitten.com/202/200"))
    //, _.models.thread(4,
        //_.models.post(5, "hello again", null)
        //_.models.post(6, "fuck off", "http://placekitten.com/203/200")) ]

//})
