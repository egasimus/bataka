(function (socket) {

  //var people = $.state.people();
  //people++;
  //$.state.people.set(people);

  //socket.on("close", function () {
    //var people = $.state.people();
    //people--;
    //$.state.people.set(people);
  //})

  return require("q-connection")(socket, function () {
    return $.api.apply(null, arguments)
  })
})
