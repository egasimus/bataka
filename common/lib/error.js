(function error () {
  var msg = Array.prototype.join.call(arguments, " ");
  return function (e) {
    if (e instanceof Error) {
      console.error(msg)
      console.log(e.message)
      console.log(e.stack)
    } else {
      console.error(e)
    }
  }
})
