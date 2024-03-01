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

class User {
    constructor(id, fullName, birthDate, age, gender, cellPhone, country, state, city, cep, street, houseNumber) {
        this.id = id;
        this.name = fullName;
        this.birthDate = birthDate;
        this.age = age;
        this.gender = gender;
        this.cellPhone = cellPhone;
        this.country = country;
        this.state = state;
        this.city = city;
        this.cep = cep;
        this.street = street;
        this.houseNumber = houseNumber;
    }
}
const user1 = new User('1', 'Filipe Bratti Schmidt', '04/10/1986', '38 anos', 'Masculino', '49 9 9911 3041', 'Brasil', 'Santa Catarina', 'Lages', '88511030', 'Rua João Dias Brascher', '43');
const user2 = new User('2', 'Juliana Aparecida Duarte Schmidt', '15/05/1981', '41 anos', 'Feminino', '49 9 9916 1330', 'Brasil', 'Santa Catarina', 'Lages', '88511030', 'Rua João Dias Brascher', '43');
console.log(user1);
console.log(user2);