/**
 * 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho
 * de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais.
 * Escaleno: Todos os lados são diferentes. Crie uma função que recebe os
 * comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 * ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições
 * matemáticas de existência de um triângulo).
 */

// Equilátero - 3 lados iguais
// Isóceles - 2 lados iguais
// Escaleno - 3 lados diferentes 

function getType(a, b, c) {
    if (a == b && a == c) {
        return 'Equilátero';
    } else if (a != b && a !== c && b !== c) {
        return 'Escaleno';
    }

    return 'Isósceles';
}

console.log(`O triangulo 2, 2, 2 é ${getType(2, 2, 2)}`);
console.log(`O triangulo 2, 2, 1 é ${getType(2, 2, 1)}`);
console.log(`O triangulo 2, 2, 2 é ${getType(5, 2, 3)}`);