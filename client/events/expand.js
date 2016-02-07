(function (threadId, event) {
  $.util.localState($.state.threads[threadId]).put("collapsed", false);
})
