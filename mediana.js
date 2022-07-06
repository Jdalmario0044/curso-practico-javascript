//RETO: 
//1.Ordenar la lista antes de validar si es par o no
//2.pasar el codigo a funciones para que el programa no quede con una lista fija, es decir, nosotros vamos a pasar como parametro una lista a una funcion y esta la va a ordenar y calcular la mediana.
function calcularMediada(lista) {
    lista.sort( (a,b) => {
        return a - b;
    });
    
    function calcularMediaAritmetica(lista) {    
        const sumaLista= lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
    
        const promedioLista= sumaLista / lista.length;
        return promedioLista;
    }

    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        }else {
            return false;
        }
    }

    const mitadLista= parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)) {
        const elemento1= lista[mitadLista];
        const elemento2= lista[mitadLista - 1];
    
        const promedioElemento1y2= calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana= promedioElemento1y2;
        console.log(lista);
        return mediana;
    }else {
        mediana= lista[mitadLista];
        console.log(lista);
        return mediana;
    }
}