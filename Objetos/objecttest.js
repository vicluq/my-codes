function concatName ({name, lastname}) {
    
    return "My name is ".concat(name).concat(" ").concat(lastname) //could just use +
}

const person = {
    name: "Victoria",
    lastname: "Luquet",
    hello: () => {
        return "i love you " + this.name
    }
}

console.log(person.hello())