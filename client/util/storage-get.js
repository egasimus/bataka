(function (key, newVal) {
  console.log(localStorage.getItem(key))
  if (localStorage.getItem(key)) try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return _.storageSet(key, newVal);
  }
  return _.storageSet(key, newVal);
})
