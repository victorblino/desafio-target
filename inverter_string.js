// 5) Escreva um programa que inverta os caracteres de um string.

function inverteString(input) {
  return input.split("").reverse().join("");
}

const minhaString = "Hello world!";
const minhaStringInvertida = inverteString(minhaString);

console.log(`${minhaString} ao contrário fica: ${minhaStringInvertida}`);

// Saída: "Hello world! ao contrário fica: !dlrow olleH"
