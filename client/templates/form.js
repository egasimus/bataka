(function (thread) {

  var id = thread ? thread.id : undefined;

  var containerClass  = id ? '.replyForm' : '.submitForm'
    , textAreaId      = id ? '#replyText_' + id : '#submitText'
    , fileFieldId     = id ? '#replyFile_' + id : '#submitFile'
    , buttonText      = id ? 'reply' : 'submit';
  
  return $.h("form" + containerClass,
    [ _.media(thread)
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: $.emit('post', id) }, buttonText) ])

})
