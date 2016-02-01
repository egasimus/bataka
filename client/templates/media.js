(function (post) {

  return $.h(".postMedia", {
    null: function () {
      return null
    },
    "http": function (url) {
      return $.h("img", { src: url })
    },
    "ipfs": function (hash) {
      return $.h("img", { src: "http://gateway.ipfs.io/ipfs/" + hash })
    },
  }[post.mediaType](post.media || null));

})
