// Math é um objeto em JavaScript. Em C, para usar os recursos de pow(), PI, sin, cos, tan, você deve incluir 'math.h' antes
//Em JavaScript basta por 'Math."x"' em que x = o que vc deseja usar (pow, PI, etc.)


// Dado um triângulo de altura = 10 e ângulo formado entre a hipot e a base sendo 30, calcule a hipotenusa

const altura = 10;
let base;
let hipote;

base = 30/Math.sqrt(3);

console.log('o valor da base é:',base.toFixed(2));

hipote = Math.hypot(base, altura);

console.log('A hipotenusa vale:', hipote.toFixed(2));


// Calcule a área da circunferência de Raio = 4

const raio = 4;
let area;

area = Math.PI*Math.pow(raio, 2);

console.log('o valor da área da circunferência é:', area.toFixed(2));

//Math.floor() retorna o valor arredondado para baixo
//Math.ceil() retorna o valor arredondado para cima

//Gerar número aleatório: Math.random()

const randomNumber = (min = 0, max = 40) => {

    const random = Math.floor((Math.random() * (max - min)) + min); //a random gera entre 0 e 1, ento devemos add os parâmetros multiplicativos
    return random;                                     // se ele gerar 0, então o valor será o mínimo e se gerar 1, será o máximo de acordo com a fórmula
}
//Math.floor() retorna o valor arredondado para baixo
//Math.ceil() retorna o valor arredondado para cima


console.log(randomNumber(0, 20));

