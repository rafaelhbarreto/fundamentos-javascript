/**
 * 10 - Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

const eDivisivel = (numero, base = 3) => numero % base == 0 ? true : false; 


console.log(eDivisivel(3));
console.log(eDivisivel(10));
console.log(eDivisivel(6));
console.log(eDivisivel(8));
console.log(eDivisivel(9));
