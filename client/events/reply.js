(function (threadId, event) {
  event.preventDefault();
  var textarea = document.getElementById("reply" + threadId);
  var text = textarea.value.trim();
  if (text !== "") {
    $.state.threads[threadId].posts.push(
      $.models.post(null, textarea.value, null));
  }
})
