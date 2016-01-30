(function (id, media) {

  media = media || {}

  var preview = media.file
      ? $.h("img",
          { src: URL.createObjectURL(media.file)
          , onload: function () { URL.revokeObjectURL(this.src) }})
      : $.h(".mediaUploaderAdd",
          { onclick: pickFile },
          "add media...");

  return $.h(".mediaUploader", preview)

  function pickFile () {
    var f = document.createElement('input');
    f.type = "file"
    f.onchange = $.emit('mediaSelected', id, f)
    f.click()
  }

})
