(function (state) {

  var threads = Object.keys(state.threads || {}).map(renderThread);
  function renderThread (id) { return _.thread(state.threads[id]) }

  return $.h(".app",
    [ _.status(state)
    , $.h(".content", [_.form()].concat(threads.reverse())) ]);

})
