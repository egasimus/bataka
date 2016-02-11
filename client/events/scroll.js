(function () {

  Array.prototype.forEach.call(
    document.getElementsByClassName('notSeen post'), check);

  function check (post) {
    var id   = post.parentElement.id.slice(7)
      , rect = post.getBoundingClientRect();
    if (seeing(rect)) {
      setTimeout(function () {
        if (seeing(rect)) $.emit('seen', id)();
      }, 1000);
    }
  }

  function seeing (rect) {
    return ((rect.top > 0 && rect.bottom < window.innerHeight) ||
            (rect.top < 0 && rect.bottom > window.innerHeight))
  }

})
