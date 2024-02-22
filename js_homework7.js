
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];


var validEmail = arr.filter(necessary => /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.
test(necessary.email) && (necessary.email.indexOf('gmail.com') !== -1 || necessary.email.indexOf('yahoo.com') !== -1));

console.log(validEmail);

//*/(^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@:) В цій частині перевіряю, чи починається рядок латинською буквою чи цифрою, і може містити одне або більше аналогічних символів. Потім слідує @.

//*[a-zA-Z0-9]+\.: В цій частині перевіряю доменну частину email, чи містить вона латинські букви чи цифри.

//*[a-zA-Z0-9]+$: В цій частині перевіряю, чи наступні символи містять латинські букви чи цифри та закінчуються нашим рядком.



// Додатково перевіряю валідацію після @
var email1 = "Andrii@gmail.com";
var email2 = "Andrii@gmailcom"; // Помилка

var valid = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

console.log(email1 + ': ' + valid.test(email1));
console.log(email2 + ': ' + valid.test(email2)); // буде false через відсутність "."


