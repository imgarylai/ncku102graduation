jQuery(document).ready(function() {
	
    jQuery(".toggle").next(".map_h").hide();
    jQuery(".toggle").click(function() {
        $('.active').not(this).toggleClass('active').next('.map_h').slideToggle(300);
        $(this).toggleClass('active').next().slideToggle("fast");

    });
});