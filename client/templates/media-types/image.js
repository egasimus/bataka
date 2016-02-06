(function (url) {
  return $.h("a", { href: url, target: "_blank" },
    $.h("img.postMediaImage.lazyload",
      { attributes: { "data-src": url } }));
})
