
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



/* NENU */

var mmenu = 'close';
$(document).ready(function(){
    $('.menu-burger').on('click', showMmenu);
});
function showMmenu(){
	if (mmenu=='close') { 
	$('.nav-links').css({
		'display': 'block'
	});
	mmenu='open';
	$('.nav-pass').fadeOut(800);
	$('.nav-active').fadeIn(800);
	}
	else{ 
	$('.nav-links').css('display','none');
	mmenu = 'close';
	$('.nav-pass').fadeIn(800);
	$('.nav-active').fadeOut(800);
	}
}

// $(document).ready(function(){ //services accardion
// 	$('.service-block a').on('click', function(){
// 		var n =$('.service-block a').index(this);
// 		var currentHasVisible = $('.service-description').eq(n).hasClass('visible');
// 		$('.service-description').addClass('hidden').removeClass('visible');
// 		if (currentHasVisible) {
// 			$('.service-description').eq(n).removeClass('visible');
// 			$('.service-description').eq(n).addClass('hidden');
// 		} else {
// 			$('.service-description').eq(n).removeClass('hidden');
// 			$('.service-description').eq(n).addClass('visible');
// 		}
// 	});
// });



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
