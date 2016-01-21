(function () {
  return {
    id: arguments[0] || $.lib.shortid(),
    posts: Array.prototype.slice.call(arguments, 1)
  }
})
