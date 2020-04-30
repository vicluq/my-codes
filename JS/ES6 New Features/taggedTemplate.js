//!Tagged templates é quando você passa um template string para uma função como "parâmetro"
//* Ao por dois parâmetro na função, o primeiro recbe a parte que é string e o segundo recebe o primeiro valor entre chavs.
//se eu quiser pegar os outros valores eu ponho array

const tagged = (strTemp, ...values) => { //os VALORES DO TEMPLATE são o que estarão entre as chaves
  console.log(strTemp)
  console.log(values)
}

const pessoa1 = 'Carlos'
const pessoa2 = 'Julia'

tagged `${pessoa1} está muito bem, ${pessoa2}` //? primeiro sai a parte que é string (fora das chaves) e depois a coleção de valores



