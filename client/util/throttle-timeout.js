(function (time, callback) {

  var throttle;
  
  return function () {
    if (throttle) return;
    var args = arguments;
    throttle = setTimeout(function () {
      throttle = clearTimeout(throttle);
      callback.apply(null, arguments);
    }, time)
  }

})
