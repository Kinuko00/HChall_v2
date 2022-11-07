/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
  array = array.sort()
  maxCount = 0;
  maxNum = 0;
  count = 0;
  checkNum = 0;
  for(let i=0; i < array.length; i++){
    if(checkNum != array[i]){
      checkNum = array[i];
      if(maxCount < count) {
        maxCount = count;
        maxNum = array[i];
      }
      count = 1;
    } else {
      count++;
      if(maxCount < count) {
        maxCount = count;
        maxNum = array[i];
      }
    }
  }
  return maxNum;
}

// No modifiques nada debajo de esta linea //

module.exports = masFrecuente