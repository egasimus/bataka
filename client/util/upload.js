(function (threadId) {

  return $.lib.q.Promise(function (win, fail) {

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)
      , file  = local().file;
    if (!file) fail("no file")

    switch ($.options.upload.type) {
      case "ipfs": uploadIpfs(file); break;
      case "http": uploadXhr(file);  break;
    }

    function uploadIpfs (file) {

      var reader = new FileReader();
      reader.onload = function (event) {
        $.lib.ipfs.add(
          new (require('buffer').Buffer)(this.result),
          function (err, hash) {
            if (err || !hash) fail(err);
            win(["ipfs", hash])
          }
        )
      }
      reader.onerror = function (err) { fail(err) }

      reader.readAsArrayBuffer(file);

    }

    function uploadXhr (file) {

      var fd = new FormData();
      fd.append("file", file)

      var xhr = new XMLHttpRequest();
      xhr.onprogress = function (event) {
        if (event.lengthComputable) local.put("uploadProgress",
          Math.round((event.loaded * 100) / event.total))
      }
      xhr.onload = function (event) {
        local.put("uploadProgress", 100)
        var uploaded = JSON.parse(event.target.response).uploaded[0];
        console.log("uploaded", file.type, file.name, "as", uploaded);
        win(["upload", uploaded]);
      }
      xhr.onerror = function (event) {
        fail(event)
      }

      xhr.open("POST", "./upload")
      xhr.send(fd)

    }

  })

})
