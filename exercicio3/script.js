let soma = (num1, num2) => {  
    return num1 + num2
    }
    
    console.log(soma(20,6))

let subtracao = (num1, num2) => {  
        return num1 - num2
        }
        
console.log(subtracao(20,6))

let multiplicacao = (num1, num2) => {  
    
    return num1 * num2
            }
            
console.log(multiplicacao(20,6))

let divisao =  (num1, num2) => {  

    return num1 / num2
   }
   console.log(divisao(20,6))

let num1 = +prompt("Digite um número")
let num2 = +prompt("Digite outro número")

console.log("Soma:", soma(num1,num2), "Subtração:", subtracao(num1,num2), "Multiplicação:", multiplicacao(num1,num2), "Divisão:", divisao(num1,num2))