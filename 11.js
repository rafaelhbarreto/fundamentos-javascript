/**
 * 11 - 
 * De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false
 */

const eAnoBissexto = (ano) => {
    if (ano % 400 == 0) {
        return true;
    } else if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0)
        return true; 
    
    return false;
}


console.log(eAnoBissexto(2015));
console.log(eAnoBissexto(2016));
console.log(eAnoBissexto(2017));
console.log(eAnoBissexto(2018));
console.log(eAnoBissexto(2019));
console.log(eAnoBissexto(2020));
