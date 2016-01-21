require('q-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) })
      return JSON.stringify($.state())
    },
    "submit": function (thread) {
      thread = JSON.parse(thread)
      thread.posts.forEach(function (post) {
        post.time = Date.parse(post.time)
      })
      console.log(thread)
    },
    "reply":  function (thread, post) {
      post = JSON.parse(post)
      post.time = Date.parse(post.time)
      console.log(thread, post)
    }
  }
})
