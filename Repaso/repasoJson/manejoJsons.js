/*
------------------TALLER---------
Realice los siguientes ejercicios
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
]

 */


var peopleJson = require('./people.json')


//1) Busque los tipos de "gender" en el arreglo people.json
function searchGender(){
    genders = [...new Set(peopleJson.map(x=>x.gender))]
    console.log(genders)
    return genders
}



//2
function searchEyeColor(){
    eye_colors = [...new Set(peopleJson.map(x=>x.eye_color))]
    console.log(eye_colors)
    return eye_colors
}

//3
function searchSkinColor(){
    skin_colors = [...new Set(peopleJson.map(x=>x.skin_color))]
    console.log(skin_colors)
    return skin_colors
}

//4
function searchHairColor(){
    hair_colors = [...new Set(peopleJson.map(x=>x.hair_color))]
    console.log(hair_colors)
    return hair_colors
}

//5
function arrayGenders(genders){
    arrayMale = []
    arrayNA = []
    arrayFemale = []
    arrayHermaphrodite = []
    arrayNone = []

    for(i=0; i<genders.length; i++){
        valores = (([... new Set(peopleJson.map(x=>{
            if(x.gender == genders[i]){
                if(x.gender == 'male'){
                    arrayMale.push(x)
                }else if(x.gender == 'n/a'){
                    arrayNA.push(x)
                }else if(x.gender == 'female'){
                    arrayFemale.push(x)
                }else if(x.gender == 'hermaphrodite'){
                    arrayHermaphrodite.push(x)
                }else if(x.gender == 'none'){
                    arrayNone.push(x)
                }

            }
        }))]))
    }
    console.log('--------MALE------')
    console.log(arrayMale)
    console.log('--------N/A------')
    console.log(arrayNA)
    console.log('--------Female------')
    console.log(arrayFemale)
    console.log('--------Hermaphrodite------')
    console.log(arrayHermaphrodite)
    console.log('--------None------')
    console.log(arrayNone)

}

function arrayEyeColor(eye_colors){
    arrayBlue = []
    arrayYellow = []
    arrayRed = []
    arrayBrown = []
    arrayBlueGray = []
    arrayBlack =[]
    arrayOrange = []
    arrayHazel = []
    arrayPink = []

    for(i=0; i<eye_colors.length; i++){
        valores = (([... new Set(peopleJson.map(x=>{
            if(x.eye_color == eye_colors[i]){
                if(x.eye_color == 'blue'){
                    arrayBlue.push(x)
                }else if(x.eye_color == 'yellow'){
                    arrayYellow.push(x)
                }else if(x.eye_color == 'red'){
                    arrayRed.push(x)
                }else if(x.eye_color == 'brown'){
                    arrayBrown.push(x)
                }else if(x.eye_color == 'blue-gray'){
                    arrayBlueGray.push(x)
                }else if(x.eye_color == 'black'){
                    arrayBlack.push(x)
                }else if(x.eye_color == 'orange'){
                    arrayOrange.push(x)
                }else if(x.eye_color == 'hazel'){
                    arrayHazel.push(x)
                }else if(x.eye_color == 'pink'){
                    arrayPink.push(x)
                }


            }
        }))]))
    }
    console.log('--------BLUE------')
    console.log(arrayBlue)
    console.log('--------YELOW------')
    console.log(arrayYellow)
    console.log('--------RED------')
    console.log(arrayRed)
    console.log('--------BROWN------')
    console.log(arrayBrown)
    console.log('--------BLUE-GRAY------')
    console.log(arrayBlueGray)
    console.log('--------BLACK------')
    console.log(arrayBlack)
    console.log('--------ORANGE------')
    console.log(arrayOrange)
    console.log('--------HAZEL------')
    console.log(arrayHazel)
    console.log('--------PINK------')
    console.log(arrayPink)

}


function arraySkinColor(skin_colors){
    arraySkinColor = []

    for(i=0; i<skin_colors.length; i++){
        valores = (([... new Set(peopleJson.map(x=>{
            if(x.skin_color == skin_colors[i]){
                arraySkinColor.push(x)

            }
        }))]))
    }
    console.log('--------Skin Colors------')
    console.log(arraySkinColor)

}

function arrayHairColor(hair_colors){
    arrayBlond = []
    arrayNA = []
    arrayNone = []
    arrayBrown = []
    arrayBrownGrey = []
    arrayBlack =[]
    arrayAuburnWhite = []
    arrayAuburnGrey = []
    arrayWhite = []
    arrayGrey = []
    arrayAuburn = []

    for(i=0; i<hair_colors.length; i++){
        valores = (([... new Set(peopleJson.map(x=>{
            if(x.hair_color == hair_colors[i]){
                if(x.hair_color == 'blond'){
                    arrayBlond.push(x)
                }else if(x.hair_color == 'n/a'){
                    arrayNA.push(x)
                }else if(x.hair_color == 'none'){
                    arrayNone.push(x)
                }else if(x.hair_color == 'brown'){
                    arrayBrown.push(x)
                }else if(x.hair_color == 'brown, grey'){
                    arrayBrownGrey.push(x)
                }else if(x.hair_color == 'black'){
                    arrayBlack.push(x)
                }else if(x.hair_color == 'auburn, white'){
                    arrayAuburnWhite.push(x)
                }else if(x.hair_color == 'auburn, grey'){
                    arrayAuburnGrey.push(x)
                }else if(x.hair_color == 'white'){
                    arrayWhite.push(x)
                }else if(x.hair_color == 'grey'){
                    arrayGrey.push(x)
                }else if(x.hair_color == 'auburn'){
                    arrayAuburn.push(x)
                }


            }
        }))]))
    }


    console.log('--------BLOND------')
    console.log(arrayBlond)
    console.log('--------N/A------')
    console.log(arrayNA)
    console.log('--------NONE------')
    console.log(arrayNone)
    console.log('--------BROWN------')
    console.log(arrayBrown)
    console.log('--------BROWN-GREY------')
    console.log(arrayBrownGrey)
    console.log('--------BLACK------')
    console.log(arrayBlack)
    console.log('--------auburn, white------')
    console.log(arrayAuburnWhite)
    console.log('--------auburn, GREY------')
    console.log(arrayAuburnGrey)
    console.log('--------white------')
    console.log(arrayWhite)
    console.log('--------GREY------')
    console.log(arrayGrey)
    console.log('--------AUBURN------')
    console.log(arrayAuburn)

}

//6
function abecedario(){
    var aphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = [];
    aphabet.forEach(element => {
        var letter = element.toUpperCase();
        var state = peopleJson.filter((x)=>x.name.startsWith(letter)).length != 0;
        result.push({letter, state});
    });
    console.log(result);

}

//7
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

//10
function numberFilms(){
    var films = [];
    peopleJson.forEach(function (element){
        var numberOfFilms = element.films.length;
        var name = element.name
        films.push({name, numberOfFilms})
    });
    console.log(films)

}


searchGender()
searchEyeColor()
searchSkinColor()
searchHairColor()
arrayGenders(searchGender())
arrayEyeColor(searchEyeColor())
arraySkinColor(searchSkinColor())
arrayHairColor(searchHairColor())
abecedario()
sumatoria()
revisarVehiculos()
revisarStarships()
numberFilms()
