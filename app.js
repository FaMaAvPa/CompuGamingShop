//declaración de variables
let nombre
let contraseña
let mail
let edad

//función para crear una cuenta
function registrarte(){
    let i = 0
    let mayor
    //un while que repita para cada opción
    while(i<4){
        i++
        switch (i) {
           case 1:
               nombre = prompt("Indica tu nombre de usuario para registrarte.")
               break;
           case 2:
               contraseña = prompt("Ingresa una contraseña.")
               break;
           case 3:
               mail = prompt("Indica tu mail.")
               break;
           case 4:
               edad = prompt("Ingresa tu edad.")
               break;
        }
        
       }  
       //corrobora si el usuario es mayor de edad con un if
    if (edad >= 18) 
    {
        mayor = true
    }
    else
    {
        mayor = false
    }

       return(mayor)
}

//invoca la función
let esMayor = registrarte()

//le dá un mensaje de bienvenida al usuario en función de si es o no mayor de edad
if (esMayor) { alert("Bienvenido " + nombre + " tenemos las mejores ofertas para ti!")}

else { alert("Bienvenido " + nombre + " a la hora de hacer una compra requeriras permiso de un mayor.") }

let a = prompt("¿Quieres comprar una PC? (si o no)")
if(a = "si")
{
    let b = prompt("¿Cual computadora quieres? \n PC1 $100000 \nPC2 $200000 \nPC3 $250000")
    if(b = "PC1")
    {
        alert("Puedes pagar el producto en 12 cuotas de $12999 o un pago de $100000")
    }
    else if(b = "PC2")
    {
        alert("Puedes pagar el producto en 12 cuotas de $24500 o un pago de $200000")
    }
    else if(b = "PC3")
    {
        alert("Puedes pagar el producto en 12 cuotas de $30999 o un pago de $250000")
    }
}
else{
    alert("Gracias por entrar a nuestra tienda, suerte!!")
}