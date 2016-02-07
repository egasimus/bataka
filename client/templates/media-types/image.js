(function (url) {
  return $.h("a", { href: url, target: "_blank" },
    $.h("img.postMediaImage.lazyload",
      $.options.gui.lazyLoad
        ? { attributes: { "data-src": url } }
        : { src: url }));
})
