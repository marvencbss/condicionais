const numeroResult = prompt("qual sua idade?")
if (numeroResult < 18) {
    alert("Este login, não é permitido para menores de idade!!")
}
console.log (numeroResult)





const pokemon = prompt("digite um pokemon")
switch (pokemon.toLowerCase()){

    case "bulbasauro".toLowerCase():
        console.log("você escolheu o bulbasauro");
        break;
        
    case "squirtle".toLowerCase():
        console.log("você escolheu o squirtle");
        break;
        default:
            console.log("O seu parça, não da pra escolher outro...")
            break;
}





alert("Para que você possa estudar nesta faculdade, é necessario sabermos sobre alguns dados antes...")

 const formaçãoAcademica = prompt("qual sua formação academica? Ensino medio completo, ou somente fundamental competo")
switch (formaçãoAcademica.toLowerCase()){
    case "ensino medio completo".toLowerCase():
 let suaidade = Number(prompt("Digite sua idade:"))
 if(suaidade < 18) {
    alert("Desculpe, para a finalização da matrícula, é necessário ter mais de 18 anos")
 }
 
        default:
            alert("Desculpe, é necessario ter cursado o ensino médio para realizar a matrícula...")
            break;
            console.log(formaçãoAcademica)
}