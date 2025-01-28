/* Includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
Usa la función .includes de javascript. */

const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta'];

function encontrarCamiseta(lista) {
    let listaVacia = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].includes("Camiseta")) {
            listaVacia.push(lista[i]);
        }
    }
    return listaVacia;
}

console.log(encontrarCamiseta(products));
