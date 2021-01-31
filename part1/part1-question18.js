let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for (let cartype in statistics) {
    if(cartype.charAt(0) === 'r') {
        console.log(`${cartype}: ${statistics[cartype]}`);
    } else if (statistics[cartype] % 2) {
        console.log(`${cartype}: ${statistics[cartype]}`);
    }
}