var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  services['Розбити скло'] = "200 грн";
  
  var salon = {
    price: function() {
      var total = 0;
      for (var service in services) {
        total += parseInt(services[service]);
      }
      return total;
    },
    minPrice: function() {
      var min = Infinity;
      for (var service in services) {
        var price = parseInt(services[service]);
        if (!isNaN(price) && price < min) {
          min = price;
        }
      }
      return min;
    },
    maxPrice: function() {
      var max = -Infinity;
      for (var service in services) {
        var price = parseInt(services[service]);
        if (!isNaN(price) && price > max) {
          max = price;
        }
      }
      return max;
    }
  };
  
  console.log("Загальна вартість послуг:", salon.price() + " грн");
  console.log("Мінімальна вартість послуг:", salon.minPrice() + " грн");
  console.log("Максимальна вартість послуг:", salon.maxPrice() + " грн");