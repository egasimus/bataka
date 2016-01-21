(function (state) {
  return $.h(".app", Object.keys(state.threads || {}).map(renderThread));
  function renderThread (id) { return _.thread(state.threads[id]) }
})
