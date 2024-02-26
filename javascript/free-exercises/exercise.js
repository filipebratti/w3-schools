if (new Date().getHours() >= 18) {
    console.log("Good Evening!")
}

if (new Date().getHours() >= 14) {
    console.log("Você está atrasado! Isso vai ser descontado no final do mês.")
}

function greeting(name, lastName) {
    console.log("Welcome " + name + " " + lastName + "!");
};

var nameOne = "Filipe";
var lastName = "Bratti";

greeting(nameOne, lastName);

if (new Date().getHours() >= 7 && new Date().getHours() < 12) {
    console.log("Bom dia!");
};

if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
    console.log('Boa tarde!');
};

if (new Date().getHours() >= 18 || new Date().getHours() < 7) {
    console.log('Boa noite!');
};

const car = {name:'Ka', type:'Fiat', model:'500', color:'white'};
let nameTwo = car?.name;
console.log(nameTwo)

const notebook = {brand:'Acer', model:'Aspire', price:'R$3.500'};
var notebookBrand = notebook?.brand;
console.log(notebookBrand)





