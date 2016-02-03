(function (post) {

  var services = {
    null: function () {
      return null
    },
    "http": function (url) {
      return $.h("a", { href: url, target: "_blank" },
        $.h("img.postMediaImage", { src: url }))
    },
    "ipfs": function (hash) {
      var url = $.options.ipfsGateway + hash;
      return $.h("a", { href: url, target: "_blank" },
        $.h("img.postMediaImage", { src: url }))
    },
  }

  if (post.media && post.media.service && post.media.src) {
    var service = services[post.media.service]
      , media   = service(post.media.src);
    return $.h(".postMedia", media);
  }

})
