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

function mean(a, b) {
    let result = 1;

    for (let i = 0; i < b; i++) {
        result *= a;
    }

    return result;
}


let result = mean(4, 3);
console.log(result); 
