//utiliza o método concat para juntar dois ou mais arrays resultando em um novo com todos juntos

const array1 = [3, 5, 7, 2, 6];
const array2 = [12, 9, 7, 10, 2, 23]

const juntos = array1.concat(array2) //junta o array2 ao fim do array1 gerando um novo SEM MEXER COM OS ORIGINAIS! Semelhante ao método assign dos objetos que junta vários em um gerando um novo geral
console.log(juntos)

const juntos2 = array1.concat(array2).concat([4, 7, 2, 23, 78]) //posso encadear e por arrays literais!
console.log(juntos2)
//porém não preciso encadear concats pois ele aceite varios arrays como parâmetro ent só separar por vírgula