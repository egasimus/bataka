(function (post) {
  return $.h(".post",
    [ post.image ? $.h(".postImage", $.h("img", { src: post.image })) : null
    , $.h(".postText",  post.text) ]) })
