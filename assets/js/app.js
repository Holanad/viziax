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
    /*navigation: {
        nextEl: ".intro-slider-manager__next",
        prevEl: ".intro-slider-manager__prev",
    },*/
});



// jQuery function
$(document).ready(function() {

    // lang
    function langItems () {
        $('.header-lang').click(function() {
            $(this).toggleClass('active');
        })
    }
    langItems()


















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
        $('.question-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    minlength: 5
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
                email: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                },
                phone: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
                }
            }
        });
        $('.popup-form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                comment: {
                    required: true,
                    minlength: 5
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
                comment: {
                    required: "Заполните поле",
                    minlength: "Должно быть не менее: 5 символов"
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

