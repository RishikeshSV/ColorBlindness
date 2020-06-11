const question = document.querySelector('#question')
const nextimg = document.querySelector('#nextimg')
const res = []
const ans = ["yellow","red","red","green","green","yellow","yellow","yellow","green","red","red","yellow","red","red","yellow","green","green","green"]

//only for the first time
document.querySelector("#play").addEventListener("click",function(){
	document.querySelector(".instructions").style.display = "none"
	document.querySelector('html').style.background= "white";
	setTimeout(function(){
		document.querySelector('html').style.background= "black";
		document.querySelector('.container').style.display= "block";
		hideimg();
	}, 3000);
})

//every time next is clicked
question.addEventListener('submit', function(e){
	e.preventDefault();
	hideimg();
	let attribute = nextimg.getAttribute('src');
	ans1 = ($('input[name="top"]:checked', '#question').val())
	ans2 = ($('input[name="bottom"]:checked', '#question').val())
	i = attribute.replace ( /[^\d.]/g, '' );
	if(ans1 == null){
		ans1=""
	}
	if(ans2 == null){
		ans2=""
	}
	i = i*1;
	if(i<=9){
		res.push(ans1)
		res.push(ans2)
		i++;
		if(i<=9){
			let link = "Images/Falant/" + i + ".jpg"
			nextimg.setAttribute("src", link);
			question.reset();
			showimg();
		}else{
			document.querySelector(".container").style.display="none"
			document.querySelector(".results").style.display="block"
			var points = 0;
			var red = 0;
			var green = 0;
			var yellow = 0;
			for (var i = 0; i < 18; i++) {
				if(res[i] == ans[i]){
					points += 1;
					if(res[i]=="red"){
						red++;
					}else if(res[i]=="green"){
						green++;
					}else{
						yellow++;
					}
				}
			}
			document.querySelector(".r").innerHTML= ((red/6)*100).toFixed(2);
			document.querySelector(".y").innerHTML= ((yellow/6)*100).toFixed(2);
			document.querySelector(".g").innerHTML= ((green/6)*100).toFixed(2);
			if(points>14.4){
				document.querySelector(".conclusion").innerHTML= "You have passed the test.";
			}else{
				document.querySelector(".conclusion").innerHTML= "You haven't passed this test.";
			}
			document.querySelector(".t").innerHTML= ((points/18)*100).toFixed(2);
		}	
	}	
});


function hideimg(){
	setTimeout(function(){
		document.querySelector("#nextimg").style.display = "none"
		document.querySelector("form").style.marginTop = "30%"
		document.querySelector("form").style.display = "block"
	}, 2000)
}
function showimg(){
	document.querySelector("#nextimg").style.display = "block"
	document.querySelector("#nextimg").style.margin = "auto"
	document.querySelector("form").style.marginTop = ""
	document.querySelector("form").style.display = "none"
}

