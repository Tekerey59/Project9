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
let resize_init = () => {
  let sections_resize = () => {
    let blocks = Math.floor(($(".layout-main-container").width() - 40) / 300);
    $(".cards-category, .tool-notifications").css(
      "width",
      blocks < 4 ? blocks * 300 + (blocks - 1) * 10 : 1240
    );
  };
  sections_resize();
  $(window).on("resize", sections_resize);
};
let cards_init = () => {
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
};
let panels_lists_init = () => {
  $(document).on("mouseup", ".tool-panel-list-item", (e) => {
    if (
      e.button == 0 &&
      !document.getSelection().toString() &&
      !$(e.target).hasClass("tool-panel-list-item-like")
    ) {
      location.href =
        "/" +
        $(e.currentTarget).attr("data-type") +
        "/" +
        $(e.currentTarget).attr("data-id") +
        "/";
    }
  });
};
let set_like = (data) => {
  let element = $(
    `.tool-cards-item[data-id="${data["id"]}"] > .tool-cards-item-like, .tool-panel-list-item[data-id="${data["id"]}"] > .tool-panel-list-item-like`
  );
  if (data["liked"]) {
    element.attr("src", get_icon("heart-red", false));
  } else {
    element.attr("src", get_icon("heart-empty", false));
  }
  if (data["liked"]) {
    $(`[data-panel-id="likes"] .tool-panel-list`).append(`
      <div class="tool-panel-list-item" data-id="${data["id"]}" data-type="${data["id"]}" data-liked="true">
        <img class="tool-panel-list-item-image" src="/static/db/structures/${data["id"]}.png" alt="">
        <img src="/static/images/ui/heart-red.png" alt="" class="tool-panel-list-item-like">
        <div class="tool-panel-list-item-information">
          <div class="tool-panel-list-item-information-name">${data["name"]}</div>
          <div class="tool-panel-list-item-information-extra">${data["name_iupac"]}</div>
        </div>
      </div>
      `);
  } else {
    $(`[data-panel-id="likes"] .tool-panel-list`).html(
      $.parseHTML($(`[data-panel-id="likes"] .tool-panel-list`).html()).filter(
        (el) =>
          el.attributes
            ? el.attributes["data-id"].value != data["id"] &&
              el.attributes["data-type"].value != data["type"]
            : false
      )
    );
  }

  $(
    `.tool-cards-item[data-id="${data["id"]}"], .tool-panel-list-item[data-id="${data["id"]}"]`
  ).data("liked", data["liked"]);
};
let likes_init = () => {
  $(document).on(
    "click",
    ".tool-panel-list-item-like, .tool-cards-item-like",
    (e) => {
      let data = $(e.currentTarget)
        .parents(".tool-panel-list-item, .tool-cards-item")
        .data();
      set_like(
        Object.assign(data, {
          name_iupac: data["nameIupac"],
          liked: !data["liked"],
        })
      );

      $.ajax({
        url: `/${data["type"]}/${data["id"]}/like`,
        method: "post",
        dataType: "json",
        data: { liked: data["liked"] },
        success: set_like,
      });
    }
  );
};
let notifications_init = () => {
  $(document).on("click", ".tool-notifications-item-remove", (e) => {
    $(e.currentTarget).parents(".tool-notifications-item").remove();
  });
};
