(function (threadId, event) {
  $.util.localState($.state.threads[threadId]).put("collapsed", true);
})
