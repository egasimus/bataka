(function (id) {

  var vdom = require('virtual-dom');

  var widget =
    { type:
        "Widget"
    , name:
        "BatakaMediaWidget"
    , id:
        "BatakaMediaWidget"
    , element:
        null
    , state:
        { id:      id
        , updates: 0 }
    , init:
        function () {
          return this.element = vdom.create(template(this.state));
        }
    , update:
        function (previous, element) {
          console.log("update", this.state.id, previous.state)
          this.state = previous.state;
          this.element = vdom.patch(element || previous.element, vdom.diff(template(previous.state), template(this.state)))
        }
    , destroy:
        function (element) {
          if (this.state.fileURL) URL.revokeObjectURL(this.state.fileURL);
        }
    }

  return widget;

  function template (state) {
    console.log("render", state)
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
    console.log(widget.element, id)
    var newElement = vdom.create(template(widget.state));
    console.log(this.parentElement)
    this.parentElement.parentElement.replaceChild(newElement, this.parentElement)
    widget.element = newElement;
  }

})
