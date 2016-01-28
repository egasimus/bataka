require('riko-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) })
      return JSON.stringify($.state())
    },
    "submit": function (thread) {
      thread = JSON.parse(thread)
      thread.posts.forEach(function (post) {
        post.time = new Date(Date.parse(post.time))
      })
      $.state.threads.put(thread.id, thread);
    },
    "reply":  function (thread, post) {
      post = JSON.parse(post)
      post.time = new Date(Date.parse(post.time))
      $.state.threads[thread].posts.push(post);
    }
  }
})
