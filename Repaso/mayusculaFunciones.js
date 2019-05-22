1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
function holaMundo(){
    console.log("Hola mundo");
}

//holaMundo();

//console.log(holaMundo());

function sumar(num_1, num_2){
    var esNumero_num_1=typeof num_1=="number";
    var esNumero_num_2=typeof num_2=="number";
    if(esNumero_num_1 && esNumero_num_2){
        return num_1+num_2;
    }else{
        console.log("Error");
    }
}

//console.log(sumar(1, "a"));

function sumarNumerosArreglo(numeros){
    var parametroDistintoDeNumber=false;
    var resultado=0;
    for(var i=0; i<numeros.length;i++){
        var esNumeroNumber=typeof numeros[i]=="number";
        if (!esNumeroNumber){
            parametroDistintoDeNumber=true;
        }else{
            resultado=resultado+numeros[i];
        }
    }
    var respuesta={
        noEsNumber:parametroDistintoDeNumber,
        resultado:resultado
    };
    return respuesta;
}

//console.log(sumarNumerosArreglo([1,2,3,4,5]));
//console.log(sumarNumerosArreglo([1,"2",3,4,5]));
function cambiarMayusculas(nombre, funcion){
    return `Hola ${funcion(nombre)}`;
}

function cambiarMinusculas(nombre, funcion){
    return `Hola ${funcion(nombre)}`;
}

console.log(cambiarMayusculas("Daniel", convertirMayusculas));

function convertirMayusculas(texto){
    return texto.toUpperCase();
}

console.log(cambiarMinusculas("DORIS", convertirMinusculas));

function convertirMinusculas(texto){
    return texto.toLowerCase();
}

function agregarPuntoFinal(texto){
    return texto + ".";
}

console.log(cambiarMayusculas(("un excelente dia"), agregarPuntoFinal));

function letraInicioPalabraMayuscula(texto){
    var letraInicioMayuscula=texto[0].toUpperCase();
    var restoPalabra=texto.slice(1,texto.length);
    return letraInicioMayuscula + restoPalabra;
}

console.log(cambiarMayusculas("luis",letraInicioPalabraMayuscula))