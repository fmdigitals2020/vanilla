function menuActive(){
    document.getElementById('navigations').classList.toggle('active')
}

$('.satisfied-slider').slick({
    centerMode: true,
    cssEase: 'linear',
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll : 1,
    centerPadding: '0',
    responsive: [
        {
        breakpoint: 992,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        }
        },
    ]
});


function mobileOnlySlider() {
    $('.ingredients-content').slick({
    autoplay: false,
    speed: 1000,
    dots : true,
    arrows : true,
    slidesToShow : 1,
    infinite : false,
    autoplaySpeed: 5000
    });
    }
    if(window.innerWidth < 576) {
    mobileOnlySlider();
    }

    $(window).resize(function(e){
    if(window.innerWidth < 576) {
        if(!$('.ingredients-content').hasClass('slick-initialized')){
            mobileOnlySlider();
        }

    }else{
        if($('.ingredients-content').hasClass('slick-initialized')){
            $('.ingredients-content').slick('unslick');
        }
    }
});