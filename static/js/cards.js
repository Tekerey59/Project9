let card_resize = () => {
  let blocks = Math.floor($(".layout-main").width() / 300);
  $(".tool-cards").css("width", blocks < 4 ? blocks * 300 + blocks * 10 : 1240);
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
$(window).on("resize", card_resize);

card_resize();
