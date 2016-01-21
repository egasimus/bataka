$.lib.riko.M({

  id: $.lib.shortid(),

  p2p:
    { broker: null
    , peers: [] },

  threads:
    { 1: $.models.thread(1,
        $.models.post(2, "hello world")) }

})

  //threads:
    //[ _.models.thread(1,
        //_.models.post(2, "hello world", null),
        //_.models.post(3. "fuck you", "http://placekitten.com/202/200"))
    //, _.models.thread(4,
        //_.models.post(5, "hello again", null)
        //_.models.post(6, "fuck off", "http://placekitten.com/203/200")) ]

//})
