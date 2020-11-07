$(function() {
    $(".main-slider-1").slick();
});
$(function() {
    let mainSlider = $(".main-slider-2").slick({
        infinite: false
    });

    $(".thumb-slider").slick({
        asNavFor: mainSlider,
        slidesToShow: 4,
        focusOnSelect: true,
        arrows: false,
        infinite: false
    });
});