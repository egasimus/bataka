(function (threadId) {

  var thread   = $.state.threads()[threadId]
    , newPosts = thread.posts.length - ($.state.lastSeenPosts()[threadId] || 0);
  return newPosts;

})
