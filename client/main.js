(function (app) {

  //; establish connection with api
  //(/connect)

  // insert css first to prevent fouc
  require('insert-css')($.style);

  // start vdom main loop
  var view = $.lib.riko.V($.state, $.templates.app);
  document.body.innerHTML = "";
  document.body.appendChild(view.target);

  //; load data from server
  //(/controller/emit "session.init")
  //(/controller/emit "jack.init")
  //(/controller/emit "controller.init")

  return view;

})
