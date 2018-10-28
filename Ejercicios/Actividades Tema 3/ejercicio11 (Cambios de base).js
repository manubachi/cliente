var opcion;
function menu(){
  console.log("---CALCULADORA PROGRAMADOR---\n"+
              "1. Decimal a cualquier base\n"+
              "2. Cualquier base a Decimal\n"+
              "3. Salir\n");
   opcion=parseInt(prompt("Seleccione una opción de las que aparecen en consola"));
}

while(opcion != 3){
  menu();
  switch (opcion) {
    case 1:
      var numero =(prompt("Introduce un número: "));
      var expresion_regular_numero = /^\d+$/;
      if (expresion_regular_numero.test(numero) == false) {
        alert("El número introducido no está en base 10");
        menu();
      }else {
        numero = parseInt(numero);
        var base=prompt("Indique a que base quiere convertir el número(16,8 o 2) ");
        switch(base){
          case "2":
            var res = numero.toString(2);
            alert("El número "+numero+ "(base decimal) convertido a binario --> " +res);
          break;

          case "8":
            var res = numero.toString(8);
            alert("El número "+numero+ "(base decimal) convertido a octal --> " +res);
            break;
          case "16":
            var res = numero.toString(16);
            alert("El número "+numero+ "(base decimal) convertido a hexadecimal --> " +res);
            break;
          default:
            alert("Base incorrecta debe ser(16,8 o 2)");
            menu();
            break;
        }
      }
      break;
    case 2:
      var numero =prompt("Introduce un número: ");
      var base=prompt("Indique en que base se encuentra el número(16,8 o 2) ");
      switch(base){
        case "2":
        var expresion_regular_numero = /^[0-1]+$/;
        if (expresion_regular_numero.test(numero) == false) {
          alert("El número introducido no está en base 2");
          menu();
        }else {
          var res = parseInt(numero,2);
          alert("El número "+numero+ "(base binario) convertido a decimal --> " +res);
        }
        break;

        case "8":
        var expresion_regular_numero = /^[0-7]+$/;
        if (expresion_regular_numero.test(numero) == false) {
          alert("El número introducido no está en base 8");
          menu();
        }else {
          var res = parseInt(numero,8);
          alert("El número "+numero+ "(base octal) convertido a decimal --> " +res);
        } 
        break;
        case "16":
        var expresion_regular_numero = /^[0-9A-F]+$/;
        if (expresion_regular_numero.test(numero) == false) {
          alert("El número introducido no está en base 16");
          menu();
        }else {
          var res = parseInt(numero,16);
          alert("El número "+numero+ "(base hexadecimal) convertido a decimal --> " +res);
        }
        break;
        default:
          alert("Base incorrecta debe ser(16,8 o 2)");
          menu();
          break;
      }
      break;

    case 3:
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
