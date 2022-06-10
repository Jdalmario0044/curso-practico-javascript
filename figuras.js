//Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
//Código del triángulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//Código del círculo
const PI= Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro= diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

//Interacción con el archivo de figuras.html

//Variables del cuadrado
const inputCuadrado= document.getElementById("InputCuadrado");
const ladosCuadrado = parseInt(inputCuadrado.value);
//Variables del triángulo
const inputLadoA= document.getElementById("InputTrianguloA");
const ladoA= parseInt(inputLadoA.value);
const inputLadoB= document.getElementById("InputTrianguloB");
const ladoB= parseInt(inputLadoB.value);
const inputBase= document.getElementById("InputTrianguloBase");
const base= parseInt(inputBase.value);
const inputAltura= document.getElementById("InputTrianguloAltura");
const altura= parseInt(inputAltura.value);
//Variables del círculo
const inputRadio= document.getElementById("InputRadioCirculo");
const radio= parseInt(inputRadio.value);
//Funciones para el área y perímetro del cuadrado
function calcularPerimetroCuadrado() {
    const perimetro= perimetroCuadrado(ladosCuadrado);
    alert("El perímetro es de: " + perimetro);
}

function calcularAreaCuadrado() {
    const area= areaCuadrado(ladosCuadrado);
    alert("El área es de: " + area);
}
//Funciones para el área y perímetro del triángulo
function calcularPerimetroTriangulo() {
    const perimetro= perimetroTriangulo(ladoA, ladoB, base);
    alert("El perímetro es de: " + perimetro);
}
function calcularAreaTriangulo() {
    const area= areaTriangulo(base, altura);
    alert("El área es de: " + area);
}
//Funciones para el área y perímetro del círculo
function calcularPerimetroCirculo () {
    const perimetro= perimetroCirculo(radio);
    alert("El perímetro es de: " + perimetro);
}
function calcularAreaCirculo () {
    const area= areaCirculo(radio);
    alert("El área es de: " + area);
}