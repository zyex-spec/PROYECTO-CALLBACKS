//declarando la funcion principal
//un parametro de la funcion principal es el callback
function principal(numeros, callback)
{
    setTimeout(function(){
        let suma = 0 
        numeros.forEach(numero=>suma = suma + numero)
        callback(suma)
    },5000)
}

let arreglo=[1,2,3,4,5]
principal(arreglo,function(suma){ //declarando el callback
    let operacion = suma*100
    console.log(`La sumatoria final es ${operacion}`)
})