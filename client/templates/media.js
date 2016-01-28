(function (id) {

  var vdom = require('virtual-dom');

  var widget =
    { type:
        "Widget"
    , element:
        null
    , state:
        { id:      id
        , updates: 0 }
    , init:
        function () {
          return this.element = render(this.state);
        }
    , update:
        function (previous, element) {
          this.state = previous.state;
          this.state.updates++;
          return this.element = render(this.state, previous);
        }
    , destroy:
        function (element) {
          if (this.state.fileURL) URL.revokeObjectURL(this.state.fileURL);
        }
    }

  return widget;

  function render (state, previous) {
    if (!previous) {
      return vdom.create(template(state));
    } else {
      return vdom.patch(previous.element,
        vdom.diff(previous, template(widget.state)))
    }
  }

  function template (state) {
    return $.h(".mediaUploader", { onclick: pickFile },
      [ $.h("input#upload_" + state.id, { type: 'file', onchange: filePicked })
      , state.file
        ? $.h("img",
          { src: URL.createObjectURL(state.file)
          , onload: function () { URL.revokeObjectURL(this.src) }})
        : $.h(".mediaUploaderAdd", "add media...") ])
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
    render(widget.state, widget)
  }

})
