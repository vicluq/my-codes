# Modules.exports Objects are Cached when called

* Quando fazemos require de um módulo, recebemos o module.exports que comumente é um objeto já feito, então ele sofre cahce e fica armazenado o seu require na memória e se eu fizer um require do mesmo módulo, depois, eesse require pega o cached memory para não gastar mais memória do PC, e o que eu mecher no objeto que recebeu o módule.exports vai vecher no outro objt que recebeu o mesmo --> Atribuição por ref.

* Uma forma de criar objetos separados porém com o mesmo contudo é criar uma factory dento o mdule exports com o conteudo que eu colocaria no próprio módule exports, ou simplesmente fazer do mudule exports uma factory que retorna um objeto que eu colocaria

Como funciona: eu teria que invocar a função module.exports(factory) ao lado do require para já receber o objeto


# This 


* No global do módulo: nesse caso o this vai apontar para [module.exports]
* Dentro de uma function: nesse caso o this aponta para o [global]
* Dentro de uma arrow: aqui é para o [module.exports]

[ex:]  
    
    function funcNormal () {

        console.log('Na normal:')
        console.log(this == module.exports) //false
        console.log(this == global) //true
        }


    const arrow = () => {
        console.log('Na normal:')
        console.log(this == module.exports) **//true** 
        console.log(this == global) **//false**
        } 

**isso ocorre pois a arrow guarda o local onde foi criada e não vria o this de acordo com quem chama a função, nem mesmo quando ela é método de uma objeto e uso o this nesse método (ele vai se referir ao module.exports)**
