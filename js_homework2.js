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