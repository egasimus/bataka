(function (post) {

  var services = {
    null: function () {
      return null
    },
    "http": function (url) {
      return url;
    },
    "ipfs": function (hash) {
      return $.options.ipfsGateway + hash;
    },
  }

  var types = {
    null: function (url) {
      return $.h("img.postMediaImage", { src: url })
    },
    "audio/mpeg": function (url) {
      return $.h("audio.postMediaAudio", { src: url, controls: "controls" })
    }
  }

  if (post.media && post.media.src) {
    var service = services[post.media.service] || services[null]
      , url     = service(post.media.src)
      , type    = types[post.media.type] || types[null]
      , media   = type(url);
    return $.h(".postMedia", media);
  }

})
