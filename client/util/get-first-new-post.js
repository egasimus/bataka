(function (threadId) {

  var thread = $.state.threads()[threadId]
    , newPosts = _.getNewPosts(threadId);

  return newPosts > 0
    ? thread.posts[thread.posts.length - newPosts].id
    : null;

})
