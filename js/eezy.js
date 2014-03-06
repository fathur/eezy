$(".nav li a[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	// store hash
	var hash = this.hash;
	console.log(hash);
	var offset = $(this.hash).offset().top;
	
	if (hash == "#about") {
		offset -= 76;
	} 
	// animate
	$('html, body').animate({
		scrollTop: offset
	}, 1000);
	
	
	
	
	$('.nav li').removeClass('active');
	$(this).parent().addClass('active');
	//console.log();
});

$(".navbar-brand[href^='#']").on('click', function(e) {
	// prevent default anchor click behavior
	e.preventDefault();
	// store hash
	var hash = this.hash;
	console.log(hash);
	var offset = $(this.hash).offset().top;
	
	
	// animate
	$('html, body').animate({
		scrollTop: offset-100
	}, 1000);
	
	
	
	
	$('.nav li').removeClass('active');
	$(this).parent().addClass('active');
	//console.log();
});
/*
var offset = 45;

$('.nav li a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});*/