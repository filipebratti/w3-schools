var text = "ABCDEFGHIJKLMNOPQRSTUVXWYZ";

// .length retorna a quantidade de caracteres que a string possui
console.log(text.length);

// charAt() retorna o caracter iniciando do zero
console.log(text.charAt(0));
console.log(text.charAt(5));

if (text.charAt(5) === "F") {
    console.log("É a letra inicial do meu nome!")
}

// charCodeAt() retorna um número UTF-16 inteiro entre 0 e 65535
console.log(text.charCodeAt(0));
console.log(text.charCodeAt(5));

// charAt() e text[] retornam o caracter da próxima posição na String
console.log(text.charAt(0));
console.log(text.charAt(5));

console.log(text[0]);
console.log(text[5]);

const numbers = [1, 2, 3, 6, 8, 10];
const filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers);



