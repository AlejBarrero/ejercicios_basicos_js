// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El número más alto es: " + numberOne)
    }
    else {
        console.log("El número más alto es: " + numberTwo)
    }
}

greaterNumber(10, 20);
