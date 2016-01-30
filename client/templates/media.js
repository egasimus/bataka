(function (id, media) {

  media = media || {}

  var preview = media.file
      ? [ $.h(".mediaUploaderCancel", 
            { onclick: $.emit("media/remove", id) },
            "remove")
        , $.h("img",
            { src: URL.createObjectURL(media.file)
            , onclick: $.emit("media/select", id)
            , onload: function () { URL.revokeObjectURL(this.src) }})
        ]
      : $.h(".mediaUploaderAdd",
          { onclick: $.emit("media/select", id) },
          "add media...");

  return $.h(".mediaUploader", preview)

})
