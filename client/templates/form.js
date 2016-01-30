(function (id, media) {

  console.log("form", id, media)

  var containerClass  = id ? '.replyForm' : '.submitForm'
    , textAreaId      = id ? '#replyText_' + id : '#submitText'
    , fileFieldId     = id ? '#replyFile_' + id : '#submitFile'
    , buttonText      = id ? 'reply' : 'submit';
  
  return $.h("form" + containerClass,
    [ _.media(id, media)
    , $.h("textarea" + textAreaId)
    , $.h("button", { onclick: $.emit('post', id) }, buttonText) ])

})
