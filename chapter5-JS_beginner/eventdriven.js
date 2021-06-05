function add(a, b) {
    let sum;
    sum = a + b;
    return sum;
}

function showResults () {
    let a = 3;
let b = 5;
let result = add(a,b);

document.write(`${a} + ${b} = ${result}`);   
}
