(function () {

  // connect to server
  var socket = new WebSocket("ws://" + window.location.host);
  socket.onclose = function () { $.state.server.set(false) };
  socket.onopen  = function () { $.state.server.set(true)  };
  $.state.connection.set(require('q-connection')(socket));

  // subscribe to server-side persistence store
  var update = $.emit("update");
  $.lib.q.done($.api("subscribe", update), update,
    $.lib.error("could not subscribe to server"));

  return socket;

})
