(function (threadId) {

  return $.lib.q.Promise(function (win, fail) {

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)
      , file  = local().file;

    if (!file) fail("no file")

    var reader = new FileReader();
    reader.onload = function (event) {
      $.lib.ipfs.add(event.result, function (err, res) {
        if (err || !res) fail(err);
        win(res)
      })
    }
    reader.onerror = function (err) {
      fail(err)
    }
    reader.readAsArrayBuffer(file);

  })

})
