(function (event) {
  event.preventDefault();
  var textarea = document.getElementById("submitText");
  var text = textarea.value.trim();
  if (text !== "") {
    var id = $.lib.shortid();
    $.state.threads.put(id, $.models.thread(id,
      $.models.post(null, textarea.value, null)));
  }
})

