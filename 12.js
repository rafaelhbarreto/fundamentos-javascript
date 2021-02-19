/**
 * Faça um algoritmo que calcule o fatorial de um número.
 */

const fatorial = (numero) => { 
    let total = 1;
    
    if (numero > 1) {
        for (let i = numero; i >= 1; i--) {            
            total *= i; 
        }
    }

    return total; 
}
 
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(4));
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(7));
