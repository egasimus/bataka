(function (threadId) {

  return $.lib.q.Promise(function (win, fail) {

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)
      , file  = local().file
    if (!file) fail("no file")

    var fd = new FormData();
    fd.append("img", local().file)

    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (event) {
      if (event.lengthComputable) local.put("uploadProgress",
        Math.round((event.loaded * 100) / event.total))
    }
    xhr.upload.onload = function (event) {
      local.put("uploadProgress", 100)
      console.log("uploaded", event)
      win(event)
    }
    xhr.upload.onerror = function (event) {
      fail(event)
    }

    xhr.open("POST", "./upload")
    xhr.send(fd)

  })

})
