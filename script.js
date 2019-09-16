jQuery(".jump").click(function () {
	jQuery(window).scrollTop(0);
})
jQuery(window).scroll(function () {
	var topscroll = jQuery(window).scrollTop();
	if (topscroll > 5) {
		jQuery("#footer a.jump").show(500);
	} else {
		jQuery("#footer a.jump").hide(500);
	}
})


$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	touchDrag: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1100: {
			items: 4,
		}
	}
})

$('a.prevbtn').click(function () {
	jQuery(".owl-carousel").trigger('prev.owl');
})
$('a.nextbtn').click(function () {
	jQuery(".owl-carousel").trigger('next.owl');
})
var mixer = mixitup('.mixall');

 $('.counter').counterUp({
                delay: 10,
                time: 1000
            });