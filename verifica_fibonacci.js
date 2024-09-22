// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  if (numero == 0 || numero == 1) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  }

  while (atual <= numero) {
    let proximo = anterior + atual;
    if (proximo == numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
    anterior = atual;
    atual = proximo;
  }
  return `O número ${numero} não pertence a sequência de Fibonacci.`;
}

console.log(verificaFibonacci(21)); // Usando 21, a saída vai ser: "O número 21 pertence à sequência de Fibonacci."

console.log(verificaFibonacci(999)); // Usando 999, a saída vai ser: "O número 999 não pertence a sequência de Fibonacci."
