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

    $.lib.q.done($.lib.q.all(
      [ $.api("post", threadId, JSON.stringify(data))
      , $.util.uploadIpfs(threadId) ],
      function (result) {
        console.log("submitted")
        textarea.value = '';
        local.delete("file");
        local.delete("uploadProgress");
      },
      $.lib.error("could not submit")));

  }

})
