

function ErrorTreatment (error) {
    
    console.log("You got an error, chack your syntax, or whatever. Chack the error: ", error)
    console.log(new Date)
}


function ErrorTest (a, b) {

    a = 10;
    b = 12;

    try { //a try pega o erro e envia para a catch que recebe esse erro como parâmetro e manda executar uma função que pode ou não receber o erro, dependedo de como quero tratar
         
        if (a<c) {return a+b}
        else {return a*b}
    
    } catch (error) { //enviei o erro para ser mostrado pela função que criei usando a Catch --> como se fosse uma callback
        ErrorTreatment(error);
    }
   
}

console.log(ErrorTest(4, 6))