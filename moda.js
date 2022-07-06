//RETO: 
//1.pasar el codigo a funciones para que el programa no quede con una lista fija, es decir, nosotros vamos a pasar como parametro una lista a una funcion y esta la va a ordenar y calcular la mediana. 
function calcularModa(lista) {
    const listaCount= {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray= Object.entries(listaCount).sort(
        function (valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1]
        }
    );

    const moda= listaArray[listaArray.length - 1]
    return moda;
}
