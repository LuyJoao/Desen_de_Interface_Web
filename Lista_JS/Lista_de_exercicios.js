/*1.Operações com dois números
Peça para o usuário digitar dois números. Se os valores forem válidos, exiba:
a soma, subtração, multiplicação, divisão e o resto da divisão entre eles.*/

let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));

if (!isNaN(a) && !isNaN(b)) {
    console.log(`Soma: ${a + b}`);
    console.log(`Subtração: ${a - b}`);
    console.log(`Multiplicação: ${a * b}`);
    console.log(`Divisão: ${a / b}`);
    console.log(`Resto da divisão: ${a % b}`);
} else {
    console.log("Valores inválidos!");
}
