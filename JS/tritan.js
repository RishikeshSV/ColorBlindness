var x = 0;
var y = 0;
var coor = [[335,335,470,470],[70,330,220,450],[20,230,170,350],[390,230,540,350],[230,10,350,170],[330,60,500,230],[335,335,470,470],
                [370,70,500,220],[390,230,540,350],[220,370,370,550]]
function myfun(i){

    if(i=='100'){
        console.log('correct');
        document.getElementById('showd').style.display = 'block';
        x+=1;
        y=x%10;
        document.getElementById('image').src = 'Images/ctest/tritan'+(y+1)+'.jpg';
        document.getElementById('correctshape').coords = '\''+coor[y][0]+','+coor[y][1]+','+coor[y][2]+','+coor[y][3]+'\'';
    }
    else
        console.log('wrong'); 

    
}