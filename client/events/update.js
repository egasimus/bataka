(function (data) {

  data = JSON.parse(data);

  Object.keys(data).forEach(function (key) {
    var val = data[key];
    $.state.put(key, val);
    if (key === "threads") $.util.storageSet(key, val);
  })

})
