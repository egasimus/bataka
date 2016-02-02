require('riko-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) })
      return JSON.stringify($.state())
    },
    "post": function (threadId, data) {
      data = JSON.parse(data)
      if (threadId) {
        data.time = new Date(Date.parse(data.time))
        $.state.threads[threadId].posts.push(data);
      } else {
        data.posts.forEach(function (post) {
          post.time = new Date(Date.parse(post.time))
        })
        $.state.threads.put(data.id, data);
      }
    },
    "import": function (data) {
      $.state.threads.set(JSON.parse(data).threads)
    }
  }
})
