// Instalar o pacote que permite trabalhar mais ricamente -> "node-schedule"
const ns = require("node-schedule");


const job1 = ns.scheduleJob("*/3 * 15 24 * 5", function () {
  console.log("hi!");

}); 

//Posso por objetos também pois ele acessará cada aributo específico por destructure

const job2 = ns.scheduleJob({min: 30, hour: 15}, function () { //nesse caso não será possível por a cada x segundos ou min
  console.log("hi!");

});


//Para terminar o job, caso uma condição seja cumprida ou etc --> jobName.cancel()

//criando REGRAS --> uma forma de por um tempo padrão para as tarefas sem precisar ficar digitando sempre

const rule = new ns.RecurrenceRule() // instancia o objeto e define os atributos de tempo da regra --> eh a mesma coisa de por objetos que nem ali, porém com mais usabilidade tipo por um range

rule.hour = 18
rule.minute = 30
rule.dayOfWeek = new ns.Range(0, 6, 2) //começa do domingo e vai até sabado de dois em dois dias

const job3 = ns.scheduleJob(rule, () => {
  console.log('hello brother!')
})