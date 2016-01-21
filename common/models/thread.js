(function () {
  var id = arguments[0]
    , posts = Array.prototype.slice.call(arguments, 1);
  return { id: id, posts: posts }
})
