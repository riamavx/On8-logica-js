// if / else if / else
// Sintaxe
//if (condição) afirmação1 [else afirmação2]

if (cipher_char === from_char) {
    result = result + to_char;
    x++;
 } else {
    result = result + clear_char;
 }


 if (x > 5) {

} else if (x > 50) {

} else {

}


// Switch

//A condicional switch avalia uma expressão,
// combinando o valor da expressão para um cláusula case, e executa as instruções  associadas ao case.

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
