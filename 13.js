/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const eDiaUtil = (numeroDia) => { 
    switch (numeroDia) {
        case 1:
            return false;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return true;
        default: return false;
    }
}

console.log(eDiaUtil(1));
console.log(eDiaUtil(2));
console.log(eDiaUtil(3));
console.log(eDiaUtil(4));
console.log(eDiaUtil(5));
console.log(eDiaUtil(6));
console.log(eDiaUtil(7));
