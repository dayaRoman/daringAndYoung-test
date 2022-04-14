export default function () {
    const $ = require("jquery");
    $(".carousel__gallery").slick({
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $(".carousel__prev"),
        nextArrow: $(".carousel__next"),
    });
}
