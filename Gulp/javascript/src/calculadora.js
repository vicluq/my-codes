/*
 * Essa é uma calculadora bem legal!!!
 */

import lodash from 'lodash'

console.log(lodash.random(200, 100, false));


const Calculadora = {
    _resultado: 0,
    get resultado() {
        return this._resultado
    },
    somar(a, b = 0) {
        const soma = a + b
       
       
        this._resultado += soma
        return this
    },


    potencia(a, b) {
       
       
        const potencia = a ** b
       
        this._resultado += potencia
        return this
    },


    zerar() {
        this._resultado = 0
        return this //retorna o objeto q será usado novamente com seu valor alterado em cadeia
    },


    log() {
        console.log(this._resultado)
    }
}

// calcs are top