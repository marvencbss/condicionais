const a = 10
const b = 20

//  console.log(a > b);
if(a > b){
    console.log("A é maior que B");
}

if(a < b){
    console.log("A é maior que B");
}


// ex. 1
const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

function comparar(num1,num2){
    if(num1 === num2){
        console.log("Os números são iguais")
    }else{
        console.log("Os números não são iguais")
    }
}
// comparar(num1,num2)

//ex. 1 alt.

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))

function comparar(num1,num2){
    if(num1 > num2){
        console.log(`o número ${num1} é maior que o número ${num2}`)
    }else if(num1 < num2){
        console.log(`o número ${num1} é menor que o número ${num2}`)
    }else{
        console.log(`o número ${num1} é igual ao número ${num2}`)
    }
}
comparar(num1,num2)




//switch case
let nacionalidade = "brasileiro";

switch(nacionalidade){
    case "brasileiro":
        console.log("Olá brasileiro");
        break
    case "brasileira":
        console.log("Olá brasileira");
        break
    default:
        console.log("Você não é do Brasil");
        break
}

//ex. pokemon
const pokemon = Number (prompt(`Escolha um pokemon dos iniciais
1 - bulbasauro
2 - squirtle
3 - charmander`))

switch(pokemon){
    case 1:
        console.log("Você escolheu o bulbasauro, pokemón planta");
        break;
    case 2:
        console.log("Você escolheu o squirtle, pokemón água");
        break
    case 3:
        console.log("Você escolheu o charmander, pokemón fogo");
        break
    default:
        console.log("Você só pode escolher 3 pokemóns.");

}

//ex. 5
faculdadeOk(); {
    const ensMedio = prompt("Escreva se você concluiu o Ensino Médio");
    const maioridade = Number (prompt("Diga sua idade"));
    const cursando = prompt("Diga se você está cursando outra faculdade")
    return faculdadeOk
}
