function greet(name, greetText = " Good Night") {
    console.log(name + greetText)
}

function sum(n1, n2, n3) {
    let sum = n1 + n2 + n3
    return sum
}

let name1 = 'harry'
let name2 = 'uttu'
let greetText = ' Good Morning'

greet(name1, greetText)
greet(name2)

let returnval = sum(1, 2, 3)
console.log(returnval)