function saludar(){ //Declarando la funcion 1 
    setTimeout(function(){
        console.log("Hola como estas")
        despedir() //Llamando a la funcion 2
    },3000)
}

function despedir(){//Declarando la funcion 2
console.log("Adios mucha suerte")
}

saludar()//Llamando a la funcion 1