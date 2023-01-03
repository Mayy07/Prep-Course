// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;
}
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str1 = palabras[0];
  for (var i = 1; i < palabras.length; i++) {
    str1 = str1 + " " + palabras[i];
  }
  return str1;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.indexOf(elemento) == -1) return false;
  return true;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var numerototal = 0;
  for (var i = 0; i < numeros.length; i++) {
    numerototal = numerototal + numeros[i];
  }
  return numerototal;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumanotas = 0;
  for (var i = 0; i < resultadosTest.length; i++) {
    sumanotas = sumanotas + resultadosTest[i];
  }
  return sumanotas / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = -999;
  for (var i = 0; i < numeros.length; i++) {
    if (maximo < numeros[i]) {
      maximo = numeros[i];
    }
  }
  return maximo;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var multiplicar = 1;
  if (arguments.length == 0) {
    return 0;
  }
  for (var i = 0; i < arguments.length; i++) {
    multiplicar = multiplicar * arguments[i];
  }
  return multiplicar;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantotal = 0;
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) cantotal = cantotal + 1;
  }
  return cantotal;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  const vsemana = [];
  for (var i = 1; i <= 7; i++) {
    if (i == 1 || i == 7) {
      vsemana[i] = "Es fin de semana";
    } else {
      vsemana[i] = "Es dia Laboral";
    }
  }
  return vsemana[numeroDeDia];
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const resp = n.toString();
  if (resp[0] == "9") {
    return true;
  }
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var num = arreglo[0];
  for (var i = 1; i < arreglo.length; i++) {
    if (num == arreglo[i]) {
      return true;
    }
  }
  return false;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const vmeses = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i].includes("Enero") ||
      array[i].includes("Marzo") ||
      array[i].includes("Noviembre")
    ) {
      vmeses.push(array[i]);
    }
  }
  if (vmeses.length == 3) {
    return vmeses;
  }
  return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const numerosmay = [];
  var num = 100;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > num) {
      numerosmay.push(array[i]);
    }
  }
  return numerosmay;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  const nuevovalor = [];
  var resultado = numero;
  var suma = 2;
  var i = 0;
  do {
    resultado = resultado + suma;
    nuevovalor.push(resultado);
    if (i == resultado) break;
    i = i + 1;
  } while (i < 10);
  if (i == resultado) {
    return "Se interrumpió la ejecución";
  }
  return nuevovalor;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  const nuevovalor = [];
  var resultado = numero;
  var suma = 2;
  i = 0;
  for (var i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    nuevovalor.push(resultado + suma);
    resultado = resultado + suma;
  }
  return nuevovalor;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
