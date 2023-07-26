const prompt = require("prompt-sync")();

function Exercicio1(){
    console.log("Hello World");
}

//Exercicio1();

function Exercicio2(){
    const nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`)
}
//Exercicio2();

function Exercicio3(){
    const num1 = parseInt(prompt("Informe o primeiro número: "));
    const num2 = parseInt(prompt("Informe o segundo número: "));

    console.log(`A média dos números informados é ${(num1 + num2)/2}`);
}
//Exercicio3();

function Exercicio4(){
    const idade = prompt("Informe a idade: ");

    if (idade>= 18){
        console.log("Maior de Idade");
    } else{
        console.log("Menor de Idade")
    }
}
//Exercicio4();

function Exercicio5(){
    const num = prompt("Informe um numero: ");

    if(num%2===0){
        console.log("Informe é par");
    }else{
        console.log("Informe é impar");
    }
}

//Exercicio5();

function Exercicio6(){
    let media = 0;

    for(let i=0; i<3; i++){
        media += parseInt(prompt(`Informe o ${i+1}º num: `));
    }
    console.log(`A média nos 3 numers informados é: ${media/3}`);
}
//Exercicio6();

function Exercicio7(){
    for(let i=1; i<11; i++){
        console.log(`${i}`);
    }
}
//Exercicio7();

function Exercicio8(){
    for(let i=1; i<=20; i++){
        if(i%2===0){
            console.log(`${i}`);
        }
        
    }    
}
//Exercicio8();
function verificaPrimo(valor){
    for(let i=2; i<valor; i++){
        if(valor%i===0){
            return false;
        }
    }
    return true;
}

function Exercicio9(){
    const num= prompt("Informe um num: ");

    if (verificaPrimo(num)){
        console.log(`O número ${num} é primo!`);
    } else{
        console.log(`O número ${num} NÃO é primo!`);    
    }

}

Exercicio9();