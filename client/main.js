(function (app) {

  //; establish connection with api
  //(/connect)

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

  //; load data from server
  //(/controller/emit "session.init")
  //(/controller/emit "jack.init")
  //(/controller/emit "controller.init")

  return view;

})
