(function (media) {

  var services = {
    null: function () {
      return null
    },
    "blob": function (url) {
      return url;
    },
    "http": function (url) {
      return url;
    },
    "ipfs": function (hash) {
      return $.options.ipfsGateway + hash;
    },
  }

  var types = {
    null: function (url) { return $.h("img.postMediaImage", { src: url }) },
    "audio/wav":  audio,
    "audio/ogg":  audio,
    "audio/mp3":  audio,
    "audio/mpeg": audio,
    "video/webm": video,
    "video/ogg":  video,
    "video/mp4":  video,
    "video/mpeg": video
  }

  function audio (url) {
    return $.h("audio.postMediaAudio", { src: url, controls: "controls" })
  }

  function video (url) {
    return $.h("video.postMediaVideo", { src: url, controls: "controls" })
  }

  if (media && media.src) {
    var service = services[media.service] || services[null]
      , url     = service(media.src)
      , type    = types[media.type] || types[null]
      , media   = type(url);
    return media;
  }

})
