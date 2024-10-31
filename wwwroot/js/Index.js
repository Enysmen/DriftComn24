
/*
var carouselWidth = $(".carousel-inner")[0].scrollWidth;

var cardWidth = $(".carousel-item").width();

var scrollPosition = 0;

$(".carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth * 4)) { //check if you can go any further
        scrollPosition += cardWidth * 2;  //update scroll position
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
    }
});

$(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth * 2;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition },600);
    }
});
*/


var multipleCardCarousel = document.querySelector(
    "#carouselExample"
);
if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExample .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth ;
            $("#carouselExample .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
    $("#carouselExample .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth ;
            $("#carouselExample .carousel-inner").animate(
                { scrollLeft: scrollPosition },
                600
            );
        }
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}
