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
