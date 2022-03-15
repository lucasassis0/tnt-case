$(document).ready(function () {
    $('.review').slick({
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
});

function openLink() {
    window.open("https://www.tntdental.com/", "_blank");
}