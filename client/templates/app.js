(function (state) {
  return $.h(".app", state.threads.map(_.thread))
})
