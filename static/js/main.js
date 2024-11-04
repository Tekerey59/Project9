$("#layout-header-search-button-clear").on("click", () => {
    $("#layout-header-search-input").val("")
})
$("#layout-header-search-button-send").on("click", () => {
    location.replace("/search/?q=" + $("#layout-header-search-input").val())
})