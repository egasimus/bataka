(function (threadId, event) {
  event.preventDefault();
  var textarea = document.getElementById("reply" + threadId);
  console.log(textarea, textarea.value);
})
