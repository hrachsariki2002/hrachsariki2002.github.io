$('.hamburger').click(function() {
	$(this).toggleClass('is-active');
	$('.mobile-menu').toggleClass('active');
	//$('body').css({'height': '100%', 'overflow': 'hidden'});
	$('body').toggleClass('disableScroll');
});

$('#first-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#second-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})