(function (thread) {
  return $.h(".thread", thread.posts.map(_.post));
})
