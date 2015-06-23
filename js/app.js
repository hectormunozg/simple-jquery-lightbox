// Simple lightbox
var imageUrl     = 0;
var imagePath    = '#gallery > .container > .row > div > a > img';
var overlay      = $('<div id="overlay"></div>'); 
var image 		 = $('<img>');

overlay.append(image);
$('body').append(overlay);
// On mouse click - display overlay 
$(imagePath).click(function(event) {
	event.preventDefault();
	// get image url
	imageUrl = $(this).attr('src');
	// toggle overlay
	$('#overlay').toggle();
	// show image in overlay
	image.attr('src', imageUrl);
	// closing overlay if it is visible
});

// if overlay is visible hide it on click
overlay.click(function() {
	overlay.hide();
});


