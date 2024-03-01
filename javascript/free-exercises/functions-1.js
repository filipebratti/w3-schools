function myName(name, lastName) {
    var name = "Filipe";
    var lastName = "Bratti";
    return "Meu nome é " + name + " " + lastName;
}
console.log(myName())

const x = function (a, b) {
    return a * b;
}
let z = x(4, 3)
console.log(z);

const addFunction = function (a, b) {
    return a + b;
}
let myFirstAdd = addFunction(5, 5);
let mySecondAdd = addFunction(10, 10);
console.log(myFirstAdd, mySecondAdd);

const subFunction = function (a, b) {
    return a - b;
}
let myFirstSub = subFunction(5, 2);
let mySecondSub = subFunction(15, 3);
console.log(myFirstSub, mySecondSub);
