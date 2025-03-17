$("#layout-header-search-button-clear").on("click", () => {
  $("#layout-header-search-input").val("");
});
$("#layout-header-search-input").on("keydown", (e) => {
  if (e.key == "Enter") {
    location.href = "/search/?q=" + $(e.currentTarget).val();
  }
});
$("#layout-header-search-button-advanced").on("click", () => {
  $(".layout-header-search-advanced").toggleClass("active");
});
$(".layout-header-search-advanced-tabs-item").on("click", (e) => {
  $(".layout-header-search-advanced-tabs-item").removeClass("active");
  $(e.currentTarget).addClass("active");
  $(".layout-header-search-advanced-tab").removeClass("active");
  $(
    `.layout-header-search-advanced-tab[data-type='${$(e.currentTarget).attr(
      "data-type"
    )}']`
  ).addClass("active");
});
$(".layout-main-sidebar-button[data-panel-id]").on("click", (e) => {
  if ($(e.currentTarget).hasClass("active")) {
    $("[data-panel-id]").removeClass("active");
  } else {
    $("[data-panel-id]").removeClass("active");
    $(e.currentTarget).addClass("active");
    $(
      `.layout-panel[data-panel-id="${$(e.currentTarget).attr(
        "data-panel-id"
      )}"]`
    ).addClass("active");
  }
});
$(".layout-panel-header-hide").on("click", (e) => {
  $("[data-panel-id]").removeClass("active");
});

// INITIALIZATION
(() => {
  cards_init();
  resize_init();
  panels_lists_init();
  likes_init();
  notifications_init();
})();
