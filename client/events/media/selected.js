(function (id, file) {
  $.util.localState(id ? $.state.threads[id] : $.state).put("file", file);
})
