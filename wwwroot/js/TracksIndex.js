var multipleCardCarousel = document.querySelector(
    "#Tracks"
);
if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#Tracks .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#Tracks .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
    $("#Tracks .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#Tracks .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}