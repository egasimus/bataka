(function (post) {

  return $.h(".postMedia", {
    null: function () {
      return null
    },
    "http": function (url) {
      return $.h("a", { href: url, target: "_blank" },
        $.h("img.postMediaImage", { src: url }))
    },
    "ipfs": function (hash) {
      var url = "http://gateway.ipfs.io/ipfs/" + hash;
      return $.h("a", { href: url, target: "_blank" },
        $.h("img.postMediaImage", { src: url }))
    },
  }[post.mediaType](post.media || null));

})
