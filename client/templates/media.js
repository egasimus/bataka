(function (id) {

  var vdom = require('virtual-dom');

  var widget =
    { type:
        "Widget"
    , state:
        { id:      id
        , updates: 0 }
    , init:
        function () {
          return render(this.state);
        }
    , update:
        function (previous, element) {
          this.state = previous.state;
          this.state.updates++;
          return render(this.state, previous, element);
        }
    , destroy:
        function (element) {
        }
    }

  return widget;

  function render (state, previous, element) {
    if (!previous) {
      return vdom.create(template(state));
    } else {
      vdom.patch(element, vdom.diff(previous, template(widget.state)))
      return element;
    }
  }

  function template (state) {
    return $.h(".mediaUploader",
      [ $.h("input#upload_" + state.id, { type: 'file', onchange: filePicked })
      , $.h(".uploader", { onclick: pickFile },
          state.file ? state.file.name : "add media...") ])
  }

  function pickFile () {
    document.getElementById("upload_" + widget.state.id).click()
  }

  function filePicked (event) {
    var file = event.target.files[0]
      , type = /^image\//;
    if (!type.test(file.type)) $.lib.error("can only upload images")()
    console.log("file", file);
    widget.state.file = file;
    widget = widget.update(widget, widget.element)
  }

})
