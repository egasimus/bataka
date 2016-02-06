(function (url) {
  return $.h("a", { href: url, target: "_blank" },
    $.h("img.postMediaImage", { src: url }));
})
