(function (id, text, img) {
  return {
    id: id || $.lib.shortid(),
    time: new Date(),
    text: text,
    img: img
  }
})
