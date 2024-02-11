//Задача 1 з використанням "for"

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

//Задача 1  з використанням "while"

function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        let amount = '';
        let a = 1;
        while (a <= i) {
            amount += symbol;
            a++;
        }
        console.log(amount);
        i++;
    }
}

drawTriangle(5, '*');


