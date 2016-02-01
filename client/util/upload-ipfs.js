(function (threadId) {

  return $.lib.q.Promise(function (win, fail) {

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)
      , file  = local().file;

    if (!file) fail("no file")

    var reader = new FileReader();
    reader.onload = function (event) {
      $.lib.ipfs.add(new (require('buffer').Buffer)(this.result),
        function (err, hash) {
          if (err || !hash) fail(err);
          win(hash)
        })
    }
    reader.onerror = function (err) {
      fail(err)
    }
    reader.readAsArrayBuffer(file);

  })

})
