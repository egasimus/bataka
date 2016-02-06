(function (data) {

  data = JSON.parse(data);

  Object.keys(data).forEach(function (key) {
    var val = data[key];
    $.state.put(key, val);
  })

  $.util.storageSet('threads', $.state.threads());

})
