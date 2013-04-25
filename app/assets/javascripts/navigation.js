$(document).ready(function() {

	//Calculate the height of <header>
	//Use outerHeight() instead of height() if have padding
	// var aboveHeight = $('#header').outerHeight();
	var theWindow = $(window);
	var aboveHeight = theWindow.height();
	//when scroll
	$(window).scroll(function(){
	//if scrolled down more than the header’s height
		if ($(window).scrollTop() > aboveHeight){
		// if yes, add “fixed” class to the <nav>
		// add padding top to the #content (value is same as the height of the nav)
			$('nav').addClass('fixed')
			.addClass('full')
			.css('top','0')
			.css('left', '0')
			.next()
			.css('padding-top','60px');

		} else {
		// when scroll up or less than aboveHeight, remove the “fixed” class, and the padding-top
			$('nav').removeClass('fixed').next()
				.css('padding-top','0');
		}
	});

	
});


$(function() {  
  var pull        = $('#pull');  
    menu        = $('nav ul');  
    menuHeight  = menu.height();  
  
  $(pull).on('click', function(e) {  
    e.preventDefault();  
    menu.slideToggle();  
  });  
}); 

$(window).resize(function(){  
  var w = $(window).width();  
  if(w > 320 && menu.is(':hidden')) {  
    menu.removeAttr('style');  
  }  
});