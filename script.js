
  // generator function
function getColor(){
return "#" + Math.random().toString(16).slice(2,8);
}

console.log(getColor());

// Set background Color style
function setBackground(){
var bgColor = getColor();
document.body.style.background = bgColor;
};


setBackground()


function setTimer(){
  var myInterval = setInterval(setBackground,5000);
}

setTimer();
// run function on click

document.querySelector('body').addEventListener('keyup',function(e){
  if(e.keyCode === 32){
    setBackground();
  }
})
