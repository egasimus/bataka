(function (thread) {
  
  var collapsed = (thread.local || {}).collapsed
    , firstPost = thread.posts[0];

  var body = [ $.h(".threadCollapse",
    { onclick: $.emit(collapsed ? "expand" : "collapse", thread.id)},
    collapsed
      ? [ "[expand]" 
        , $.h(".postUserName", firstPost.user || $.h("em", "onanimus")) 
        , $.h(".postText", firstPost.text.slice(0, 50).concat("...")) ]
      : "[collapse]") ];

  if (!collapsed) {
    body = body
      .concat((thread.posts || []).map(_.post))
      .concat([ _.form(thread) ]);
  }

  return $.h(".thread", { id: "thread_" + thread.id }, body);
    
})
