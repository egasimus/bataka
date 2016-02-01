(function (thread) {

  var id = thread ? thread.id : undefined
    , local = thread ? (thread.local || {}) : ($.state().local || {});

  var containerClass  = id ? '.replyForm' : '.submitForm'
    , textAreaId      = id ? '#replyText_' + id : '#submitText'
    , fileFieldId     = id ? '#replyFile_' + id : '#submitFile'
    , buttonText      = id ? 'reply' : 'submit';
  
  return $.h("form" + containerClass,
    [ $.h(".mediaUploader", local.file
        ? [ $.h(".mediaUploaderCancel",
              { onclick: $.emit("media/remove", id) }, "remove")
          , local.uploadProgress ?
              $.h(".mediaUploaderProgress", local.uploadProgress + "%")
              : null
          , $.h("img",
              { src: URL.createObjectURL(local.file)
              , onclick: $.emit("media/select", id)
              , onload: function () { URL.revokeObjectURL(this.src) } }) ]
        : $.h(".mediaUploaderAdd",
            { onclick: $.emit("media/select", id) },
            "add media..."))
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: $.emit('post', id) }, buttonText) ])

})
