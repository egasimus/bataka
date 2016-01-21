(function (event) {
  event.preventDefault();
  var textarea = document.getElementById("submitText");
  var text = textarea.value.trim();
  if (text !== "") {
    var thread = $.models.thread(null, $.models.post(null, textarea.value, null))
    $.state.threads.put(thread.id, thread);
    $.lib.q.done($.api("submit", JSON.stringify(thread)),
      function (result) { console.log("submitted", thread.id) },
      $.lib.error("could not submit thread"));
  }
})
