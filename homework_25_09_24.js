let car = {
    brand: 'Tesla',
    model: 'Cybertruck',
    topSpeed: '130MPH',
    seating: '5 Adults',
    descriptionInfo () {
        for (const key in this) {
            if (key !== 'descriptionInfo') {
               console.log(key + ': ' + this[key]);
            }        
        }
    },
};

car.descriptionInfo();
car.color = 'red';
car.descriptionInfo();