$(document).ready(function() {
	$('.nav').scrollToFixed();
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


$(document).ready(function(){
	$(".kkcount-down").kkcountdown({
		dayText		: '天',
		daysText 	: '天',
    hoursText	: '時',
    minutesText	: '分',
    secondsText	: '秒',
    displayZeroDays : false,
	});
});
