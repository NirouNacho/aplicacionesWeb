/*Realice los siguientes ejercicios
1) Busque los tipos de "gender" en el arreglo people.json
2) Busque los tipos de "eye_color" en el arreglo people.json
3) Busque los tipos de "skin_color" en el arreglo people.json
4) Busque los tipos de "hair_color" en el arreglo people.json
5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.
    EJ: Si hay gender Male y Female, existirian 2 arreglos, llenar esos arreglos con los caracteres que sean Male y Female
6) Cree un arreglo del abecedario, revisar si existe al menos un personaje

con cada letra del abecedario.

    Ejemplo de respuesta:

    const arregloRespuesta =[
        {
            a:true
        },
        {
            b:false
        },
    ];

7) Calcular la sumatoria de la propiedad "mass" y la propiedad "height".

    EJ:

const respuesta = {
    massTotal:1000,
    heightTotal: 2000
}

8) Revisar si todos los personajes han usado vehicles.
9) Revisar si todos los personajes han usado starships.
10) Calcular en cuantos films han aparecido cada personaje:

    Ej:

        const respuesta = [
                ...,
            {
                nombre:"Cliegg Lars",
                numeroPeliculas:5
            },
            ...
]*/

const fs = require('fs');
var people = [];
fs.readFile('people.json', 'utf8', function (err, data) {
    if (err) throw err;
    people = JSON.parse(data);
    // 1.
    genders = [...new Set(people.map(x => x.gender))];
    console.log('Genders:', genders);
    // 2.
    eye_colors = [...new Set(people.map(x => x.eye_color))];
    console.log('Eye colors:', eye_colors);
    // 3.
    skin_colors = [...new Set(people.map(x => x.skin_color))];
    console.log('Skin colors:', skin_colors);
    // 4.
    hair_colors = [...new Set(people.map(x => x.hair_color))];
    console.log('Hair Color:', hair_colors);
    //5.
    genders.forEach(element => {
        var result = people.filter((e)=>e.gender == element)
        console.log(result)
    });
    eye_colors.forEach(element => {
        var result = people.filter((e)=>e.eye_color == element)
        console.log(result)
    });
    skin_colors.forEach(element => {
        var result = people.filter((e)=>e.skin_color == element)
        console.log(result)
    });
    hair_colors.forEach(element => {
        var result = people.filter((e)=>e.hair_color == element)
        console.log(result)
    });
    // 6.
    var aphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = [];
    aphabet.forEach(element => {
        var letter = element.toUpperCase();
        var state = people.filter((x)=>x.name.startsWith(letter)).length != 0;
        result.push({letter, state});
    });
    console.log(result);
    // 7.
    people.map(function (e){
        var mass = parseInt(e.mass, 10);
        var height = parseInt(e.height, 10);
        if(!mass)
            e.mass = 0;
        else
            e.mass = mass;
        if(!height)
            e.height = 0;
        else
            e.height = height;
    });
    var totalMass = 0;
    people.forEach(function (element){
        totalMass += element.mass
    });
    console.log(totalMass);
    var totalHeight = 0;
    people.forEach(function (element){
        totalHeight += element.height
    });
    console.log(totalHeight);
    console.log({totalMass, totalHeight});

    // 8.
    var vehicles = people.every((e)=>e.vehicles.length > 0);
    console.log('vehicles:', vehicles)
    // 9.
    var starships = people.every((e)=>e.starships.length > 0);
    console.log('starships:', starships)

    // 10.
    var films = [];
    people.forEach(function (element){
        var numberOfFilms = element.films.length;
        var name = element.name
        films.push({name, numberOfFilms})
    });
    console.log(films)

});