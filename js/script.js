(function($) {
	"use strict";

	$(document).on('click', '.popup-close, .popup-overlay', function(){
		$('.popup-container, .popup-overlay').fadeOut();
	});

})(jQuery);