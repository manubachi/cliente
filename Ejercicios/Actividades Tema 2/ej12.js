var opcion;
function menu(){
  console.log("---CALCULADORA---\n"+
              "1. Sumar\n"+
              "2. Restar\n"+
              "3. Multiplicar\n"+
              "4. Dividir\n"+
              "5. Modulo\n"+
              "6. Salir\n");
   opcion=parseInt(prompt("Seleccione una opción de las que aparecen en consola"));
   seleccion();
}

function seleccion(){



  window.onload = menu();
  switch (opcion) {
    case 1:
        var num1=Number(prompt("Introduce un numero: "));
        var num2=Number(prompt("Introduce un numero: "));
        var res = num1 + num2;
        alert("La suma de " +num1+ " + " +num2+ " es " +res);
        menu();
      break;
    case 2:
        var num1=Number(prompt("Introduce un numero: "));
        var num2=Number(prompt("Introduce un numero: "));
        var res = num1 - num2;
        alert("La resta de " +num1+ " - " +num2+ " es " +res);
        menu();
      break;
    case 3:
        var num1=Number(prompt("Introduce un numero: "));
        var num2=Number(prompt("Introduce un numero: "));
        var res = num1 * num2;
        alert("La multiplicación de " +num1+ " * " +num2+ " es " +res);
        menu();
      break;
    case 4:
        var num1=Number(prompt("Introduce un numero: "));
        var num2=Number(prompt("Introduce un numero: "));
        var res = num1 / num2;
        alert("La división de " +num1+ " / " +num2+ " es " +res);
        menu();
      break;
    case 5:
        var num1=Number(prompt("Introduce un numero: "));
        var num2=Number(prompt("Introduce un numero: "));
        var res = num1 % num2;
        alert("El módulo de " +num1+ " % " +num2+ " es " +res);
        menu();
      break;

    case 6:
        var texto;
        var x = confirm("¿Desea salir?");
        if(x == true){
          texto = "Adios!!";
          alert(texto);
          console.log(texto);
        }else{
          menu();
        }
      break;
    default:
      alert("Opción incorrecta");
      menu();
      break;
  }

}
