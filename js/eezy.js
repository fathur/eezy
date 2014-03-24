

function detectmob() { 
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}

function genSwipeObj() {
	return  {
		swipeLeft:function(event, direction, distance, duration, fingerCount) {
			$(this).parent().carousel('next');
		},
		swipeRight: function() {
			$(this).parent().carousel('prev'); 
		},
		threshold:0
	}
}

var getIOSWindowHeight = function() {
    // Get zoom level of mobile Safari
    // Note, that such zoom detection might not work correctly in other browsers
    // We use width, instead of height, because there are no vertical toolbars :)
    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;

    // window.innerHeight returns height of the visible area. 
    // We multiply it by zoom and get out real height.
    return window.innerHeight * zoomLevel;
};

// You can also get height of the toolbars that are currently displayed
var getHeightOfIOSToolbars = function() {
    var tH = (window.orientation === 0 ? screen.height : screen.width) -  getIOSWindowHeight();
    return tH > 1 ? tH : 0;
};

function normalizeHeights(items,heights,tallest) {
	items.each(function(){
		var height;
		if (iOS) {
			height = $(this).height();
		}
		else {
			height = $(this).height();
		}
		heights.push(height);		
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