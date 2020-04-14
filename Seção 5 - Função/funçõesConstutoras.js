//Criando o objeto Normalmente --> representará um notebook

function calcTribute () {return `${this.preço*1.135}`}

const notebook = {

    nome: 'Acer Nitro 5',
    RAM: '8gb',
    placaVideo: 'GTX 1050',
    cor: "Preto e vermelho",
    calcTribute //como a funçã tá no global do módulo, eu posso colocar ela de método apenas usando o nome pq  como tem o mesm nome, o método associa direto à ela

} 

notebook.preço = 3600; //adicionando dinâmicamente
console.log(notebook.calcTribute())
console.log(notebook);

//Instanciando --> usa-se 'new.' A função que origina o objeto se chama costrutor, pois ela eh a 'blueprint' desse objeto que eh orriginado dela
//'Método Construtor'

//o this torma o método/variável/aatributo público, ou seja, posso visualizar  e acessar ffora da função, ao instanciá-la!!  Se não usa o this, o elemento integra o objt mas fica privado e não pode ser alterado
function celular() {

    this.nome = "iPhone X"; //a notação ponto com o this permite que, quando eu instacie (torne um objeto), esses elementos se tornem atributos do objeto
    this.cor = "Branco"; //O this se refere ao objeto que engloba esse elemento --> nesse caso é o node(global)
   //Se eu usasse celular.x, ele não iria reconhecer qnd instanciar pois o identificador que eu dei foi 'iPhone' e não celular, pq não pode
    let preco = 3000; //Aqui o preço é fixado e só pode ser alterado na função pois não usei o this, porém ele constituirá o obj
    let taxa_tributos = 0.12; //tudo isso será ignorado quando instanciar pois não usei o this co a notação ponto!!
    console.log(preco + preco*taxa_tributos); 
}


const iPhone = new celular(); // a variável iPhone receberá o objeto instaciado e ficará a mesma coisa do notebook
iPhone.preço = 3499; 

console.log(iPhone);



//Função dentro do objeto com o this + Função dentro de função --> eu poderia tambem criar uma função normal e só por o nome dela no objeto e acessar deboa, pois como essa função existe no global do módulo, o objeto associa esse métodoaà função

function celular2(nome, cor) {

    this.nome = nome 
    this.cor = cor; 
    this.preço_calculo = (valor, tributo) => { //quando eu instancrar celular2, devido ao 'this', eu poderei acessar a função calcular preço pelo objeto

        return valor + (valor*tributo);
    }
   
}

const iPhoneXS = new celular2("Iphone X", "Branco");

console.log(iPhoneXS.preço_calculo(3120, 0.12));

 /////ideia: função construtora para um carro --> possui uma velocidade --> crio métodos(ações) pra acelerar e desacelerar, e outro método que exibe a velAtual
 //onclick, press (sla), delay para aumentar gradativamente ou diminuir gradativamente. para se movimeentar, multiplica a velociade pela posição pq ai ele troca a posição de acordo com a velocidade

 