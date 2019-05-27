
var peopleJson = require('./people.json')

/*
7) Calcular la sumatoria de la propiedad "mass" y la propiedad "height".

    EJ:

const respuesta = {
    massTotal:1000,
    heightTotal: 2000
}*/

function sumatoria(){
    var sumMass = 0.0
    var sumHeight = 0.0
    var valor = [...new Set(peopleJson.map(x=>{
        if(x.mass != 'unknown'){
            sumMass = sumMass + parseFloat(x.mass)
        }
        if(x.height != 'unknown') {
            sumHeight = sumHeight + parseFloat(x.height)
        }
    }))]
    console.log(sumMass)
    console.log(sumHeight)
}

sumatoria()