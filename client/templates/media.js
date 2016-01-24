$.lib.riko.widget(function (options) {

  // WIDGET SPECIFIC CODE

  var id = options
    , fieldId = (id ? "submitFile" : "replyFile_") + id
    , initialState = { file: null }

  function render (state) {
    return $.h(".mediaUploader", 
      [ $.h("input#" + fieldId, { type: 'file', onchange: filePicked })
      , $.h(".uploader", { onclick: pickFile },
          state.file ? state.file.name : "add media...") ])
  }
  
  function pickFile () { document.getElementById(fieldId).click() }

  function filePicked (event) {
    var file = event.target.files[0]
      , type = /^image\//;
    if (!type.test(file.type)) $.lib.error("can only upload images")()
    console.log("file", file);
    state.file.set(file);
  }

  // COMMON CODE, TODO ABSTRACT

  var state   = $.lib.riko.M(initialState)
    , vtree   = render(state)
    , element = $.lib.vdom.create(vtree);

  state(refresh);

  function refresh (state) {
    var nextVtree = render(state);
    element = $.lib.vdom.patch(element, $.lib.vdom.diff(vtree, nextVtree));
    vtree = nextVtree;
  }

  function update (prev) {
    state.set(prev.state)
  }

  return {
    element: element,
    update: update
  }

})
