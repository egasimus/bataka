(function (threadId, event) {

  event.preventDefault();

  var textareaId = threadId ? "replyText_" + threadId : "submitText"
    , textarea = document.getElementById(textareaId)
    , text = document.getElementById(textareaId).value.trim()
    , user = document.getElementById("username").value
    , pass = false // document.getElementById("password").value

  var local = $.util.localState(threadId ? $.state.threads[threadId] : $.state)

  if (text !== "" || local().file) {

    var data =
      { id:   $.lib.shortid()
      , user: user
      , trip: pass ? require('tripcode')(user + pass) : ""
      , time: new Date()
      , text: text };

    if (threadId) {
      $.state.threads[threadId].posts.push(data);
    } else {
      data = { id: $.lib.shortid(), posts: [ data ] };
      $.state.threads.put(data.id, data);
    }

    var submitted = local().file
      ? $.util.uploadIpfs(threadId).then(function (hash) {
          console.log("uploaded to ipfs", hash);
          var post = threadId ? data : data.posts[0];
          post["mediaType"] = "ipfs";
          post["media"] = hash;
        }).then(function (post) {
          console.log(data)
          return $.api("post", threadId, JSON.stringify(data));
        })
      : $.api("post", threadId, JSON.stringify(data));

    submitted.then(function (result) {
      console.log("submitted")
      local.delete("file");
      local.delete("uploadProgress");
      textarea.value = '';
    }).catch($.lib.error("could not submit")).done()

  }

})
