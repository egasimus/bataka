(function (id) {

  var containerClass  = id ? '.replyForm' : '.submitForm'
    , textAreaId      = id ? '#replyText_' + id : '#submitText'
    , fileFieldId     = id ? '#replyFile_' + id : '#submitFile'
    , submitHandler   = id ? $.emit('reply', id) : $.emit('submit')
    , filePickHandler = $.emit('fileSelected', id)
    , buttonText      = id ? 'reply' : 'submit';
  
  return $.h("form" + containerClass,
    [ $.h("input" + fileFieldId, { type: 'file', onchange: filePickHandler })
    , $.h(".uploader", { onclick: clickPicker }, "add media...")
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: submitHandler }, buttonText) ])

  function clickPicker () {
    document.getElementById(fileFieldId.slice(1)).click();
  }

})
