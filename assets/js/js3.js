
var div1 = document.createElement("div");

document.body.appendChild(div1);

div1.addEventListener("mousemove", function(event){
  console.log(event)
  var x = event.clientX;
  var y = event.clientY;
  div1.textContent = x + " , " + y;
  div1.style.backgroundColor = "rgb(' + x + ', + y + ',100)"

});
