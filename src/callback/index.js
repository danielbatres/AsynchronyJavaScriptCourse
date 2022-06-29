const sum = (num1, num2) => num1 + num2;

const calc = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(calc(2, 3, sum));

setTimeout(() => console.log("Hola JavaScript"), 2000);

const greeting = name => console.log(`Hola ${name}`);

setTimeout(greeting, 3000, "Daniel");