/*8) Revisar si todos los personajes han usado vehicles.
9) Revisar si todos los personajes han usado starships.
*/

var peopleJson = require('./people.json')

//8
function revisarVehiculos(){
    var resultado = true
    var valor = [...new Set(peopleJson.map(x=>{
        if(x.vehicules == null){
            resultado = false
            return
        }
    }))]
    console.log(resultado)
}

//9
function revisarStarships(){
    var resultado = true
    var valor = [...new Set(peopleJson.map(x=>{
        if(x.starships == ''){
            resultado = false
            return
        }
    }))]
    console.log(resultado)
}


function numberFilms(){
    var films = [];
    peopleJson.forEach(function (element){
        var numberOfFilms = element.films.length;
        var name = element.name
        films.push({name, numberOfFilms})
    });
    console.log(films)

}

revisarVehiculos()

revisarStarships()

numberFilms()