(function (post) {
  return $.h(".post",
    [ post.image ? $.h(".postImage", $.h("img", { src: post.image })) : null
    , $.h(".postInfo",
      [ $.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
      , $.h("span.postUserName", "onanimus")
      , $.h("a.postDate", { href: "#" + post.id }, "30.II.2016 23:45")])
    , $.h("span.postText", post.text) ]) })
