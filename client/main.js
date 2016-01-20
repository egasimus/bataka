(function (app) {

  //; establish connection with api
  //(/connect)

  //; preprocess and insert css first to prevent fouc
  //(/lib/vdom/insert-css ./style)

  // start vdom main loop
  var view = require("glagol-web").view($.state, $.templates.app);
  console.log(view.target)
  document.body.innerHTML = "";
  document.body.appendChild(view.target)

  //; load data from server
  //(/controller/emit "session.init")
  //(/controller/emit "jack.init")
  //(/controller/emit "controller.init")

  return view;

})
