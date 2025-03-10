$(".layout-main-form-input-button-show_hide").on("click", (e) => {
  let input = $(e.currentTarget)
    .parents(".layout-main-form-input-container")
    .children(".layout-main-form-input-show_hide");
  let icon = $(e.currentTarget).children(
    ".layout-main-form-input-show_hide-img"
  );
  if (input.attr("type") == "password") {
    input.attr("placeholder", "P@$$w0rD");
    input.attr("type", "text");
    icon.attr("src", get_icon("hide"));
  } else {
    input.attr("placeholder", "########");
    input.attr("type", "password");
    icon.attr("src", get_icon("show"));
  }
  e.preventDefault();
  e.stopPropagation();
});
$(".layout-main-form-input-error").on("click", (e) => {
  $(e.currentTarget).removeClass("layout-main-form-input-error");
  $(e.currentTarget).off("click");
  $(".layout-main-form-error").remove();
});
$.preloadImages(get_icon("hide"), get_icon("show"));
