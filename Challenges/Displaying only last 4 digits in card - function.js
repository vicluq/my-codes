
let cardNumber = "8754456321113213";

function cardHide (card) {
let x = card.length; // x is the lenght of my card number string
let ToBeHiddenDigits = card.substring(0, x-4)
let notHiddenDigits = card.substring(x-4);
console.log(ToBeHiddenDigits.replace(/[0-9]/g, '*') + notHiddenDigits); //i've put togheter the hidden numbers with the not hidden
}

cardHide (cardNumber);

