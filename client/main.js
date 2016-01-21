(function (app) {

  // establish connection with server api
  var socket = new WebSocket("ws://" + window.location.host);
  socket.onclose = function () { $.state.server.set(null)   };
  socket.onopen  = function () { $.state.server.set(socket) };

  // insert css first to prevent fouc
  var css = $.util.insertCss($.style);
  app.nodes['style.styl'].events.on('edited', function () {
    css.parentElement.removeChild(css);
    css = $.util.insertCss($.style);
  });

  // start vdom main loop
  var view = $.lib.riko.V($.state, $.templates.app);
  document.body.innerHTML = "";
  document.body.appendChild(view.target);
  app.nodes['templates'].events.after('edited', function () { // TODO
    view.update($.state());
  });

  // connect to server and peers
  $.state.p2p.broker.set($.lib.peer($.state.user.id()))

  return view;

})
