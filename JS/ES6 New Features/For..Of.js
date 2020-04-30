//! For in vs. For Of --> o for in percorre pelo índice/key do array/obj. O for of percorre pelos valores

//? EM ARRAYS

const arr1 = [2, 7, 8, 2, 5];
for (let i in arr1) {
  //o i é o índice de cada elem
  console.log(arr1[i]);
}

for (let i of arr1) {
  //*agora o i é o elemento/valor
  console.log(i);
}

//? EM OBJETOS

const obj1 = { nome: "Victoria", idade: 18, altura: 1.55, peso: 62.3 };

for (let j in obj1) {
  console.log(j); //Pega as chaves dele
}

//for (let j of obj1) { //! FOR OF NÃO FUNCIONA PARA OBJ POIS OBJS NÃO SÃO ITERÁVEIS!
//    console.log(j)
//}

//? EM MAPS

const map1 = new Map([
  ["nome", "victoria"],
  ["idade", 18],
  ["peso", 62.3],
]);

for (let m in map1) {
  //pega as chaves do Map
  console.log(m);
}

for (let m of map1) {
  //pegará os entries de map1, pois map1 é um 'array' com elementos sendo entries
  console.log(m);
}

for (let m of map1.values()) {
  //como to pegando os valores só desse array de entries, ele me da o valor!
  console.log(m);
}
