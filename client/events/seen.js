(function (threadId) {
  var thread = $.state.threads[threadId]()
  $.state.lastSeenPosts.put(threadId, thread.posts.length);
  $.util.storageSet("lastSeenPosts", $.state.lastSeenPosts());
})

