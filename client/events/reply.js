(function (threadId, event) {
  event.preventDefault();
  var textarea = document.getElementById("reply" + threadId);
  var text = textarea.value.trim();
  if (text !== "") {
    var post = $.models.post(null, textarea.value, null);
    $.state.threads[threadId].posts.push(post);
    $.lib.q.done($.api("reply", threadId, JSON.stringify(post)),
      function (result) { console.log("replied to", threadId) },
      $.lib.error("could not submit thread"));
  }
})
