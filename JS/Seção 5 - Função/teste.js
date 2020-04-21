function canCapture([yourRook, opponentsRook]) {

        this.x = 60;
        if (yourRook.charAt(1) == opponentsRook.charAt(1) || yourRook.charAt(0) == opponentsRook.charAt(0)) {return true;}
        else {return false;}
    
}

console.log(canCapture(["A8", "E4"]));
console.log(canCapture(["A1", "B2"]));
console.log(canCapture(["H4", "H3"]));
console.log(canCapture(["F5", "C8"]));
