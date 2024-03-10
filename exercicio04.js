
function menorNumero() {



    const elInput1 = document.getElementById('input1');
    const elInput2 = document.getElementById('input2');
    
    console.log(`O Menor número é: ${menorNumero}`);
    const elResultado = document.getElementById(`resultado`)
    
    const numeroUm = elInput1.value;
    const numeroDois = elInput2.value;
    
    if(numeroDois < numeroUm){
        elResultado.innerText = "Resultado é :" + " " +  numeroDois
        } else {
            elResultado.innerText = "Resultado é :" + " " + numeroUm
        }
    
    }
    
    