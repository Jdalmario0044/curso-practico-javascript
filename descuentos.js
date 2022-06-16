function calcularDescuento(precioOriginal,descuento) {
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento= (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function BTNCalcularPrecio() {
    const inputPrice= document.getElementById("InputPrice");
    const priceValue= inputPrice.value;
    const inputDiscount= document.getElementById("InputDiscount");
    const discountValue= inputDiscount.value;

    // const precioFinal= calcularDescuento(priceValue,discountValue);

    const parrafoPrecio=  document.getElementById("ResultPrice");
    parrafoPrecio.innerText= "El precio con descuento es de: $" + calcularDescuento(priceValue,discountValue);
}