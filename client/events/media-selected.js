(function (id, target) {
  console.log("media selected", id, target);
  $.state.media.put(id, $.state.media()[id] || {})
  $.state.media[id].put('file', target.files[0]);
  //widget.state.file = file;
  //var newElement = vdom.create(template(widget.state));
  //this.parentElement.parentElement.replaceChild(newElement, this.parentElement)
  //widget.element = newElement;
})
