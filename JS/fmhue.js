const row_one = ['one','five','nine','twelve','four','nineteen','thirteen','eighteen','twenty','seven','six','ten','eight','three',
'twetny_one','fifteen','two','seventeen','fourteen','eleven','sixteen','twenty_two']; //real answer of row 1 (in terms of their id - just like row1 that user inputs)
const row_two = ['one','twenty_one','seventeen','eleven','nineteen','eight','seven','nine','five','ten','twelve','two','three',
'eighteen','thirteen','twenty','sixteen','four','fourteen','six','fifteen','twenty_two']; //real answer of row 2  (in terms of their id - just like row2 that user inputs)
const row_three = ['one','three','twelve','eight','sixteen','seven','twenty','eighteen','five','eleven','nineteen','nine','fifteen',
'ten','fourteen','two','six','four','thirteen','seventeen','twenty_one','twenty_two']; //real answer of row 3 (in terms of their id - just like row3 that user inputs)
const row_four = ['one','twenty','seven','eight','fifteen','eighteen','sixteen','twenty_one','thirteen','nineteen','four','three',
'five','seventeen','six','twelve','eleven','nine','ten','fourteen','two','twenty_two']; //real answer of row 4 (in terms of their id - just like row4 that user inputs)
var scorer1 = 0;
var scorer2 = 0;
var scorer3 = 0;
var scorer4 = 0;

$('#instructions').modal('show');
var items = document.querySelectorAll('.li1');
driver(items);

document.querySelector(".firstbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".first").style.display="none";
  document.querySelector(".second").style.display="block";
  var items = document.querySelectorAll('.li2');
  driver(items);

  //user answer for row 1 displayed on console
  var row1 = []; 
  var eles = document.querySelectorAll('.li1>p'); 
  for(var i=0;i<22;i++){
    row1.push(eles[i].id);

    if(row1[i]==row_one[i]){
      scorer1+=1;
    }

  }
  // console.log('ROW 1:\n'+row1);
  console.log('Score r1: '+scorer1);

})



document.querySelector(".secondbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".second").style.display="none";
  document.querySelector(".third").style.display="block";
  var items = document.querySelectorAll('.li3');
  driver(items);
  //user answer for row 2 displayed on console
  var row2 = []; 
  var eles = document.querySelectorAll('.li2>p'); 
  for(var i=0;i<22;i++){
    row2.push(eles[i].id);

    if(row2[i]==row_two[i]){
      scorer2+=1;
    }
  }
  console.log('Score r2: '+scorer2);
})



document.querySelector(".thirdbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".third").style.display="none";
  document.querySelector(".fourth").style.display="block";
  var items = document.querySelectorAll('.li4');
  driver(items);
  //user answer for row 3 displayed on console
  var row3 = []; 
  var eles = document.querySelectorAll('.li3>p'); 
  for(var i=0;i<22;i++){
    row3.push(eles[i].id);
    
    if(row3[i]==row_three[i]){
      scorer3+=1;
    }
  }
  console.log('Score r3: '+scorer3);
})



document.querySelector(".fourthbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".fourth").style.display="none";
  document.querySelector(".alert-dismissible").style.display="none";
  document.querySelector(".results").style.display="block";
  //user answer for row 4 displayed on console
  var row4 = []; 
  var eles = document.querySelectorAll('.li4>p'); 
  for(var i=0;i<22;i++){
    row4.push(eles[i].id);
    
    if(row4[i]==row_four[i]){
      scorer4+=1;
    }
  }
  console.log('Score r4: '+scorer4);

  //compare row_1 with row1 for points
  var scorerg = scorer1+scorer4;
  var scoreby = scorer2+scorer3;
  console.log('rg : '+scorerg);
  console.log('by: '+scoreby);
  localStorage.set("rg",scorerg);
  localStorage.set("by",scoreby);

  if(scorerg<=12){
    document.getElementById('scorerg').innerText = 'Severe'
  }
  else if(scorerg<=35){
    document.getElementById('scorerg').innerText = 'Mild'
  }
  else{
    document.getElementById('scorerg').innerText = 'Normal'
  }

  
  if(scoreby<=12){
    document.getElementById('scoreby').innerText = 'Severe'
  }
  else if(scoreby<=35){
    document.getElementById('scoreby').innerText = 'Mild'
  }
  else{
    document.getElementById('scoreby').innerText = 'Normal'
  }


})




//functions
function driver(temp){
  var dragEle = null;
  for(var i=1;i<21;i++){
      item = temp[i];
      item.setAttribute('draggable','true');
      item.addEventListener('dragstart',itemDragStart,false);
      item.addEventListener('dragenter',itemDragEnter,false);
      item.addEventListener('dragover',itemDragOver,false);
      item.addEventListener('dragleave',itemDragLeave,false);
      item.addEventListener('drop',itemDrop,false);
      item.addEventListener('dragend',itemDragEnd,false);
  }
}
function itemDragStart(e){
  dragEle = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html',this.innerHTML);
}
function itemDragEnter(e){
 e.target.className = 'over';
}
function itemDragOver(e){
  if(e.preventDefault){
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}
function itemDragLeave(e){
  e.target.className = '';
}
function itemDrop(e){
    e.target.className = '';
  if(e.stopPropagation){
    e.stopPropagation();
  }
  if(dragEle != this){
    dragEle.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }
  
  return false;
}
function itemDragEnd(e){
  return false;
}