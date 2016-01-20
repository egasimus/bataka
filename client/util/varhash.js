(function (data) {
  return require('observ-varhash')(data, function (val, key) {
    return require('observ')(val)
  })
})
