var valores = [false, 3, "php", true, "javascript", 1];
var cadenaMayor="";
var suma;
var resta;
var pos1;
var pos2;

for(i=0;valores.length;i++){
  if(typeof valores[i] == "string"){
    if(valores[i] > cadenaMayor){
      cadenaMayor = valores[i];
    }
  }
  else if (typeof valores[i] == "number") {
    suma += valores[i];
    resta -= valores[i]
  }
}

alert("La cadena mayor es : " + cadenaMayor);
alert("La resta de ")
