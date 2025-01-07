let cards_resize = () => {
  let blocks = Math.floor(($(".layout-main-container").width() - 40) / 300);
  $(".cards-category").css(
    "width",
    blocks < 4 ? blocks * 300 + (blocks - 1) * 10 : 1240
  );
};
let cards_set_like = (id, state) => {
  let element = $(`.tool-cards-item[data-id="${id}"] > .tool-cards-item-like`);
  if (state) {
    element.attr("src", "/static/images/ui/heart-red.png");
  } else {
    element.attr("src", "/static/images/ui/heart-empty-dark.png");
  }
  element.attr("data-state", state);
};
$(".tool-cards-item-like").on("click", (e) => {
  let id = $(e.currentTarget).attr("data-id");
  let state = $(e.currentTarget).attr("data-state") == "true";
  cards_set_like(id, !state);
  $.ajax({
    url: "/substance/like",
    method: "post",
    dataType: "json",
    data: { id: id, state: !state },
    success: (data) => {
      cards_set_like(id, data["state"] == "true");
    },
  });
});
$(".tool-cards-item").on("mouseup", (e) => {
  if (!document.getSelection().toString() && !$(e.target).attr("data-state")) {
    location.href = "/" + $(e.currentTarget).attr("data-id") + "/";
  }
});
jQuery.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    jQuery("<img>").attr("src", arguments[i]);
  }
};
