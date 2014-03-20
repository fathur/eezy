$(".nav li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	// store hash
	var hash = this.hash;
	var offset = $(this.hash).offset().top;	
	if($(window).width() < 767) {
		offset -= 58;
	} else {
		offset -= 76;
	}	
	$('html, body').animate({
		scrollTop: offset
	}, 1000);
	$('.nav li').removeClass('active');
	$(this).parent().addClass('active');
});

$(".navbar-brand[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	// store hash
	var hash = this.hash;
	var offset = $(this.hash).offset().top;
	// animate
	$('html, body').animate({
		scrollTop: offset-100
	}, 1000);
	$('.nav li').removeClass('active');
	$(this).parent().addClass('active');
});

function normalizeHeights(items,heights,tallest) {
	items.each(function(){
		heights.push($(this).height());		
	});
	tallest = Math.max.apply(null, heights);
	
	items.each(function(){
		$(this).css('height', tallest + 60 + 'px');
	});
}

function carouselNormalization(id) {
	var items 	= $(id+' .item');
	var heights	= [];
	var tallest;
	
	if (items.length) {
		normalizeHeights(items,heights,tallest);
	}
		
	/*var items = $('#ez-six .item'), //grab all slides
		heights = [], //create empty array to store height values
		tallest; //create variable to make note of the tallest slide

	if (items.length) {
		function normalizeHeights() {
			items.each(function() { //add heights to array
				heights.push($(this).height()); 
			});
			tallest = Math.max.apply(null, heights); //cache largest value
			items.each(function() {
				$(this).css('min-height',tallest + 'px');
			});
		};
		normalizeHeights();

		$(window).on('resize orientationchange', function () {
			tallest = 0, heights.length = 0; //reset vars
			items.each(function() {
				$(this).css('min-height','0'); //reset min-height
			}); 
			normalizeHeights(); //run it again 
		});
	}*/
}