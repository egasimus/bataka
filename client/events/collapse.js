(function (threadId, event) {
  if ($.state.collapsedThreads().indexOf(threadId) < 0) {
    $.state.collapsedThreads.push(threadId);
  }
  $.util.storageSet("collapsedThreads", $.state.collapsedThreads());
})
