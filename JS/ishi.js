$('#instructions').modal('show');


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
			out = $('input[name="options"]:checked').val()
			for(var j=0;j<ele.length;j++)
      			ele[j].checked = false;
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
		}
		if(i!=39){
			let link = "Images/Ishihara/" + i + ".jpg"
			image.setAttribute("src", link);
		}		
	}
	if( i ==39 ){
		document.querySelector('.card').style.display = "none";
		alert("You're blind :)")
	}
});