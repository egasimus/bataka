require('riko-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) })
      return JSON.stringify($.state())
    },
    "post": function (threadId, data) {
      try {
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
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    "import": function (data) {
      try {
        $.state.put("threads", JSON.parse(data).threads)
      } catch (e) {
        console.log(e)
        throw e;
      }
    }
  }
})
