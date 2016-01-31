(function (id) {
  var f = document.createElement('input');
  f.type = "file"
  f.onchange = function () {
    $.emit('media/selected', id, f.files[0])()
  }
  f.click()
})
