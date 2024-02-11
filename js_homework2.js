var userAge = prompt("Введіть свій вік");
if (!isNaN(userAge) && userAge >=0) {
    var year = userAge % 10;
    var years = userAge >= 11 && userAge <=20;
    var result;
    if (years) {result = "років";}
    else if (year ===1) {
        result = "рік";}
    else if (year >=2 && year <=4){
        result = "роки";}
        else { result = "років"}
   

alert(`Вам ${userAge} ${result}.`);
}
else {
    alert ("Введіть коректне та не від'ємне число ")

}

Задача 2

var mean = "кг";
var amount = 12;

switch (mean) {
    case "км":
        var convertAmount = amount * 1000; 
        console.log(`${amount} км це ${convertAmount} м`);
        break;
    case "год":
        var convertAmount = amount * 60; 
        console.log(`${amount} год це ${convertAmount} хв`);
        break;
    case "кг":
        var convertAmount = amount * 1000; 
        console.log(`${amount} кг це ${convertAmount} г`);
        break;
    default:
        console.log("Невірна одиниця вимірювання");
}
