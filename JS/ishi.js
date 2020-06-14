$('#instructions').modal('show');


const realans = [12,8,6,29,57,5,3,15,74,2,6,97,45,5,7,46,73,0,0,0,0,26,42,35,96,2,2,0,0,1,1,1,1,1,1,1,1,1];
var ans = [];
var marks = 0;
const question = document.querySelector('#question');
const image = document.querySelector('#image');
const title = document.querySelector('#title');
const ans1 = document.querySelector('#ans1');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
var ele = document.getElementsByName("options");
question.addEventListener('submit', function(e){
	e.preventDefault();

	let attribute = image.getAttribute('src');
	i = attribute.replace ( /[^\d.]/g, '' );
	i++;
	var out;
	if(i <= 39){
		if(i >= 27){
			out = $('input[name="options"]:checked').val();
			if(out == undefined){
				out = 0;
			}
			for(var j=0;j<ele.length;j++)
      			ele[j].checked = false;
      		ans.push(parseInt(out))
		}else{
			out = ans1.value;
			if(out == ''){
				out = 0;
			}
			ans1.value="";	
			if(i==26){
				one.style.display = "none";
				two.style.display = "block";
			}
			ans.push(parseInt(out))
		}
		if(i!=39){
			let link = "Images/Ishihara/" + i + ".jpg"
			image.setAttribute("src", link);
		}		
	}
	if( i ==39 ){
		document.querySelector('.card').style.display = "none";
		for(var a = 0;a<38;++a){
			if(ans[a] == realans[a]){
				marks += 1;
			}else{
				if((a == 1 && ans[a] == 3) || (a == 2 && ans[a] == 5) ||(a == 3 && ans[a] == 70) ||(a == 4 && ans[a] == 35) ||(a == 5 && ans[a] == 2) ||
				   (a == 6 && ans[a] == 5) ||	(a == 7 && ans[a] == 17) ||(a == 8 && ans[a] == 21) ||(a == 17 && ans[a] == 5) ||(a == 18 && ans[a] == 2) ||
				   (a == 19 && ans[a] == 45) || (a == 20 && ans[a] == 73) ||(a == 21 && (ans[a] == 2 || ans[a] == 6) )||(a == 22 && (ans[a] == 4 || ans[a] == 2)) ||(a == 23 && (ans[a] == 3 || ans[a] == 5)) ||
				   (a == 24 && (ans[a] == 9 || ans[a] == 6)) || (a == 25 && ans[a] == 1) ||(a == 26 && ans[a] == 1) ||(a == 27 && ans[a] == 1) ||(28 == 1 && ans[a] == 1)){
					marks += 0.5;
				}
			}
		}
		console.log(marks);
		document.querySelector('.jumbotron').style.display="block"
		document.querySelector('.marks').innerHTML=marks;
		localStorage.setItem("Ishi", marks);
		if(marks>30){
			document.querySelector('.conclusion').innerHTML = "Normal color vision"
		}else{
			document.querySelector('.conclusion').innerHTML = "You failed the test, please continue playing to get a complete analysis."
		}
	}
});