//Objetos pais que passam suas características e atributos/métodos para um objeto 'filho', ou seja, que surge desse objeto pai (pai é o protótipo para a criação do filho)
//forma de reusar códigos e padrões --> PREFERIR COMPOSIÇÃO À HERANÇA --> composição em obj seria objetos compostos de outros

// compos em função: composição é quando usamos encadeamentos de funçoes ou reduzimos várias a uma só (funções compostas por outras!)

/*  Em JS a herança é baseada em protótipo, ou seja, o protótipo é o objeto que origina, que é o pai, desse outro objeto, então por exemplo:
 *  se eu tentar acessar um atributo de um objeto, mas que não esteja definido direto nele, o JS vai atrás desse atributo no protótipo dele e 
 *  caso não haja um protótipo, ou seja, sem herança (sem obj pai), ele vai dar undefined
 *   
 *   OBS: PROTOTYPE DOS OBJ É DIFERENTE DO DAS FUNÇÕES, PORÉM FUNÇÕES TAMBÉM TEM PROTOTÓTIPOS
 *  PARA ACESSAR O DOS OBJT (.__proto__) ;; PARA ACESSAR O DE FUNÇÕES (.prototype)
 *   Nas funções essa propriedade está relacionada à hirarquia de escopos e variáveis --> se não achar a variável na função ele busca nos escopos acima
 */ 


const pessoa1 = {  ///cada objeto aponta, nasce de um protótipo na hierarquia, se não nascer de um prot, o prot é o padrão, o protótipo é vazio, porém existe
    nome: 'Victoria',
    age: 18
}

const pessoa2 = {
    nome: 'Victor',
    age: 19
}

console.log(pessoa1.__proto__) //pessoa1.__proto__ === Object.prototype (o protótipo de todos objetos, o mais alto na hierarquia)

//OBS: os objetos por padrão apontam para o Object.prrototype que é o objeto mais alto e é vazio a não ser que eu add algo. Ou seja ele não tem prototipo, null, com EXCESSÃO DOS OBJ CRIADOS DE FUNÇÕES