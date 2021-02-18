/**
 * 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */

const dividir = (dividendo, divisor) => {
    const resultado = dividendo / divisor;
    const resto = dividendo % divisor;

    console.log(`
    ${dividendo} / ${divisor} = ${resultado}
    Resto da divisão: ${resto}
    `);
}

dividir(2, 2);
dividir(3, 2);
dividir(5, 2);
dividir(10, 2);
dividir(20, 2);
dividir(30, 2);
dividir(30, 3);