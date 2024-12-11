jQuery(document).ready(function($) {
    $(document).ready(function() {
        $('.slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3, 
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('#prev-slide').on('click', function() {
            $('.slider').slick('slickPrev'); 
        });

        $('#next-slide').on('click', function() {
            $('.slider').slick('slickNext');
        });
    });
});
