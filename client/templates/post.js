(function (post) {
  return $.h(".post",
    [ post.image ? $.h(".postImage", $.h("img", { src: post.image })) : null
    , $.h(".postInfo",
      [ $.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
      , $.h("span.postUserName", "onanimus")
      , $.h("a.postDate", { href: "#" + post.id }, $.lib.strftime("%Y-%m-%d %H:%M:%S", post.time))])
    , $.h("span.postText", post.text) ]) })
