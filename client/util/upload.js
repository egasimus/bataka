(function (threadId) {

  return $.lib.q.Promise(function (win, fail) {

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)
      , file  = local().file;
    if (!file) fail("no file")

    var reader = new FileReader();
    reader.onload = function (event) {
      var upload;
      switch ($.options.upload.type) {
        case "ipfs": upload = uploadIPFS; break;
        case "http": upload = uploadXHR;  break;
      }
      upload(this.result);
    }
    reader.onerror = function (err) { fail(err) }
    reader.readAsArrayBuffer(file);

    function uploadIPFS (file) {
      $.lib.ipfs.add(
        new (require('buffer').Buffer)(file),
        function (err, hash) {
          if (err || !hash) fail(err);
          win("ipfs", hash)
        }
      )
    }

    function uploadXHR (file) {
      var xhr = new XMLHttpRequest();
      xhr.upload.onprogress = uploadProgress;
      xhr.upload.onerror = uploadFailed;
      xhr.onerror = uploadFailed;
      xhr.onload = uploadFinished;
      xhr.open("POST", $.options.upload.url);
      xhr.send(file);

      function uploadProgress (e) {
        if (e.lengthComputable) {
          console.log("Upload:", Math.round(e.loaded * 100 / e.total), "%");
        }
      }

      function uploadFinished (e) {
        console.log("Uploaded.")
        console.log(xhr);
      }

      function uploadFailed (e) {
        console.log("Upload failed.")
        console.log(xhr);
      }
    }

  })

})
