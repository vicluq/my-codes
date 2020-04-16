// String, Number, Array são funções e com isso tem também o atributo x.prototype e tem um __proto__ (aponta para Function.prototype pois são funções)
//eu posso add métodos a essas funções por meio desse atributo e usá-los com seus elementos (ex: se eu crio um método para o das strings, então toda string tem acesso a ele)

//Object, String, Number e Array == FUNÇÕES. Tem o atributo prototype que permite que cada elemento do seu tipo utilize o que eu adicionar
//O conceito é o mesmo de objetos. Todos os elementos vão apontar em seuas respectivos protótipos padrão

//Um exempllo: o método split, substring, charAt, etc são todos presentes no objeto String.prototype (pertencente à fun String) e por isso todas as strings podem acessar 

Array.prototype.sortArray = function () { //adicionei um método ao atributo prototype dos Arrays, o que torna esse método disponível para todos usarem. LEMBRAR: ESSE ATRIBUTO NÃO É PROTOTIPO DA FUNÇÃO ARRAY, MAS SIM DOS ARRAYS CRIADOS. O PROTÓTIPO DESSA FUNÇÃO É FUNCTION.PROTOTYPE

    let aux = 0;

    for (let i = 0; i < this.length; ++i) {
        for (let j = i; j < this.length; ++j) { //OBS: Eu acesso o parâmetro que vai ser o meu array, quando invocar o método usando a not ponto, usando o this 

            if (this [i] > this [j]) {

                aux = this[i]
                this[i] = this[j]
                this[j] = aux
            }
        }
    }

    return this
}

let array = [5, 1, 4, 3, 8, 2]
console.log(array.sortArray())

//CUIDADO POIS É JUSTAMENTE NESSES ATRIBUTOS DESSAS FUNÇÕES DA API DO NODE QUE ESTÃO OS MÉTODOS QUE USAMOS COMUMENTE. NÃO ALTERAR E CUIDADO!

