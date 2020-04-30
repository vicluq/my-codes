// Por meio do objeto process podemos acessar métodos de I/O --> sdtout.write(string), stdin.on(), process.argv(pega as flags, argm passados ao executar com o node)

const flags = process.argv.indexOf('-e')//argv fornece um array com as flags passadas na execução com o node
//isso pode ser muito útil para caso é queira executar apenas uma parte do código então eu uso condições para saber a flag usada
console.log(flags)

/*
[
  'C:\\Program Files\\nodejs\\node.exe', --> referente ao node
  'C:\\Users\\Victo\\OneDrive\\Documentos\\JavaScript\\JS\\Node\\Entrada_SaidaPadraoNode.js', --> referente ao arquivo
  '-a', --> argumentos passados
  '-b', 
  '-e'
]
*/

process.stdout.write('Hello!\n') //saida padrão --> igual ao printf
process.stdin.on('data', (buffer) => { //é um processo assíncrono e por isso não posso por no stdout fora da função
    process.stdout.write(buffer) //eu digo o tipo que quero usar na 'on' (data pega coisa do buffer) e na função pego oq digitei
    process.exit() //se eu não terminar o processo ele vai pedir indefinidamente para que eu digite e exiba
})

