$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 110) {
            $(".header_navbar").removeClass("sticky");
            $(".navbar_transparent img").attr("src", "assets/images/logo-white.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".navbar_transparent img").attr("src", "assets/images/logo.png");
        }
    });



    //===== Mobile Menu

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });

        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });

    }


    //===== Nice Select

    $('select').niceSelect();


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //====== Magnific Popup

    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });


    //===== Magnific Popup

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    //===== Slick Testimonial

    $('.testimonial_active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
          ]
    });


    //===== Range Slider Price Range

    var $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 500,
        max = 8000,
        from = 0,
        to = 0;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: 500,
        to: 5500,
        onStart: updateInputs,
        onChange: updateInputs
    });
    instance = $range.data("ionRangeSlider");

    function updateInputs(data) {
        from = data.from;
        to = data.to;

        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }

    $inputFrom.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }

        instance.update({
            from: val
        });
    });

    $inputTo.on("input", function () {
        var val = $(this).prop("value");

        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }

        instance.update({
            to: val
        });
    });



    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== 









});


// select2 js
$("#categoriesSelect").select2();
$("#countrySelector").select2();
$("#stateSelector").select2();
$("#citySelector").select2();
$("#stateSelect").select2();
$("#countryselect").select2();
$("#sortSelector").select2();
$("#locSelect").select2();
$("#catSelect").select2();
$("#storySelect").select2();
$("#locaSelect").select2();
$("#itemSelect").select2();


// submenu
$('.subMenuOpener').click(function(event){
    // event.preventDefault()
    $('.subMenuItems').toggle(200)
})
// $('.dashboardMenuOpener a').click(function(event){
//     event.preventDefault()
//     $('.dashboardItems').toggle(200)
// })

var angle=0
$('.subMenuOpener').click(function(){
    if(angle%2==0){
        $('.fa-angle-left').css("transform","rotate(-90deg)")
        $('.subMenuOpener').addClass("active")
        angle++
    }
    else{
        $('.fa-angle-left').css("transform","rotate(-0deg)")
        $('.subMenuOpener').removeClass("active")
        angle++
    }
})

$('.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-angle-right')

var ddl = 0
$('.navbar_btn .dropdown').click(function(){
    if(ddl%2==0){
        $('#dropdownMenuLink').addClass('active')
        ddl++
    }
    else{
        $('#dropdownMenuLink').removeClass('active')
        ddl++
    }
    
})

// $('.page_banner').click(function(){
//     // if($('#dropdownMenuLink').hasClass('active')){
//         $('#dropdownMenuLink').removeClass('active')
//         ddl=0
//     // }
// })

if($('.dropdown').hasClass('show')){
    console.log("yes")
}
else{
    console.log("no")
}

$('.sideBarToggler').click(function(){
    $('.sidebar_categories_content').toggle(100)
})

$('.dashboardsidebartoggler').click(function(){
    $('.user_list').toggle(100)
})
var floating = 0
$('.socialIcons').click(function(){
    if(floating % 2 == 0){
        $('.socialIcons ul li a').addClass('floating-share')
        floating++
    }
    else{
        $('.socialIcons ul li a').removeClass('floating-share')
        floating++
    }
})

// $('.socialIcons').click(function(){
//     $('.fbLink').toggle(200)
// })
// .socialIcons ul li a {
// 	display: block;
// 	background: #FF4367;
// 	position: absolute;
// 	top: -50px;
// }

$('.navbar-nav ul li a').click(function(){
    $('navbar-nav ul li ul.submenu').show()
})

$('.offermessagebtn').click(function(event){
    console.log("hi")
    event.preventDefault()
    $('.newDropDown').toggle()
})
$('#dropdownMenuLink').click(function(){
    $('.dropdown-menu').toggle()
})

var rot = 0
$('.dashMenu').click(function(event){
    event.preventDefault()
    $('.dashboardItems').toggle()
    if(rot%2==0){
        $('.dashMenu .fa-angle-right').css('transform','rotate(90deg)')
        rot++
    }
    else{
        $('.dashMenu .fa-angle-right').css('transform','rotate(-0deg)')
        rot++
    }
})

var hh = 0
$(document).click(function(){
    if(hh == 1){
        $('.dropdown-menu').hide()
        $('.newDropDown').hide()
        hh=0
    }
    else{
        $('.dropdown-menu').click(function(){
            $('.dropdown-menu').show()
        })
        hh=1
    }
    // $('.dropdown-menu').click(function(){
        
    // })
   
})