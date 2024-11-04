let card_resize = () => {
    let blocks = Math.floor($(".layout-main").width() / 300)
    $(".tool-cards").css("width", blocks * 300 + blocks * 10)
}
(() => {
    $(window).on("resize", card_resize);
    card_resize()
})()