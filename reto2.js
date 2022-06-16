const coupons= [
    {
        name: "C1",
        discount: 15
    },
    {
        name: "C2",
        discount: 30
    },
    {
        name: "C3",
        discount: 25
    },
];

function calcularDescuento(precioOriginal,descuento) {
    const porcentajePrecioConDescuento= 100 - descuento;
    const precioConDescuento= (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
};

function BTNCalcularPrecio() {
    const inputPrice= document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputCoupons= document.getElementById("InputCoupon");
    const couponValue= inputCoupons.value;

    const isUserCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon= coupons.find(isUserCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " No es válido");        
    }else {
        const descuento= userCoupon.discount;

        const precioFinal= calcularDescuento(priceValue,descuento);
    
        const parrafoPrecio=  document.getElementById("ResultPrice");  
        parrafoPrecio.innerText= "El precio con descuento es de: $" + precioFinal;
    }

};