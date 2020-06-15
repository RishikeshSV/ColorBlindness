const name = localStorage.getItem("name")
const age = localStorage.getItem("age")
const gender = localStorage.getItem("gender")
const bio = localStorage.getItem("bio")
const ishi = (age<6)?localStorage.getItem("IshiKids"):localStorage.getItem("Ishi")
const tritan = localStorage.getItem("Tritan")
const fmrg = localStorage.getItem("rg")
const fmby = localStorage.getItem("by")
if(bio=='mom' || bio=='dad'){
	document.querySelector('#mild').innerHTML=("Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, not to mention your parents ("+ bio 
	+") having some kind of CVD, we have come to the following conclusion:-<br> ")
	document.querySelector('#moderate').innerHTML=("Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, not to mention your parents ("+ bio 
	+") having some kind of CVD, we have come to the following conclusion:-<br> ")
	document.querySelector('#severe').innerHTML=("Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, not to mention your parents ("+ bio 
	+") having some kind of CVD, we have come to the following conclusion:-<br> ")
}else{
	document.querySelector('#mild').innerHTML="Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, we have come to the following conclusion:-<br> "
	document.querySelector('#moderate').innerHTML="Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, we have come to the following conclusion:-<br> "
	document.querySelector('#severe').innerHTML="Hey "+ name + ",<br>Considering that you're a "+age+" year old " +gender+" and your medical history, we have come to the following conclusion:-<br> "

}

var rgavg = (parseFloat(ishi) + parseFloat(fmrg))/2;
var byavg = (parseFloat(tritan) + parseFloat(fmby))/2;

setTimeout(function(){
	document.querySelector('#calres').style.display = "none";
	$("body").attr('style', 'background-image: none !important;');
	document.querySelector('.congrats').style.display = "block";
	if(fmrg==null){
		document.querySelector('#congratscontent').innerHTML = "Congratulations! You're not colour blind! ";
		document.querySelector('#congratscontent').style.fontSize = "50px";
	}else{
		document.querySelector('#congratscontent').style.display="none";
		document.querySelector('#results').innerHTML = "<p>ISHIHARA :  " + ishi +"%</p>" + "<p>TRITAN :  " 
		+ tritan +"%</p>" + "<p>FM-100 (RG) :  " + fmrg +"%</p>"+ "<p>FM-100 (BY) :  " + fmby +"%</p>"
		document.querySelector('#results').style.display="block";
		if(rgavg<70 && byavg<70){
			if(rgavg<20 && byavg<20){
				console.log("SEVERE RG-BY")
				document.querySelector('#severe').innerHTML += "Results show that you have severe Deuternaopia (red-green) and Tritanopia (blue-yellow). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#severe').style.display="block";
				document.querySelector('#severe').style.position="static";
				document.querySelector('#severe').style.marginTop="200px";
			}else if(rgavg<20){
				console.log("SEVERE RG MODERATE BY")
				document.querySelector('#severe').innerHTML += "Results show that you have severe Deuternaopia (red-green) and moderate Tritanopia (blue-yellow). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#severe').style.display="block";
				document.querySelector('#severe').style.position="static";
				document.querySelector('#severe').style.marginTop="200px";
			}else if(byavg<20){
				console.log("SEVERE BY MODERATE RG")
				document.querySelector('#severe').innerHTML += "Results show that you have severe Tritanopia (blue-yellow) and moderate Deuternaopia (red-green). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#severe').style.display="block";
				document.querySelector('#severe').style.position="static";
				document.querySelector('#severe').style.marginTop="200px";
			}else{
				console.log("MODERATE RG MODERATE BY")
				document.querySelector('#moderate').innerHTML += "Results show that you have moderate Deuternaopia (red-green) and moderate Tritanopia (blue-yellow). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#moderate').style.display="block";
				document.querySelector('#moderate').style.position="static";
				document.querySelector('#moderate').style.marginTop="200px";
			}
		}else if(rgavg<70){
			if(rgavg<20){
				console.log("SEVERE RED GREEN")
				document.querySelector('#severe').innerHTML += "Results show that you have severe Deuternaopia (red-green). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#severe').style.display="block";
				document.querySelector('#severe').style.position="static";
				document.querySelector('#severe').style.marginTop="200px";
			}else{
				console.log("MODERATE RG")
				document.querySelector('#moderate').innerHTML += "Results show that you have moderate Deuternaopia (red-green). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#moderate').style.display="block";
				document.querySelector('#moderate').style.position="static";
				document.querySelector('#moderate').style.marginTop="200px";
			}
		}else if(byavg<70){
			if(byavg<20){
				console.log("SEVERE BLUE YELLOW")
				document.querySelector('#severe').innerHTML += "Results show that you have severe Tritanopia (blue-yellow). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#severe').style.display="block";
				document.querySelector('#severe').style.position="static";
				document.querySelector('#severe').style.marginTop="200px";
			}else{
				console.log("MODERATE BY")
				document.querySelector('#moderate').innerHTML += "Results show that you have moderate Tritanopia (blue-yellow). It is strongly advised that you consult an Opthalmologist!"
				document.querySelector('#moderate').style.display="block";
				document.querySelector('#moderate').style.position="static";
				document.querySelector('#moderate').style.marginTop="200px";
			}
		}else{
			document.querySelector('#congratscontent').style.display="block";
			document.querySelector('#congratscontent').style.position="static";
			document.querySelector('#congratscontent').style.marginTop="200px";
			document.querySelector('#congratscontent').style.fontSize="30px";
			if (rgavg>byavg) {
				document.querySelector('#congratscontent').innerHTML = "Our results indicate that you may have mild Deuternaopia (red-green). We recommend you to consult an Opthalmologist ";
			}else if(rgavg<byavg){
				document.querySelector('#congratscontent').innerHTML = "Our results indicate that you may have mild Tritanopia (blue-yellow). We recommend you to consult an Opthalmologist ";
			}else{
				document.querySelector('#congratscontent').innerHTML = "Our results indicate that you may have mild Deuternaopia (red-green) and Tritanopia (blue-yellow). We recommend you to consult an Opthalmologist ";
			}
		}
	}			
}, 2000);

$(function() {
	setTimeout(function(){
		var numberOfStars = 100;
	
		for (var i = 0; i < numberOfStars; i++) {
		  $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
		}	

		animateText();
		
		animateBlobs();
	}, 2000)
});

$('#congratscontent').click(function() {
	reset();
	
	animateText();
	
	animateBlobs();
});
$('#mild').click(function() {
	reset();
	animateText();
	
	animateBlobs();
});
$('#moderate').click(function() {
	reset();
	animateText();
	
	animateBlobs();
});
$('#severe').click(function() {
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