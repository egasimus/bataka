(function (post) {

  var media = post.media ? _.media(post) : null
    , body = $.h(".postBody",
      [ $.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
      , $.h("span.postUserName", post.user || $.h("em", "onanimus"))
      , $.h("span.postText", post.text) 
      , $.h("div",
        [ $.h("a.postDate", { href: "#" + post.id }, String(post.time))
        , post.trip ? $.h("span.postTripCode", " - " + post.trip) : null
        ]) ])

  return $.h(".post#post_" + post.id, [media, body]);

})
