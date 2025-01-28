/* For...of: Usa un bucle forof para recorrer todos los destinos del array.
Imprime en un console.log cada uno de sus valores. */

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

function forOf(lista) {
    for (let pais of lista) {
        console.log(pais);
    }
}

forOf(placesToTravel);
