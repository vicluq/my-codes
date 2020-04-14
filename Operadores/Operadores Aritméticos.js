//ELES OPERAM DOIS A DOIS - BINÁRIA (+,-, *, /)

const x = 90;

const [y, z, w] = [3, 7, 20];

const obj0_5 = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4,
    num5: 5
}

//SOMA/SUBTRAÇÃO

const soma = y + z + w
const soma2 = x + w
const soma3 = obj0_5.num2 + w

//MULTIPLICAÇÃO/DIVISÃO

const mult = y * z * w
const mutl2 = x * w
const mult3 = obj0_5.num2 / w

//POTÊNCIA (ESC7) OU USAR OBJETO Math e a função pow (Math.pow())

const pow = y ** z 
const pow2 = x ** w
const pow3 = obj0_5.num2 ** w

console.log(pow3)

//RESTO DIVISÃO

const resto = y % z 
const resto2 = x % w
const resto3 = w % obj0_5.num3

console.log(resto3)