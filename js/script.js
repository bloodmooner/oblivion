
$(document).ready(function(){

    // Mobile Menu START

    let closeMenuButton = $(".header-mobile__close");
    let openMenuButton = $(".burger");
    let menuContainer = $(".header-mobile");
    let menuLinks = $(".header-mobile__link");
  
  
    openMenuButton.click(function() {
      menuContainer.addClass("header-mobile_active");
    });
  
    closeMenuButton.click(function() {
      menuContainer.removeClass("header-mobile_active");
    });
  
    menuLinks.click(function() {
      menuContainer.removeClass("header-mobile_active");
    });


    // Mobile Menu END



    // Mobile Search START

    let searchButton = $(".search");
    let searchContainer = $(".header-search");
    let searchClose = $(".header-search__close-btn");

    searchButton.click(function() {
        searchContainer.addClass("header-search_active");
    });

    searchClose.click(function() {
        searchContainer.removeClass("header-search_active");
    });

    // Mobile Search END


    $('.related__wrapper').slick({
        slidesToShow: 4,
        arrows: true,
        nextArrow: $(document).find('.related__arrow_left'),
        prevArrow: $(document).find('.related__arrow_right'),
        responsive: [
          {
            breakpoint: 1099,
            settings: {
              slidesToShow: 1,
              dots: false,
              arrows: false
            }
          },
          {
            breakpoint: 599,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

});

