//Recibir nombre y salario a travez de un formulario, guardar esos dos valores en un array y programar un boton para que calcule la mediana
const empleados= [];
//Helpers
function esPar(num) {
    return (num % 2 === 0)
}

function calcularMediaAritmetica(lista) {    
    const sumaLista= lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista= sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista) {
    const mitad= parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1= lista[mitad - 1];
        const personaMitad2= lista[mitad];

        const mediana= calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else{
        const personaMitad= lista[mitad];
        return personaMitad;
    }
}

//Acción de botones
function calcularMediana() {
    //Mediana General
    const salariosEmpleados= empleados.map(
        function (persona) {
            return persona.salary;
        }
    );

    const salariosSorted= salariosEmpleados.sort(
        function (salaryA,salaryB) {
            return salaryA - salaryB;
        }
    );

    const medianaGeneral= medianaSalarios(salariosSorted);

    const parrafoResultado=  document.getElementById("resultadoMediana");  
    parrafoResultado.innerText= "La mediana de los salarios ingresados es de: $" + medianaGeneral;
}

function registrarEmpleado() {
    //Informacion de empleados
    const inputNombreEmpleado= document.getElementById("InputNombre");
    const nombreEmpleado= inputNombreEmpleado.value;
    const inputSalarioEmpleado= document.getElementById("InputSalario");
    const salarioEmpleado= parseInt(inputSalarioEmpleado.value);

    empleados.push(
        {
            name: nombreEmpleado,
            salary: salarioEmpleado
        }
    );
}