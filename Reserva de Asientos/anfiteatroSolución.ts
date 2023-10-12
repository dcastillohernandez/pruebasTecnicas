//Solución con TypeScript.


//Declaramos la constante del array bidimensional
const asientos: string[][] = [];

//En las condiciones tenemos que no podemos usar métodos ya propios del los lenguajes para resolver la prueba
// En TypesScript tenemos para este escenario los metodos .fill() y .map()
for (let f = 0; f < 10; f++) {
    asientos[f] = []
    for (let c = 0; c < 10; c++) {
        asientos[f][c] = 'L';
    };
};

console.log("Sistema de reserva de asientos");



