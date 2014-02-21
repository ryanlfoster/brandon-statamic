$(window).load(function() {

	// Local Scroll init
	$.localScroll();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: true,
		itemWidth: 403,
		itemMargin: 5,
		move: 1,
		minItems: 1,
    	maxItems: 4
	});

	

});
