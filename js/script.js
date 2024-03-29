$('.banner_slid').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    // fade: true,
    // dots: true,
});



$('.review_slider').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow:`<i class="fa-solid fa-arrow-left prev"></i>`,
    nextArrow:`<i class="fa-solid fa-arrow-right next"></i>`,

    responsive: [
     
        {
          breakpoint: 412.98,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },

        {
          breakpoint: 767.98,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }

    


      ]
    
});