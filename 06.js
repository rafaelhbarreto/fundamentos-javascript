/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

const capitalInicial = 200; 
const taxaJuros = 0.2; 
const tempo = 5; 

 // Juros simples M = C . (1 + i . t)
 // C = Capital emprestado. i = Taxa de juros do período (em valor decimal). t = Tempo (em meses).

const calcularMontanteComJurosSimples = (capitalInicial, taxaJuros, tempo) => capitalInicial * (1 + taxaJuros * tempo); 


// Juros compostos M = C (1 + i)t 

const calcularMontanteComJurosCompostos = (capitalInicial, taxaJuros, tempo) => (capitalInicial * (Math.pow((1 + taxaJuros), tempo))).toFixed(2); 


console.log(calcularMontanteComJurosSimples(capitalInicial, taxaJuros, tempo));
console.log(calcularMontanteComJurosCompostos(capitalInicial, taxaJuros, tempo));
