
var car = {
    brand: "BMW",
    model: "525",
    year: 2015,
    getInfo: function () {
        for (var mean in this) {
            if (typeof this[mean] !== "function") {
                console.log([mean] + "-" + this[mean]);
            }
        }
    }
};

car.getInfo(); 

car.newMean = 'Fuel'; // Додав нову властивість до об'єкта
car.getInfo(); // Виводить всі властивості, включаючи нову