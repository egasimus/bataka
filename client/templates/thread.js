(function (thread) {

  return $.h(".thread", { id: "thread_" + thread.id },
    (thread.posts || []).map(_.post).concat([_.form(thread.id)]));

})
