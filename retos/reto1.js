function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert('isoceles');
        const altura = Math.sqrt(lado1**2 - base**2/ 4);
        console.log(altura);
    }
    else{
        alert('Lo siento, el triángulo no es isosceles');
    }
}
alturaTriangulo(13, 13, 10);