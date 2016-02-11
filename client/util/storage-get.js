(function (key, newVal) {
  var key = "localstorage://" + window.location.host + window.location.pathname + key;
  if (localStorage.getItem(key)) try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return _.storageSet(key, newVal);
  }
  return _.storageSet(key, newVal);
})
