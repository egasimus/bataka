(function (post) {

  var media = post.media ? $.h(".postMedia", _.media(post.media)) : null
    , body = $.h(".postBody",
      [ //$.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
        $.h(".postUserName", post.user || $.h("em", "onanimus"))
      , $.h("span.postText", post.text)
      , $.h("span.postInfo",
          [ $.h("a.postDate", { href: "#" + post.id }, String(post.time))
          , post.trip ? " - " : null
          , post.trip ? $.h("span.postTripCode", post.trip) : null ])
      ])

  return $.h(".post#post_" + post.id, [media, body]);

})
