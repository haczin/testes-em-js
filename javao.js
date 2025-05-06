const nome= prompt("Digite seu nome, por favor");

alert("Olá " + nome + ", seja bem-vindo(a) ao nosso site!");
while (true) {
    var idade = prompt("Digite sua idade, por favor");
    if (isNaN(idade) ){
        alert("Idade inválida. Por favor, digite um número positivo.");
        
     } else{ 
        idade = parseInt(idade);
        break ; 
    
    } 
 }
    if (idade < 18) { 
        
    
        document.body.innerHTML = "<h1>Você é menor de idade!</h1>";
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.body.style.fontSize = "20px";
        document.body.style.textAlign = "center";
    } else {
        var escolha = prompt("Digite 1 para ser pedra, 2 para ser papel ou 3 para ser tesoura");
        var computador = Math.floor(Math.random() * 3) + 1;
        if (escolha == computador) {
            alert("Empate! Você e o computador escolheram a mesma opção.");

         } else if (
            (escolha == 1 && computador == 3) ||
            (escolha == 2 && computador == 1) ||
            (escolha == 3 && computador == 2)
        ) {
            alert(`${nome}, você ganhou!`);

        } else {
            alert(`${nome}, você perdeu!`);
        }
         }
        
    

    
