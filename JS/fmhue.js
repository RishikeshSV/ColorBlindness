const row_one = []; //real answer of row 1 (in terms of their id - just like row1 that user inputs)
const row_two = []; //real answer of row 2  (in terms of their id - just like row2 that user inputs)
const row_three = []; //real answer of row 3 (in terms of their id - just like row3 that user inputs)
const row_four = []; //real answer of row 4 (in terms of their id - just like row4 that user inputs)
$('#instructions').modal('show');
document.querySelector(".firstbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".first").style.display="none";
  document.querySelector(".second").style.display="block";

  //user answer for row 1 displayed on console
  var row1 = []; 
  var eles = document.querySelectorAll('li>p'); 
  for(var i=0;i<eles.length;i++){
    row1.push(eles[i].id);
  }
  console.log('ROW 1:\n'+row1);
})
document.querySelector(".secondbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".second").style.display="none";
  document.querySelector(".third").style.display="block";
  //user answer for row 2 displayed on console
  var row2 = []; 
  var eles = document.querySelectorAll('li>p'); 
  for(var i=0;i<eles.length;i++){
    row2.push(eles[i].id);
  }
  console.log('ROW 2:\n'+row2);
})
document.querySelector(".thirdbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".third").style.display="none";
  document.querySelector(".fourth").style.display="block";
  //user answer for row 3 displayed on console
  var row3 = []; 
  var eles = document.querySelectorAll('li>p'); 
  for(var i=0;i<eles.length;i++){
    row3.push(eles[i].id);
  }
  console.log('ROW 3:\n'+row3);
})
document.querySelector(".fourthbutton").addEventListener('click',function(e){
  e.preventDefault();
  document.querySelector(".fourth").style.display="none";
  document.querySelector(".alert-dismissible").style.display="none";
  document.querySelector(".results").style.display="block";
  //user answer for row 4 displayed on console
  var row4 = []; 
  var eles = document.querySelectorAll('li>p'); 
  for(var i=0;i<eles.length;i++){
    row4.push(eles[i].id);
  }
  console.log('ROW 4:\n'+row4);

  //compare row_1 with row1 and dso on based on their id
})


var items = document.querySelectorAll('.li1');
driver();


//functions
function driver(){
  var dragEle = null;
  for(var i=1;i<items.length-1;i++){
      item = items[i];
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