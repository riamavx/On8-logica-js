/**
    Documentação para consulta

    if/ else if/ else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/
// const letrasDoAlfabeto = prompt("Digite uma letra, bença")

// switch (letrasDoAlfabeto) {
//   case 'a':

//   case 'e':

//   case 'i':

//   case 'o':

//   case 'u':

//     alert(`Sua letra ${letrasDoAlfabeto} é uma vogal`);
//     break
//   default:
//     alert(`Sua letra ${letrasDoAlfabeto} é consoante`);
// }

// //outra forma de responder a questão
// const letra = prompt('digite uma letra');

// if (letra === 'a'||
//  letra === 'e' ||
//   letra === 'i' ||
//   letra === 'o' ||
//   letra === 'u') {
//     alert('vogal');
// } else {
//     alert('consoante');
// }

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;

*/
// const diaSemana = parseInt(prompt('Digite o dia da semana [1-7]'));

// switch (diaSemana){

//     case 1:
//         alert(`Domingo`);
//         break;

//         case 2:
//         alert(`Segunda`);
//         break;

//         case 3:
//         alert(`Terça-feira`);
//         break;

//         case 4:
//         alert(`Quarta-feira`);
//         break;

//         case 5:
//         alert(`Quinta-feira`);
//         break;

//         case 6:
//         alert(`Sexta-feira`);
//         break;

//         case 7:
//         alert(`Sábado`);
//         break;

//         default:
//         alert(`Dia de São Nunca`);
// }

// console.log(diaSemana)


/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

// let numeroA = parseInt(prompt('Digite um número qualquer'));
// let numeroB = parseInt(prompt('Digite um número qualquer'));

// if(numeroA > numeroB){
//   alert("O número A é maior ")
// } else if( numeroA == numeroB){
//   alert("Vixe, esses números são iguais")
// }else{
//   alert(" O número B é maior")
// }





/*

  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  Se a media for igual ou maior que 7 - Aprovado
  Se a media for igual a cinco ou menor que 7 - Recuperação 
  Se a media for menor que 5 - Reprovado

  Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
  Alunos de recuperação devem ver a mensagem: Você está de recuperação!
  Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/


let primeiraNota = Number(prompt(`Digite sua primeira nota`));
let segundaNota = Number(prompt(`Digite sua segunda nota`));
let terceiraNota = Number(prompt(`Digite sua terceira nota`));


const somaNotas = (primeiraNota + segundaNota + terceiraNota) / 3

if (somaNotas >= 7) {
  alert("Aprovado")
} else if (somaNotas == 5 && somaNotas < 7) {
  alert("Recuperação")
} else {
  somaNotas < 5
  alert("Que pena, você foi reprovado.")

}
