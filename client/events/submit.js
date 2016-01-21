(function (event) {
  event.preventDefault();
  var textarea = document.getElementById("submitText");
  var text = textarea.value.trim();
  if (text !== "") {
    var thread = $.models.thread(null, $.models.post(null, textarea.value, null))
    $.state.threads.put(thread.id, thread);
  }
})
