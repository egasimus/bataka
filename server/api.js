require('q-api/server')(function () {
  return {
    "subscribe": function (cb) {
      if (cb) $.state(function (state) { cb(JSON.stringify(state)) });
      return JSON.stringify($.state());
    },
    "submit": function () {},
    "reply":  function () {}
  }
})
