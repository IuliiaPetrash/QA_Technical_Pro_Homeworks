var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
  
    price() {
      let totalPrice = 0;
      for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
          totalPrice += parseInt(this[key]);
        }
      }
      return totalPrice + ' грн';
    },
  
    getMinPrice() {
      let minPrice = [];
      for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
          minPrice.push(parseInt(this[key]));
        }
      }
      return Math.min(...minPrice) + ' грн';
    },
  
    getMaxPrice() {
      let maxPrice = [];
      for (let key in this) {
        if (typeof this[key] === 'string' && this[key].includes('грн')) {
          maxPrice.push(parseInt(this[key]));
        }
      }
      return Math.max(...maxPrice) + ' грн';
    }
  };
  
  services["Розбити скло"] = "200 грн";
  
  console.log('Загальна вартість: ' + services.price());
  console.log('Мінімальна ціна: ' + services.getMinPrice());
  console.log('Максимальна ціна: ' + services.getMaxPrice());
  