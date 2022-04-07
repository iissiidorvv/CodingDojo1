function myBirthYearFunc(){
    console.log("Nací en " + 1980);
}
//la respuesta a la pregunta muestra que la funcion nos quiere decir que naci en 1980//

function myBirthYearFunc(EntradaAñoNacimiento){
       console.log("Nací en " + EntradaAñoNacimiento);
}

//la respuesta es el año en que naci en undefined//
myBirthYearFunc(1990)
Naci en 1990

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}
//la respuesta es la suma  num1 y num2 por lo que num1= 10 y num2= 20 por lo que la variable es 30//
