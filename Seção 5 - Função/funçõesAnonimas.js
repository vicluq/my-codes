// 1) São tbm as armazenadas em variáveis e atributos(os métodos), e acessa a função pelo nome da variável/atributo como se fosse o nome da função


//2) comumente passadas como parametros em outras funçãoes

const show_mult = (x, y, funtionMultiply) => {

    console.log(funtionMultiply(x, y)); //a variável funtionMultiply vai ser igualada à função anonima passada de param, torando-se uma função. e os seus parâmentros passados pelo ser vão ser x e y.
}

show_mult(5, 7, function (a, b) { //a = x, b = y 
    return a*b;
})


show_mult(3, 7, (a, b) => { //a = x, b = y 
    return a*b;                     //com arrow tbm rola

})

// eu tenho que pensar que: a variável que eu usei la no parametro de 'show_mult' vai receber uma função, então se tornará uma função