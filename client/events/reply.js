(function (threadId, event) {
  event.preventDefault();
  var textarea = document.getElementById("reply" + threadId);
  $.state.threads[threadId].posts.push($.models.post(null, textarea.value, null));
})
