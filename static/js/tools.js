jQuery.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    jQuery("<img>").attr("src", arguments[i]);
  }
};
let get_icon = (icon, t = true) => {
  return t
    ? `/static/images/ui/${THEME_TYPE}/${icon}.png`
    : `/static/images/ui/${icon}.png`;
};
let cards_resize = () => {
  let blocks = Math.floor(($(".layout-main-container").width() - 40) / 300);
  $(".cards-category").css(
    "width",
    blocks < 4 ? blocks * 300 + (blocks - 1) * 10 : 1240
  );
};
let cards_set_like = (id, liked) => {
  let element = $(`.tool-cards-item[data-id="${id}"] > .tool-cards-item-like`);
  if (liked) {
    element.attr("src", get_icon("heart-red", false));
  } else {
    element.attr("src", get_icon("heart-empty", false));
  }
  $(`.tool-cards-item[data-id="${id}"]`).attr("data-liked", liked);
};
let cards_init = () => {
  $(".tool-cards-item-like").on("click", (e) => {
    let element = $(e.currentTarget).parents(".tool-cards-item");
    let id = element.attr("data-id");
    let type = element.attr("data-type");
    let liked = element.attr("data-liked") == "true";

    cards_set_like(id, !liked);

    $.ajax({
      url: `/${type}/${id}/like`,
      method: "post",
      dataType: "json",
      data: { liked: !liked },
      success: (data) => {
        cards_set_like(id, data["liked"] == "true");
      },
    });
  });
  $(".tool-cards-item").on("mouseup", (e) => {
    if (
      e.button == 0 &&
      !document.getSelection().toString() &&
      !$(e.target).hasClass("tool-cards-item-like")
    ) {
      location.href =
        "/" +
        $(e.currentTarget).attr("data-type") +
        "/" +
        $(e.currentTarget).attr("data-id") +
        "/";
    }
  });
  $.preloadImages(get_icon("heart-red", false), get_icon("heart-empty", false));
  $(window).on("resize", cards_resize);
  cards_resize();
};
