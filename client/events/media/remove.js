(function (id) {
  var thread = id ? $.state.threads[id] : $.state;
  $.util.localState(thread).put("file", null);
})
