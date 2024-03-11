function fibonacci(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  function verificarNumeroFibonacci(numero) {
    for (let i = 0; i <= numero; i++) {
      if (numero === fibonacci(i)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
      }
    }
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
  
  const numero = 4;
  const resultado = verificarNumeroFibonacci(numero);
  console.log(resultado);
  