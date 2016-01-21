(function (state) {

  var submit = $.h("form.submitForm",
    [ $.h("textarea", { id: "submitText" })
    , $.h("button", { onclick: $.emit("submit")  }, "sup") ])

  var threads = Object.keys(state.threads || {}).map(renderThread);
  function renderThread (id) { return _.thread(state.threads[id]) }

  return $.h(".app", [submit].concat(threads));
})
