(function (key, val) {
  var key = "localstorage://" + window.location.host + window.location.pathname + key;
  localStorage.setItem(key, JSON.stringify(val));
  return val;
})
