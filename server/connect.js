(function (socket) {
  return require("q-connection")(socket, function () {
    return $.api.apply(null, arguments)
  })
})
