export default function () {
    const $ = require("jquery");
    $(".carousel__gallery").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".carousel__prev"),
        nextArrow: $(".carousel__next"),
    });
}
