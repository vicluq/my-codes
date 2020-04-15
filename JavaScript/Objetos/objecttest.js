

function ErrorTreatment (error) {
    
    console.log("You got an error, chack your syntax, or whatever.")
    console.log(new Date)
}


function ErrorTest (a, b) {

    a = 10;
    b = 12;

    try {
         
        if (a<c) {return a+b}
        else {return a*b}
    
    } catch (error) {
        ErrorTreatment(error);
    }
   
}

console.log(ErrorTest(4, 6))