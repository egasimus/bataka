(function (id, files) {
  $.state.media.put(id, $.state.media()[id] || {})
  $.state.media[id].put('file', files[0]);
})
