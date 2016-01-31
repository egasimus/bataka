(function (id) {
  $.util.localState(id ? $.state.threads[id] : $.state).put("file", null);
})
