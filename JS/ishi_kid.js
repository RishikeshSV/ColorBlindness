$('#instructions').modal('show');

const res = [];
var marks = 0;
const ques = document.querySelector('#ishi_kid')
const nextimg = document.querySelector('#ques_img')


ques.addEventListener('submit', function(e){
	e.preventDefault();
	let attribute = nextimg.getAttribute('src');
	ans = ($('input[name="ishi_kid_options"]:checked', '#ishi_kid').val())
	i = attribute.replace ( /[^\d.]/g, '' );
	i = i*1;
	if(i<=10){
		if(i == ans){
			res[i-1] = (ans)*1;
		}else if(ans == null){
			res[i-1] = 0;
		}else{
			res[i-1] = (ans)*1;
		}	
		i++;
		if(i<=10){
			let link = "Images/Ishihara Kids/questions/" + i + ".jpg"
			nextimg.setAttribute("src", link);
			ques.reset();
		}else{
			document.querySelector(".card").style.display="none"
			console.log(res)
			for (var i = 0; i < 10; i++) {
				if(res[i] != 0){
					let resimg = "Images/Ishihara Kids/answers/" + res[i]  + ".jpg"
					temp = document.querySelector("._"+(i+1))
					temp.setAttribute("src",resimg);
					if(res[i] == i+1){
						marks += 10;
					}
				}else{
					document.getElementsByClassName("ifnotanswered")[i].style.display="block"
				}
			}
			document.querySelector(".percent").innerHTML= marks;
			if(marks<90){
				document.querySelector(".lead").innerHTML= "You may have colour deficiency";
			}else{
				document.querySelector(".lead").innerHTML= "Normal color vision :) ";
			}
			document.querySelector(".results").style.display="block"
		}
	}

})