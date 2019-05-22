//Crear arreglos con elementos
//Tres formas equivalentes

var arreglo = new Array('elemento1', 'elemento2');
console.log(arreglo);

var arreglo_2 = Array('elemento A', 'elemento B');
console.log(arreglo_2);

var arreglo_3 = ['elemento X', 'elemento Y'];
console.log(arreglo_3);

//Crear arreglos sin elementos
var arreglo_4 = new Array(arrayLength=0);
console.log(arreglo_4)
var arreglo_5 = Array(arrayLength=0);

//resultados similares
var arreglo_4_1=[];
arreglo_4_1.length=arrayLength;

var miArreglo=[];
miArreglo= [
    1,
    "Carlos",
    "carlos.aguirre@epn.edu.ec",
    new Date(),
    [1, "Hola", 120.6]
    ];
console.log(miArreglo);

miArreglo.push(4);

console.log(miArreglo);

miArreglo.pop();

console.log(miArreglo);

var numeros=[1,2,3,4];
console.log(numeros);

numeros.splice(4,1);
console.log(numeros);

var indice=numeros.indexOf(2);
console.log(indice);

var indiceConCuatro=numeros.indexOf(1.4);
console.log(indiceConCuatro);

var mascotas=["perro", "gato", "loro"];
console.log(mascotas);
for(var i=0; i<mascotas.length;i++){
    console.log(mascotas[i]);
}

mascotas.forEach(function (element) {
    console.log(element)
})

var lista=mascotas.join("-");
console.log(lista);

var vocales=["a", "e", "i", "o", "u"];
vocales=vocales.concat("1","2","3","4");
console.log(vocales);

var inicio=vocales.shift();
console.log(inicio);

console.log(vocales);

var removerInicio=vocales.unshift();
console.log(removerInicio);

var reverseVocales=vocales.reverse();
console.log(reverseVocales);

var mascotasOrdenado=mascotas.sort();
console.log(mascotasOrdenado);

var mascotasMap=mascotas.map(function (item){
    return item.toUpperCase();
})

console.log(mascotasMap);

var arreglo_10=["e",3,"Daniel",5];
var arreglo_11=arreglo_10.filter(function (item) {
    return typeof item=="number";
})
console.log(arreglo_10);
console.log(arreglo_11);

var arreglo_12=[1,2,3];
var arreglo_13=[1,'2',3];

function esNunmero(value){
    return typeof value=='number';
}

console.log(arreglo_12.every(esNunmero));
console.log(arreglo_13.every(esNunmero));

console.log(arreglo_12.some(esNunmero));
console.log(arreglo_13.some(esNunmero));

var arreglo_14=['1','2','3'];
console.log(arreglo_14.some(esNunmero));

var datos={
    nombre:'',
    cedula:1725828402,
    edad:33
}

var cuenta={
    numero:212323,
    valor:234,
    tipo:"ahorros"
}

var datosCuenta={
    ...datos,
    ...cuenta
}

console.log(datosCuenta);

var atributosDatosCuenta=Object.keys(datosCuenta);

console.log(atributosDatosCuenta);
console.log(atributosDatosCuenta[0]);