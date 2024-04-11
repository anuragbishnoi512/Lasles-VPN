let menuicon = document.querySelector(".nav-menu");
let menulist = document.querySelector(".navbar-items");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
})


$('.sliderbox').slick({
    dots: true,
    infinite: false,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
            }
        }
    ]
});
