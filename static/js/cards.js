let cards_resize = () => {
  let blocks = Math.floor($(".layout-main").width() / 300);
  // TODO
  // let width = blocks < 4 ? blocks * 300 + (blocks - 1) * 10 : 1240
  // $("tool-cards").css("width", )
  $(".tool-cards")
    .get()
    .forEach((element) => {
      let count = $(element).children().length;
      let len = blocks < count ? blocks : count;
      let width = len < 4 ? len * 300 + (len - 1) * 10 : 1240
      $(element).css("width", width);
      $(element).parents(".cards-category").children(".cards-category-header").css("width", width)
    });
};
let set_like = (element, state) => {
  if (state) {
    $(element).attr("src", "/static/images/ui/heart-red.png");
  } else {
    $(element).attr("src", "/static/images/ui/heart-empty.png");
  }
  $(element).attr("data-state", state);
};
$(".tool-cards-item-like").on("click", (e) => {
  let id = $(e.currentTarget).attr("data-id");
  let state = $(e.currentTarget).attr("data-state") == "true";
  set_like(e.currentTarget, !state);
  $.ajax({
    url: "/api/like" + (state ? "_off/" : "_on/"),
    method: "post",
    dataType: "json",
    data: { id: id },
    success: (data) => {
      set_like(e.currentTarget, data["state"] == "true");
    },
  });
});
$(".tool-cards-item").on("mouseup", (e) => {
  if (!document.getSelection().toString() && !$(e.target).attr("data-state")) {
    location.href = "/" + $(e.currentTarget).attr("data-id") + "/";
  }
});
$(window).on("resize", cards_resize);

cards_resize();
