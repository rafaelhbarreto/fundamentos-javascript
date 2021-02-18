/**
 * 01) Crie uma função que dado dois valores (passados como parâmetros)
 *  mostre no console a soma, subtração, multiplicação e
 * divisão desses valores.
 */

function mostrarOperacao(a, b) {
    soma = (a, b) => a + b;
    subtracao = (a, b) => a - b;
    divisao = (a, b) => a / b;
    multiplicacao = (a, b) => a * b;
    mostrar = _ => {
        console.log(`
        Soma: ${soma(a, b)}
        Subtração: ${subtracao(a, b)}
        Divisão: ${divisao(a, b)}
        Multiplicação: ${multiplicacao(a, b)}
    `);
    }

    mostrar();
}

mostrarOperacao(2, 2);
mostrarOperacao(4, 2);
mostrarOperacao(3, 4);
mostrarOperacao(4, 9); 