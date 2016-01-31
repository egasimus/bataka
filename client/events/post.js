(function (threadId, event) {

  event.preventDefault();

  var textareaId = threadId ? "replyText_" + threadId : "submitText"
    , textarea = document.getElementById(textareaId)
    , text = document.getElementById(textareaId).value.trim()
    , user = document.getElementById("username").value
    , pass = false // document.getElementById("password").value

  if (text !== "") {

    var data =
      { id:   $.lib.shortid()
      , user: user
      , trip: pass ? require('tripcode')(user + pass) : ""
      , time: new Date()
      , text: text };

    if (threadId) {
      $.state.threads[threadId].posts.push(data);
    } else {
      data = { id: $.lib.shortid(), posts: [ data ] };
      $.state.threads.put(data.id, data);
    }

    var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state);
    var fd = new FormData();
    fd.append("img", local().file)
    var xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function (evt) {
      if (evt.lengthComputable) local.put("uploadProgress",
        Math.round((evt.loaded * 100) / e.total))
    }
    xhr.upload.onload = function (evt) {
      local.put(uploadProgress, 100)
      console.log("uploaded", evt)
    }
    xhr.open("POST", "https://ipfs.io/ipfs/add")
    xhr.send(fd)

    $.lib.q.done($.api("post", threadId, JSON.stringify(data)),
      function (result) {
        console.log("submitted")
        textarea.value = '';
        local.put("file", null);
      },
      $.lib.error("could not submit"));

  }

})
