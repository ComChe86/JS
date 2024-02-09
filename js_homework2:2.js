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