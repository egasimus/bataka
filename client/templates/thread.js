(function (thread) {
  
  var collapsed = $.state.collapsedThreads().indexOf(thread.id) > -1
    , firstPost = thread.posts[0]
    , newPosts  = $.util.getNewPosts(thread.id)
    , firstNew  = $.util.getFirstNewPost(thread.id);

  var body = [ $.h(".threadCollapse",
    { onclick: $.emit(collapsed ? "expand" : "collapse", thread.id)},
    collapsed
      ? [ "[expand]"
        , newPosts > 0
          ? $.h("a.threadNewPosts", { onclick: function () {
              $.emit('expand', thread.id)();
              requestAnimationFrame(function () {
                var post = document.getElementById("post_" + firstNew)
                window.scrollBy(0, post.getBoundingClientRect().top);
              })
            } }, String(newPosts))
          : null
        , $.h(".postDate",
            String(firstPost.time || ""))
        , $.h(".postUserName",
            firstPost.user || $.h("em", "onanimus"))
        , $.h(".postText",
            firstPost.text.slice(0, 50).concat(
              firstPost.text.length > 50 ? "..." : "")) ]
      : "[collapse]") ];

  if (!collapsed) {
    body = body
      .concat((thread.posts || []).map(_.post))
      .concat([ _.form(thread) ]);
  }

  return $.h(".thread", { id: "thread_" + thread.id }, body);
    
})
