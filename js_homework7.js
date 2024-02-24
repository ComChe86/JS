let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andriiанатол@gmail.com"
    },
    {
        userName: "Archi",
        lastName: "Petrovich",
        email: "archi@gmailyahoo.com"
    },
];

// Перевіряю валідацію email
const emailValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

// Регулярний вираз для перевірки домену
const validDom = /@(gmail\.com|yahoo\.com)$/;

// Валідація до "@"
const beforeAtValid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?/;

let trustEmails = arr.filter(entry => {
    // Перевіряю валідність email і присутність "gmail.com" або "yahoo.com"
    const isValidEmail = emailValid.test(entry.email) && validDom.test(entry.email);

    // Перевірка частини email до "@"
    const isBeforeAtValid = beforeAtValid.test(entry.email);

    // Результат перевірок
    return isValidEmail && isBeforeAtValid;
});

// Масив з довіреними адресами
let trustEmailValid = trustEmails.map(entry => entry.email);

console.log(trustEmailValid);
