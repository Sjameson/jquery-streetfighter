$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();

	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-throwing').hide();

	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide();
		$('.hadouken').show().animate( 
			{'left': '980px'}, 
			500,
			function() { 
				$(this).hide();
				$(this).css('left', '480px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$('body').keydown(function(event) {
		if (event.keyCode == 88) {
		$('.ryu-ready').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		$('.ryu-cool').show();
		}
	});

	$('body') .keyup(function(event) {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	});

	function playHadouken() {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}
}); 


