/*6) Cree un arreglo del abecedario, revisar si existe al menos un personaje
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
*/


//6
var peopleJson = require('./people.json')


function abecedario(){
    var aphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = [];
    aphabet.forEach(element => {
        var letter = element.toUpperCase();
        var state = peopleJson.filter((x)=>x.name.startsWith(letter)).length != 0;
        result.push({letter, state});
    });
    console.log(result);

}

abecedario()