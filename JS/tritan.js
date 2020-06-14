var x = 1;
var y = 0;
var score = 0;
var coor = [[335,335,470,470],[70,330,220,450],[20,230,170,350],[390,230,540,350],[230,10,350,170],[330,60,500,230],[335,335,470,470],
                [370,70,500,220],[390,230,540,350],[220,370,370,550]];
                
$('#instruction').modal('show');

function showfun(){
    $("#cardd").fadeIn();
    $("#cardd").fadeIn("slow");
    $("#cardd").fadeIn(3000);

}

function myfun(i){
    if(i=='100' ){
        console.log('correct');
        score+=1;
    }
    else if(i!=100 && x!=10){
        console.log('wrong');
        score-=1; 
    }
    

        
    $("#image").fadeOut();
    $("#image").fadeOut("slow");
    $("#image").fadeOut(5000);
    
    $("#image").fadeIn();
    $("#image").fadeIn("slow");
    $("#image").fadeIn(3000);

    x+=1;
    if(x<=10){
        document.getElementById('image').src = 'Images/ctest/tritan'+(x)+'.jpg';
        document.getElementById('correctshape').coords = '\''+coor[x-1][0]+','+coor[x-1][1]+','+coor[x-1][2]+','+coor[x-1][3]+'\'';
    }
    else{
        $("#cardd").fadeOut();
        $("#cardd").fadeOut("slow");
        $("#cardd").fadeOut(5000);

        document.getElementById('score').innerText = score;
        _score = (((score+10)/20)*100).toFixed(2)
        localStorage.setItem("Tritan", _score);

        if(Number(score)<=3){
            document.getElementById('cb').innerText = 'You may have blue-yellow colour deficiency. Please continue playing to get a complete analysis.' ;
        }else{
            document.getElementById('cb').innerText = 'Normal color vision :)'
        }

        $("#card2").fadeIn();
        $("#card2").fadeIn("slow");
        $("#card2").fadeIn(3000);
        document.querySelector('#tritan-button').addEventListener('click',function(e){
            if(localStorage.getItem("Tritan")>=80){
                if(localStorage.getItem("Ishi")>=80 || localStorage.getItem("IshiKids")>=80){
                    window.location.href="congrats.html"
                }
                else{
                    window.location.href="hue100.html"
                }
            }else{
                window.location.href="hue100.html"
            }
        })
    }
    
    


  


   

    
}