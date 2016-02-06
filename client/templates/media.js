(function (media) {

  if (media && media.src) {
    var service = _.mediaServices[media.service]
          || _.mediaServices["default"]
      , url     = service(media.src)
      , type    = _.mediaTypes[(media.type || "").split('/')[0]]
          || _.mediaTypes["download"]
      , media   = type(url);
    return media;
  }

})
