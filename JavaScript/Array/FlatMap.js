
const escola = [
    {nome: 'Turma1',
     alunos: [{
         nome: 'joao',
         nota: 9.8
     },
     {
        nome: 'julia',
        nota: 9.6
    }]},    
    
    {nome: 'Turma2',
    alunos: [{
        nome: 'carlos',
        nota: 7.8
    },
    {
       nome: 'ana',
       nota: 8.5
   }]}
]


let notasArray = escola.map(turma => turma.alunos)
notasArray = notasArray[0].concat(notasArray[1])
notasArray = notasArray.map(aluno => aluno.nota)
//Associar o concat ao map. Não faz parte do Node, então é meljor trabalhar sem ele. Se precisar retoma depois!!

console.log(notasArray)