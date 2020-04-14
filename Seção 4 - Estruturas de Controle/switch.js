//Estrutura de controle que trabalha com 'casos'. Você fornece um valor e ele representa um caso no switch.
//O BRAKE SERVE PARA QUANDO ELE ENTRAR EM UM CASO, ELE NÃO EXECUTA TODOS OS OUTROS E SAI DO SWITCH

/*Probleminha: coloque a quantidade de dinheiro que possui, o código do produto que quer comprar e a quantidade. Se o dinheiro for insuficiente, não haverá
*compra, mas se for suficiente, ele avisa o total e a data comprada*/

const compraDeProdutos = (dinheiro, produto, qntd) => {

    switch (produto) {

        case 1003:
            if (qntd*12 > dinheiro) {
                console.log(`Faltam R$${((qntd*12) - dinheiro).toFixed(2)} para completar a compra`)
            }
            else {console.log(`Compra realizada com sucesso.
Seu troco foi R$${(dinheiro - qntd*12).toFixed(2)}`)
                  console.log(new Date);}
        break;

        case 1054:
            if (qntd*8.20 > dinheiro) {
                console.log(`Faltam R$${((qntd*8.20) - dinheiro).toFixed(2)} para completar a compra`)
            }
            else {console.log(`Compra realizada com sucesso.
Seu troco foi R$${(dinheiro - qntd*8.2).toFixed(2)}`)
                  console.log(new Date);}
        break;

        case 1067:
            if (qntd*5.50 > dinheiro) {
                console.log(`Faltam R$${((qntd*5.50) - dinheiro).toFixed(2)} para completar a compra`)
            }
            else {console.log(`Compra realizada com sucesso.
Seu troco foi R$${(dinheiro - qntd*5.5).toFixed(2)}`)
                  console.log(new Date);}
        break;

        case 1124:
            if (qntd*10.70 > dinheiro) {
                console.log(`Faltam R$${((qntd*10.70) - dinheiro).toFixed(2)} para completar a compra`)
            }
            else {console.log(`Compra realizada com sucesso.
Seu troco foi R$${(dinheiro - qntd*10.70).toFixed(2)}`)
                  console.log(new Date);}

        break;
    }

}
//QUANDO NÃO HÁ NENHUM CASO VOCÊ PODE USAR 'default:' AO INVÉS DE 'CASE X:'

compraDeProdutos(145, 1124, 13);
compraDeProdutos(145, 1003, 15);
compraDeProdutos(205, 1067, 18);
compraDeProdutos(137, 1054, 14);
