(function (id) {

  var containerClass  = id ? '.replyForm' : '.submitForm'
    , textAreaId      = id ? '#replyText_' + id : '#submitText'
    , fileFieldId     = id ? '#replyFile_' + id : '#submitFile'
    , buttonText      = id ? 'reply' : 'submit';
  
  return $.h("form" + containerClass,
    [ _.media(id)
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: $.emit('post', id) }, buttonText) ])

})
