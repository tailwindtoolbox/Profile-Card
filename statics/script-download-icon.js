// script-download-icon.js
//

(function() {
	var removeSuccess;
	
	removeSuccess = function() {
		return $('.button').removeClass('success');
	};
	
	// After 5 seconds, back return to normal
	$(document).ready(function() {
		return $('.button').click(function() {
    		$(this).addClass('success');
    		return setTimeout(removeSuccess, 5000);
		});
	});

}).call(this);
