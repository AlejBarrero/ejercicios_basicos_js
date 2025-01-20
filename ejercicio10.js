/* Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
Puedes usar este array para probarla: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let suma = 0;

    for (let i = 0; i < numberList.length; i++) {
        suma += numberList[i];
    }
    suma = suma / numberList.length;
    return suma;
}

console.log(average(numbers));
