// O template string é: ${ } Tudo o que você por dentro das chaves ele executa a operação ou o que seja e põe na string. Delimitado pela crase ` `! 
//ele é muito útil para textos e coisas mais longas pois ele processa a quebra de linha no meio da string e tudo. FLEXÍVEL

let nome = "Victoria";
let email = 'victoria.tewari@gmail.com'
let idade = 18;

console.log(`
Olá, meu nome é ${nome}!  
Eu tenho ${18} anos.
Meu E-mail para contato é: ${email}`); //O ${ } permite que traga elementos de fora

console.log("meu nome é ",nome,'! Eu tenho',idade,'!') //menos flexível e ñ permite da quebra de linha no meio da string

console.log(`
Um triângulo de altura = 10 e ângulo formado pela hipot e pela base igual a 30° tem:
Base  = ${(30/Math.sqrt(3)).toFixed(2)}
Hipotenusa = ${Math.hypot(10, 30/Math.sqrt(3))}
`) //flexibilidade incrível


