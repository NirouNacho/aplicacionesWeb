
var peopleJson = require('./people.json')


/*5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color,
    skin y hair_color.EJ: Si hay gender Male y Female,
    existirian 2 arreglos, llenar esos arreglos con los caracteres
que sean Male y Female*/
function searchGender(){
    genders = [...new Set(peopleJson.map(x=>x.gender))]
    console.log(genders)
    return genders
}


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


arrayGenders(searchGender())