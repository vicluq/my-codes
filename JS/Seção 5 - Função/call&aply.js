function calcTribute () {console.log(`${this.preço*1.135}`)}

const carro = {
    cor: 'vermelho',
    calcTribute, //função ta definida no global então o método eh associado a ela por ter nome igual
    preco: 67990
}

//tem a mesma forma de fazer que a call e apply, mas ai com elas eu não preciso add como método uma função ao objeto para usar com ele 

///usando call e apply --> se a função tiver outros paramentros eu posso passar tbm. Só que: no call(objeto antes, resto dos param) | no apply (objeto, [array com parm na ordem])
const carro2 = {
    cor: 'branco',
    preço: 34634
}

calcTribute.call(carro2) //eu chamo o objeto que será o this da função nessa chamada, por causa do 'call'
calcTribute.apply(carro2) //mesma coisa
//OBS:

calcTribute.call(carro) //aqui não vai funcionar pois no objeto 'carro', não existe um atributo 'preço', mas sim, 'preco' e  a função pede 'this(obj que aponta).preço'

//se houvesse parametro..... calctribute.call(objeto, x, y) |||  calctribute.apply(objeto, [x, y])