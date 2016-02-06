(function () {

  // connect to server
  var keepAlive
    , socket = new WebSocket("ws://" + window.location.host + window.location.pathname);
  socket.onclose = function () {
    if (keepAlive) keepAlive = window.clearInterval(keepAlive)
    $.state.server.set(false)
  };
  socket.onopen  = function () {
    keepAlive = window.setInterval(function () { socket.send("ping"); }, 30000)
    $.state.server.set(true)
  };
  $.state.connection.set(require('q-connection')(socket));

  // subscribe to server-side persistence store
  var update = $.emit("update");
  $.lib.q.done($.api("subscribe", update), update,
    $.lib.error("could not subscribe to server"));

  return socket;

})
