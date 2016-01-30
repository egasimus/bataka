(function (id) {
  $.state.media.put(id, $.state.media()[id] || {})
  $.state.media[id].put('file', null);
})
