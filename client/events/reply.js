(function (threadId, event) {
  event.preventDefault();
  var textarea = document.getElementById("reply" + threadId);
  var text = textarea.value.trim();
  if (text !== "") {
    var post = $.models.post(null, textarea.value, null);
    $.state.threads[threadId].posts.push(post);
  }
})
