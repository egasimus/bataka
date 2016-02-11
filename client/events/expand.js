(function (threadId, event) {
  $.state.collapsedThreads.set($.state.collapsedThreads().filter(function (id) {
    return id !== threadId;
  }))
  $.util.storageSet("collapsedThreads", $.state.collapsedThreads());
})
