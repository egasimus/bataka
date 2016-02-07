(function (thread) {

  var id    = thread ? thread.id : undefined
    , local = thread ? (thread.local || {}) : ($.state().local || {});

  var containerClass = id ? '.replyForm'       : '.submitForm'
    , textAreaId     = id ? '#replyText_' + id : '#submitText'
    , fileFieldId    = id ? '#replyFile_' + id : '#submitFile'
    , formId         = id ? '#replyForm_' + id : '#submitForm'
    , buttonText     = id ? 'reply'            : 'submit';

  var media = $.h(".mediaUploader", local.file
    ? [ $.h(".mediaUploaderPreview", _.media(
          { service: "blob"
          , type:    local.file.type
          , src:     URL.createObjectURL(local.file) }))
      , $.h(".mediaUploaderCancel",
          { onclick: $.emit("media/remove", id) }, "remove")
      , local.uploadProgress
          ? $.h(".mediaUploaderProgress", local.uploadProgress + "%")
          : null ]
    : $.h(".mediaUploaderAdd",
        { onclick: $.emit("media/select", id) },
        "upload (" + $.options.upload.type + ")"))
  
  return $.h("form" + containerClass + formId,
    [ media
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: $.emit('post', id) }, buttonText) ])

})
