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
