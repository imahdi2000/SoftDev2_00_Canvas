var shape = 1; //determines shape
var c = document.getElementById("slate");
var context = c.getContext('2d');
var color = "green";
var r;
//var button = clearC.addEventListener('click', clear);
var saveoldposX;
var saveoldposY;

var clearC = function(){
  //console.log("call");
  context.clearRect(0,0,500,500);
  saveoldposY = null;
  saveoldposX = null;
  //or (0,0,context.width,context.height)
};

var transmute = function(){
  if (shape == 0){
    shape = 1;
  }
  else {
    shape = 0;
  }
};

var draw = function(e){
  if (shape == 0){
    drawCircle(e);
  }
  else {
    drawRect(e);
  }
};

var drawRect = function(e){
  context.beginPath();
  //console.log(e.clientX);
  //console.log(e.clientY);
  context.fillRect(e.offsetX,e.offsetY,20,20);
  context.fill();
  context.stroke();
};

var drawCircle = function(e) {
  context.beginPath();
  context.arc(e.offsetX,e.offsetY,10,0,2 * Math.PI);
  if (saveoldposX != null){
    context.moveTo(saveoldposX, saveoldposY);
  	context.lineTo(e.offsetX, e.offsetY);
  }
  saveoldposX = e.offsetX;
  saveoldposY = e.offsetY;
  context.fill();
  context.stroke();
};


var run = function(){
   //tell js its 2d shape
  r = c.getBoundingClientRect();
  context.strokestyle = color;
  c.addEventListener("click", draw);
};

window.onload = run;
