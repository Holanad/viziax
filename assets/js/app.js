// LazyLoad
var myLazyLoad = new LazyLoad();


const swiperIntro = new Swiper(".intro-slider", {
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: ".intro-slider-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});



// jQuery function
$(document).ready(function() {

    // lang
    function langItems() {
        $('.header-lang').click(function() {
            $(this).toggleClass('active');
        })
    }
    langItems();

    //stickyNavigationBG
    function stickyNavigationBG() {
        let headerHeight = $('.header').height();
        if ($(window).scrollTop() > headerHeight) {
            $('.navigation').addClass('navigation-sticky');
        } else {
            $('.navigation').removeClass('navigation-sticky');
        }
        $(window).scroll(function() {
            if ($(window).scrollTop() > headerHeight) {
                $('.navigation').addClass('navigation-sticky');
            } else {
                $('.navigation').removeClass('navigation-sticky');
            }
        })
    }
    stickyNavigationBG();

    // accordion
    function accordion() {
        $(".accordion").click(function(){
            $(this).toggleClass("open").next().slideToggle();
            $(".accordion").not(this).removeClass("open").next().slideUp();
        });
    };
    accordion();

















    // Arrow UP
    function scrollUp () {
        $('.footer-arrow').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 1500);
        });
    };
    scrollUp();



    // Закрытие модального окна
    function closeModal() {
        $('.popup-close').click(function() {
        $('html').removeClass('blocking');
        $('.duty').removeClass('open');
        });
        $(document).mouseup(function (e) {
        var container = $(".crop");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('html').removeClass('blocking');
            $('.duty').removeClass('open');
        }
        });
    };
    closeModal();
       
    // Модалка на контактах   
    function modal() { 
        $('.modal').click(function (e) {
            e.preventDefault();
            $('.popup').addClass('open');
            $('html').addClass('hidden');
        })
    }
    modal();
    //Валидации сайта
    function formValidate() {
        $('.consultation-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                name: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 2 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                }
            }
        });
    };
    formValidate();
});

