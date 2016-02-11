(function (post, thread, index) {

  var seen =
    thread && (index === Number(index)) &&
    $.state.lastSeenPosts()[thread.id] > index;

  var media = post.media ? $.h(".postMedia", _.media(post.media)) : null
    , body = $.h(".postBody",
      [ //$.h("img.postUserPic", { src: "http://www.placecage.com/c/32/32" })
      , $.h(".postInfo",
          [ $.h(".postUserName", post.user || $.h("em", "onanimus"))
          , $.h("a.postDate", { href: "#post_" + post.id }, String(post.time))
          , post.trip ? " - " : null
          , post.trip ? $.h("span.postTripCode", post.trip) : null ])
      , $.h(".postText", { innerHTML: $.util.markdown(post.text) })
      ])

  return $.h(".post#post_" + post.id + (seen ? "" : ".notSeen"),
    [media, body]);

})
