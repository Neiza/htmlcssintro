
var estado = document.getElementById("estado");
var boton = document.getElementById("imprimir")
var record = document.getElementById("record");


/*  estado.addEventListener("change", function(){
  boton.disabled=true;
});   */


boton.addEventListener("click", function(){
  record.innerHTML = estado.value + "<br>" + String.fromCharCode(65,66,97,98) + "<br>" + estado.value.which;
  estado.value = "";
});
