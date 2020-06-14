// var x = document.getElementsByClassName("congrats")[0].style.display;

		setTimeout(function(){
			document.querySelector('#calres').style.display = "none";
			$("body").attr('style', 'background-image: none !important;');
			document.querySelector('.congrats').style.display = "block";			
			// if(marks>33){
			// 	window.location.href = "congrats.html";
			// }else if(marks>24){
			// 	document.querySelector("#congratscontent").innerHTML = "You are slightly red-green color blind"
			// 	document.querySelector('.congrats').style.display = "block";
			// }else if(marks>18){
			// 	document.querySelector("#congratscontent").innerHTML = " You are moderately red-green color blind "
			// 	document.querySelector('.congrats').style.display = "block";
			// }else{
			// 	document.querySelector("#congratscontent").innerHTML = " You have severe red-green color blindness! "
			// 	document.querySelector('.congrats').style.display = "block";
			// }

		}, 2000);

$(function() {
	setTimeout(function(){
		var numberOfStars = 200;
	
		for (var i = 0; i < numberOfStars; i++) {
		  $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
		}	

		animateText();
		
		animateBlobs();
	}, 2000)
});

$('.congrats').click(function() {
	reset();
	
	animateText();
	
	animateBlobs();
});

function reset() {
	$.each($('.blob'), function(i) {
		TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
	});
	
	TweenMax.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
}

function animateText() {
		TweenMax.from($('h1'), 0.8, {
		scale: 0.4,
		opacity: 0,
		rotation: 15,
		ease: Back.easeOut.config(4),
	});
}
	
function animateBlobs() {
	
	var xSeed = _.random(350, 380);
	var ySeed = _.random(120, 170);
	
	$.each($('.blob'), function(i) {
		var $blob = $(this);
		var speed = _.random(1, 5);
		var rotation = _.random(5, 100);
		var scale = _.random(0.8, 1.5);
		var x = _.random(-xSeed, xSeed);
		var y = _.random(-ySeed, ySeed);

		TweenMax.to($blob, speed, {
			x: x,
			y: y,
			ease: Power1.easeOut,
			opacity: 0,
			rotation: rotation,
			scale: scale,
			onStartParams: [$blob],
			onStart: function($element) {
				$element.css('display', 'block');
			},
			onCompleteParams: [$blob],
			onComplete: function($element) {
				$element.css('display', 'none');
			}
		});
	});
}