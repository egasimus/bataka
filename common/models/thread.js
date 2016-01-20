(function () {
  var idOrOpts = arguments[0]
    , opts = typeof idOrOpts === "number" ? { id: idOrOpts } : idOrOpts
    , posts = Array.prototype.slice.call(arguments, 1);
  return { id: opts.id, posts: posts }
})
