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