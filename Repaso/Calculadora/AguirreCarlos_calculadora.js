module.exports={
  nombreApp:'Calculadora XYZ',
  summa:(n1,n2)=>n1+n2,
  resta:(num_1, num_2)=>num_1-num_2,
  producto:(n1,n2)=>n1*n2,
  division:(num_1, num_2) => (num_2 != 0) ? num_1/num_2 : "No es posible dividir para cero"
};
