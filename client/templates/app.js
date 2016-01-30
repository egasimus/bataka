(function (state) {

  console.log(state.media)

  var threads = Object.keys(state.threads || {}).map(renderThread);
  function renderThread (id) { return _.thread(state.threads[id], state.media[id]) }

  return $.h(".app",
    [ _.status(state)
    , $.h(".content", [_.form(undefined, state.media[undefined])].concat(threads.reverse())) ]);

})
