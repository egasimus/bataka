(function (threadId) {
  return function () {
    var firstNew = _.getFirstNewPost(threadId);
    $.emit('expand', threadId)();
    requestAnimationFrame(function () {
      var post = document.getElementById("post_" + firstNew);
      window.scrollBy(0, post.getBoundingClientRect().top);
    })
  }
})
