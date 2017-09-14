$(document).ready(function(){
	$("#right h2").addClass("blue_font");
	$("#right h4").addClass("white_font");

	$("#left h2").addClass("green_font");
	$("#left h4").addClass("purple_font");

	$(".add h2").addClass("orange_font");
	$(".add h4").addClass("green_font");

	$("#hundred").mouseenter(function(){
		$(this).css({
			"background-image": "url(http://rs297.pbsrc.com/albums/mm239/yellowbirdsmom/64-FallingConfetti.gif?w=280&h=210&fit=crop)",
			"background-repeat": "repeat"
		})		
	});
	$("#hundred").mouseleave(function(){
		$(this).css({
			"background-image": "initial",
			"background-repeat": "initial"
		})		
	});
});
