(function (app) {

  // connect to server and peers
  $.connect();
  //$.state.p2p.broker.set($.lib.peer($.state.user.id()));

  // insert css first to prevent fouc
  var css = $.util.insertCss($.style);
  app.nodes['style.styl'].events.on('edited', function () {
    css.parentElement.removeChild(css);
    css = $.util.insertCss($.style);
  });

  // start vdom main loop, initialize lazy image loader
  var view = $.lib.riko.V($.state, $.templates.app);
  $.util.lazysizes.init();
  document.body.innerHTML = "";
  document.body.appendChild(view.target);
  app.nodes['templates'].events.after('edited', function () { // TODO
    view.update($.state());
  });

  return view;

})
