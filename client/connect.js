(function () {
  var socket = new WebSocket("ws://" + window.location.host);
  socket.onclose = function () { $.state.server.set(false) };
  socket.onopen  = function () { $.state.server.set(true)  };
  $.state.connection.set(require('q-connection')(socket));
  return socket;
})
