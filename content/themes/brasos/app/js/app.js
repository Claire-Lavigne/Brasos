import UIkit from 'uikit';
import 'slick-carousel';
import Icons from 'uikit/dist/js/uikit-icons';


var app = {
  init: function () {
    //   console.log('init');
    // loads the Icon plugin
    UIkit.use(Icons);

    if ($('body').hasClass('home')) {
      var popup = $('.modal-image').attr('src');
      if (popup != '') {
        UIkit.modal('#modal-media-image').show();
      } else {
        UIkit.modal('#modal-media-image').hide();
      }
    }

    // NAVBAR AND SIDEBAR 
    $('body').css('visibility', 'visible');
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(2) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(3) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(4) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(5) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(6) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .uk-navbar-nav:nth-of-type(2) > li:nth-of-type(8) > a').removeAttr("href").css("cursor", "default");
    $('.uk-navbar-container .sub-menu').addClass('uk-nav uk-navbar-dropdown-nav');
    $('.uk-navbar-container .sub-menu').wrap('<div class="uk-navbar-dropdown uk-navbar-dropdown-dropbar">');

    // sidebar dropdown
    $('#menu-item-1002 > a').attr("uk-icon", "icon: triangle-down");
    $('#menu-item-695 > a').attr("uk-icon", "icon: triangle-down");
    $('#menu-item-949 > a').attr("uk-icon", "icon: triangle-down");
    $('#menu-item-969 > a').attr("uk-icon", "icon: triangle-down");
    $('#menu-item-693 > a').attr("uk-icon", "icon: triangle-down");
    $('#menu-item-1182 > a').attr("uk-icon", "icon: triangle-down");
    // $('#menu-item-699 > a').attr( "uk-icon", "icon: triangle-down" ); //local
    // $('#menu-item-695 > a').attr( "uk-icon", "icon: triangle-down" ); //local

    $(".white-block .menu-item-has-children").each(function () {
      $(this).click(function () {
        var dropdownContent = $(this).find('.sub-menu');
        dropdownContent.toggleClass('sub-menu-show');
      });
    });



    $(".slick-carousel-small").slick({
      autoplay: true,
      // dots: true,
      arrows: false,
      autoplaySpeed: 6000
    });

    $('.fade').slick({
      autoplay: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });


    var ctlrManyElementsManyTimes = new ScrollMagic.Controller();
    $("div").each(function () {
      var fadeTop = $(this).find(".fadeTop");
      var fadeLeft = $(this).find(".fadeLeft");
      var fadeRight = $(this).find(".fadeRight");
      var fadeBottom = $(this).find(".fadeBottom");
      var tl = new TimelineMax();
      tl.fromTo(fadeTop, 0.3,
        { opacity: 0, y: -50, x: 0, ease: 'ease-out' },
        { opacity: 1, y: 0 }
      )
        .fromTo(fadeLeft, 0.3,
          { opacity: 0, x: -50, y: 0, ease: 'ease-out' },
          { opacity: 1, x: 0 }
        )
        .fromTo(fadeRight, 0.3,
          { opacity: 0, x: 50, y: 0, ease: 'ease-out' },
          { opacity: 1, x: 0 }
        )
        .fromTo(fadeBottom, 0.3,
          { opacity: 0, y: 50, x: 0, ease: 'ease-out' },
          { opacity: 1, y: 0 }
        );
      new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.9, // or onEnter
        offset: 45,
        reverse: false
      })
        .setTween(tl)
        .addTo(ctlrManyElementsManyTimes);
    });

    // SCROLL BUTTON
    $(document).on('click', '#indiceBtn', function (event) {
      $('html,body').animate({
        scrollTop: "0"
      }, 1000);
    });


  }
};

$(app.init);
