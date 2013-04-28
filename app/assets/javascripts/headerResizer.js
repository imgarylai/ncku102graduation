/*
	Resize Header
*/

$(document).ready(function(){
	
	var theWindow = $(window);
	
	function resizeHeader(){
		$('#header').height(theWindow.height());
	}

	theWindow.resize(resizeHeader).trigger("resize");
});