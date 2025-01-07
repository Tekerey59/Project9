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
let cards_set_like = (id, state) => {
  let element = $(`.tool-cards-item[data-id="${id}"] > .tool-cards-item-like`);
  if (state) {
    element.attr("src", get_icon("heart-red", false));
  } else {
    element.attr("src", get_icon("heart-empty", false));
  }
  element.attr("data-state", state);
};
let cards_init = () => {
  $(".tool-cards-item-like").on("click", (e) => {
    let id = $(e.currentTarget).attr("data-id");
    let state = $(e.currentTarget).attr("data-state") == "true";
    cards_set_like(id, !state);
    $.ajax({
      url: `/substance/${id}/like`,
      method: "post",
      dataType: "json",
      data: { state: !state },
      success: (data) => {
        cards_set_like(id, data["state"] == "true");
      },
    });
  });
  $(".tool-cards-item").on("mouseup", (e) => {
    if (
      !document.getSelection().toString() &&
      !$(e.target).attr("data-state")
    ) {
      location.href = "/" + $(e.currentTarget).attr("data-id") + "/";
    }
  });
  $.preloadImages(get_icon("heart-red", false), get_icon("heart-empty", false));
  $(window).on("resize", cards_resize);
  cards_resize();
};
