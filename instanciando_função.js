//Criando o objeto Normalmente --> representará um notebook

const notebook = {

    nome: 'Acer Nitro 5',
    RAM: '8gb',
    placaVideo: 'GTX 1050',
    cor: "Preto e vermelho"

} 

notebook.preço = 3600; //adicionando dinâmicamente

console.log(notebook);

//Instanciando --> usa-se 'new.'

function celular() {

    this.nome = "iPhone X"; //a notação ponto com o this permite que, quando eu instacie (torne um objeto), esses elementos se tornem atributos do objeto
    this.cor = "Branco"; //O this se refere ao que engloba esse elemento que nesse caso é a função celular --> evitar redundância
   //Se eu usasse celular.x, ele não iria reconhecer qnd instanciar pois o identificador que eu dei foi 'iPhone' e não celular, pq não pode
    let preco = 3000;
    let taxa_tributos = 0.12; //tudo isso será ignorado quando instanciar pois não usei o this co a notação ponto!!
    console.log(preco + preco*taxa_tributos); 
}


const iPhone = new celular(); // a variável iPhone receberá o objeto instaciado e ficará a mesma coisa do notebook
iPhone.preço = 3499; 

console.log(iPhone);



//Função dentro do objeto com o this + Função dentro de função

function celular2() {

    this.nome = "iPhone XS"; 
    this.cor = "Branco"; 
    this.preço_calculo = (valor, tributo) => { //quando eu instancrar celular2, devido ao 'this', eu poderei acessar a função calcular preço pelo objeto

        return valor + (valor*tributo);
    }
   
}

const iPhoneXS = new celular2();

console.log(iPhoneXS.preço_calculo(3120, 0.12));