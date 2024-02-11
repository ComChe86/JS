Задача 1

function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let amount = '';
        for (let a = 1; a <= i; a++) {
            amount += symbol;
        }
        console.log(amount);
    }
}

drawTriangle(5, '*');

Задача 2

function pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}


let result = pow(3, 3);
console.log(result); 
