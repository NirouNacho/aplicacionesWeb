function saludo() {//funciones anónimas

}

var nombre=function(){};
console.log(saludo()+nombre())

var mensaje={
    texto: function () {//funcion anonima
        return "Buen día";
    }
};

console.log(mensaje);

var arreglo=[function () {

}];
console.log(arreglo);

//no usar funciones anónimas sin parámetros o sin comparaciones
console.log(typeof mensaje);
console.log(saludo);//definición de la función
console.log(saludo());//ejecución de la función

//var, let, const
/*var i=8;
(function verNumero() {
  for(var i=0;i<6;i++){
    console.log(i);
  }
})();
console.log(i);*/

var i=8;
(function verNumero() {
    for(let i=0;i<6;i++){
        console.log(i);
    }
})();
console.log(i);

const arregloLetras=['A','B','C'];
console.log(arregloLetras);
arregloLetras.push('E');
console.log(arregloLetras);
//arregloLetras{ };
//arregloLetras[];
const datos={
    nombre: 'Daniel',
    ciudad: 'Quito'
};
console.log(datos);
datos.nombre='Luis';
console.log(datos.nombre);
const sueldo=30;
//sueldo=24;
function doble(n) {
    return n*2;
}
console.log(doble(2));


//fat arrow,siempre anonimas, expresion corta
//sintaxis
//(parametros1, ... parametroN)=>{sentencias}
//(parametros1, ... parametroN)=>expresion
var dobleN= n=>n*2;

console.log(dobleN(3));
const elementos=['Ag','Na','Cl'];
var salida=elementos.map(function (elemento){
    return elemento.length;
});
var salida_2 =elementos.map((elemento)=>{return elemento.length});
console.log(salida);
console.log(salida_2);
const sumaNumeros=(num_1,num_2)=>{return num_1+num_2};
function sumar(num_1,num_2) {
    return num_1+num_2;
}

console.log(sumaNumeros(2, 1));

const cuadrado=x=>x*x;
//const cuadrado=(x)=>{x*x};

console.log(cuadrado(5));

const arregloElementos=elementos
    .map(//mutar cada elemento del arreglo
        valorActual=>{
            return valorActual + '.-';
        }
    ).forEach(
        valorNuevo=>console.log(valorNuevo)
    );

console.log(arregloElementos);

const arregloNumeros=[1,2,3,4,5,6,7,8,9,10];
const filtrarNumeros=arregloNumeros
    .filter(n=>(n%2===0));
console.log(filtrarNumeros);
console.log(1=='1');//coparaciones de formato
console.log(1==='1');//comparaciones de tipo

console.log(''==0);//vacío no es lo mismo que el número cero (0)
const resultadoEvery=arregloNumeros
    .every(n=> n>1);//si cumple en TODOS -> true / si solo cumple 1 -> false
console.log(resultadoEvery);

const resultadoFilterIndex=arregloNumeros
    .findIndex(n=>n===7);
console.log(resultadoFilterIndex);

const resultadoFind=arregloNumeros
    .find(n=>(n===7));
console.log(resultadoFind);
console.log(Math.sqrt(4));
console.log(Math.sqrt(-4));

const reduceArreglo=arregloNumeros
    .reduce(
        (valorActualNumero,valorActualArreglo)=>
        {
            return valorActualNumero+valorActualArreglo;
        }
    );
console.log(reduceArreglo);