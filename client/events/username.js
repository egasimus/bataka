(function (event) {

  var nick = event.target.value;
  $.state.user.nick.set(nick);
  $.util.storageSet('user', $.state.user());

})
