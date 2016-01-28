(function (post) {

  var media = post.image ? $.h(".postImage", $.h("img", { src: post.image })) : null
    , body = $.h(".postBody",
      [ $.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
      , $.h("span.postUserName", post.user || $.h("em", "onanimus"))
      , $.h("span.postText", post.text) 
      , $.h("div", $.h("a.postDate", { href: "#" + post.id }, String(post.time))) ])

  return $.h(".post#post_" + post.id, [media, body]);

})
