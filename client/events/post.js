(function (threadId, event) {

  event.preventDefault();

  var textareaId = threadId ? "replyText_" + threadId : "submitText"
    , textarea   = document.getElementById(textareaId)
    , text       = textarea.value.trim();

  if (text !== "") {

    var data =
      { id:   $.lib.shortid()
      , time: new Date()
      , text: textarea.value };

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
