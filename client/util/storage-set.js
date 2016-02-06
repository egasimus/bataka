(function (key, val) {
  localStorage.setItem(key, JSON.stringify(val));
  return val;
})
