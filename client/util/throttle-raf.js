(function (callback) {

  var throttled = false;

  return function () {
    if (throttled) return;
    throttled = true;
    var args = arguments;
    window.requestAnimationFrame(function () {
      throttled = false;
      callback.apply(null, arguments);
    })
  }

})
