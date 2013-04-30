$(document).ready(function() {
	$('.nav').scrollToFixed();
});

$(function() {
	var pull = $('#pull'),
		menu = $('nav ul'),
		item = $('nav ul li a'),
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(item).on('click', function(e){
		var w = $(window).width();
		if (w < 600){
			e.preventDefault();
			menu.slideToggle();	
		}
	});

	$(window).resize(function(){
    		var w = $(window).width();
    		if(w > 320 && menu.is(':hidden')) {
    			menu.removeAttr('style');
    		}
		});
});

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 40
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


$(document).ready(function() {
	// Cache selectors
	var lastId,
	    topMenu = $("#top-menu"),
	    topMenuHeight = topMenu.outerHeight()+35,
	    // All list items
	    menuItems = topMenu.find("a"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) { return item; }
	    });

	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	   }                   
	});
});