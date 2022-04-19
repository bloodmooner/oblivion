
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
        /* autoplay: true,
        autoplaySpeed: 3000, */
        nextArrow: $(document).find('.related__arrow_right'),
        prevArrow: $(document).find('.related__arrow_left'),
        responsive: [
            {
                breakpoint: 1291,
                settings: {
                  slidesToShow: 3,
                  dots: false,
                  arrows: true
                }
            },
            {
                breakpoint: 670,
                settings: {
                  slidesToShow: 3,
                  variableWidth: true,
                  dots: false,
                  arrows: true
                }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
                variableWidth: true,
                dots: false,
                arrows: false
              }
          },
          
        ]
      });

});

