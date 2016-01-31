(function (model) {
  model.put("local", model.local ? model.local() : {})
  return model.local;
})
