class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}
const myCar = new Car('Audi', 'E-tron GT');
console.log(myCar.brand);
console.log(myCar.model);

class VideoGame {
    constructor(brand, model, bestgame) {
        this.brand = brand;
        this.model = model;
        this.bestgame = bestgame;
    }
}
const myVideoGame = new VideoGame('Xbox', 'Xbox Series S', 'Forza Horizon')
console.log(myVideoGame.bestgame, '/', myVideoGame.model, '/', myVideoGame.bestgame)