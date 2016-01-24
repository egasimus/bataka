(function (id, event) {
  event.preventDefault();
  var textareaId = id ? "replyText_" + id : "submitText"
    , textarea   = document.getElementById(textareaId)
    , text       = textarea.value.trim();
  if (text !== "") {
    if (id) {
      var post = $.models.post(null, textarea.value, null);
      $.state.threads[id].posts.push(post);
      $.lib.q.done($.api("reply", id, JSON.stringify(post)),
        function (result) { console.log("replied to", id) },
        $.lib.error("could not reply to thread " + id));
    } else {
      var thread = $.models.thread(null, $.models.post(null, textarea.value, null))
      $.state.threads.put(thread.id, thread);
      $.lib.q.done($.api("submit", JSON.stringify(thread)),
        function (result) { console.log("submitted", thread.id) },
        $.lib.error("could not submit thread"));
    }
  }
})
