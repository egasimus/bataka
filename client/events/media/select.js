(function (id) {
  var f = document.createElement('input');
  f.type = "file"
  f.onchange = function () {
    $.emit('media/selected', id, f.files)()
  }
  f.click()
})
