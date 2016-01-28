(function (threadId, event) {

  event.preventDefault();

  var textareaId  = threadId ? "replyText_" + threadId : "submitText"
    , fileFieldId = "upload_" + (threadId || "undefined")

  var text = document.getElementById(textareaId).value.trim()
    , user = document.getElementById("username").value
    , pass = document.getElementById("password").value

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

    $.lib.q.done($.api("post", threadId, JSON.stringify(data)),
      function (result) { console.log("submitted") },
      $.lib.error("could not submit"));

  }

})
