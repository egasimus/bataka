(function () {

  // connect to server and peers
  $.connect();
  //$.state.p2p.broker.set($.lib.peer($.state.user.id()));

  // insert css first to prevent fouc
  var css = $.util.insertCss($.style);

  // start vdom main loop, initialize lazy image loader
  var view = $.lib.riko.V($.state, $.templates.app);
  //$.util.lazyLoader.init();
  document.body.innerHTML = "";
  document.body.appendChild(view.target);

  // update while editing source
  Glagol.events.on('changed', function (node) {
    if (node.path === "/main.js") {
      window.location.reload();
    }
    if (node.path === "/style.styl") {
      css.parentElement.removeChild(css);
      css = $.util.insertCss($.style);
    };
    if (node.path.indexOf('/templates') === 0) {
      view.update($.state());
    }
  })

  return view;

})
