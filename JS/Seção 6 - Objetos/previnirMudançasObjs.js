//Mecanismos para controlar a adição/remoção e mudança dos elementos


//1) Object.preventExtensions --> previne adição de elementos. Pode remover e mudar valores

const obj1 = {
    prod1: 'PC',
    prod2: 'Celular',
    prod3: 'Fone'

}

Object.preventExtensions(obj1)

obj1.prod4 ='roupa' //não vai integrar o obj

console.log(obj1)


//2) Object.seal() --> não permite adicionar ou remover atributos porém permite alterar os valores
//3) Object.freeze() --> Não permite nada e congela o obj como está!!

