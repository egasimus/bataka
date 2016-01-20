(function (thread) {

  var form = $.h("form.replyForm",
    [ $.h("textarea", { id: "reply" + thread.id })
    , $.h("button", { onclick: $.emit("reply", thread.id)  }, "k") ])

  return $.h(".thread", { id: "thread" + thread.id },
    [ $.h("hr") ].concat((thread.posts || []).map(_.post)).concat([form]));

})
