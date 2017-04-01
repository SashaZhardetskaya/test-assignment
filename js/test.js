
$(document).ready(function(){
	//top navigation
	$(window).scroll(function(){
		if (document.body.scrollTop >= 30) {
			// $("#nav-main").css({
   //      		'background': 'red'
   //      	});
        	$("#nav-main").addClass('nav-down').removeClass('nav-top');
		};
		if (document.body.scrollTop <= 30) {
			// $("#nav-main").css({
			// 	'background': 'transparent'
			// });
			$("#nav-main").addClass('nav-top').removeClass('nav-down');
		};
	});
});

/* ANCHORS	*/

$(document).ready(function(){  //anchors
$('.animated-button a').click(function(){
	var project = $('.projects').offset().top;
	$('body').animate({scrollTop:project},880);
});
$('.about-home-button a').click(function(){
	var team = $('.team').offset().top;
	$('body').animate({scrollTop:team},880);
});

});
