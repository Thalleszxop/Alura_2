function mostrarCampoIdade() {
    document.getElementById("botao-inicio").style.display = "none";
    document.getElementById("bloco-idade").style.display = "block";
  }
  
  function iniciarJogo() {
    let idade = document.getElementById("input-idade").value;
    let mensagem = document.getElementById("mensagem");
  
    if (idade === "") {
      mensagem.textContent = "Digite sua idade.";
      mensagem.style.color = "yellow";
      return;
    }
  
    idade = parseInt(idade);
  
    if (idade < 18) {
      mensagem.textContent = "Proibido menores para tais atos.";
      mensagem.style.color = "red";
      return;
    }
  
    if (idade >= 90) {
      mensagem.textContent = "Tá de sacanagem, né? Você não pode cometer tais atos!";
      mensagem.style.color = "orange";
      return;
    }
  
    document.getElementById("botoes-jogo").style.display = "block";
    mensagem.textContent = "Idade verificada. Escolha sua jogada!";
    mensagem.style.color = "white";
  }
  
  function jogar(playerChoice) {
    // Gera escolha aleatória do computador (1 a 3)
    let computerChoice = Math.floor(Math.random() * 3) + 1;
  
    // Elementos da tela
    let mensagem = document.getElementById("mensagem");
    let compEscolha = document.getElementById("computador-escolha");
  
    // Dicionário para converter número em texto/emoji
    const opcoes = {
      1: "🪨 Pedra",
      2: "📄 Papel",
      3: "✂️ Tesoura"
    };
  
    // Mostra o que o computador escolheu
    compEscolha.textContent = "O computador escolheu: " + opcoes[computerChoice];
  
    // Verifica o resultado do jogo
    if (playerChoice == computerChoice)
    {
      mensagem.textContent = "Empate!";
      mensagem.style.color = "gray";
    } 
   
    else if 
    (
      (playerChoice == 1 && computerChoice == 3) ||
      (playerChoice == 2 && computerChoice == 1) ||
      (playerChoice == 3 && computerChoice == 2)
    ) 
    
    {
      mensagem.textContent = "Você ganhou!";
      mensagem.style.color = "lime";
      //Som muito BOM!! YEPIIIII
      document.getElementById("som-vitoria").play()
    }
    
    else 
    {
      mensagem.textContent = "Você perdeu!";
      mensagem.style.color = "red";
    }
  
}
  
  






































/*
playerChoice = prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura")
computerChoice = Math.floor(Math.random() * 3) + 1;
if ((playerChoice == 1 && computerChoice == 3) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 3 && computerChoice == 2))     
    {
        alert ("Você ganhou!")
    }    
 else 
 {
    alert ("Você perdeu!")
 }   




    /*if (idade >= 18 && idade < 89)
{
  playerChoice = prompt("Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura")
  computerChoice = Math.floor(Math.random() * 3) + 1;

  if (playerChoice == computerChoice)
  {
    alert ("Empate!")
  }
 alert ("A escolha do seu adversário foi: " + computerChoice)
if (playerChoice == 1 && computerChoice == 2)
{
    Rock.style.background = "https://img.freepik.com/premium-vector/pixel-art-rock-pile-detailed-8-bit-illustration-grey-stones_1292377-12348.jpg"
}
if (playerChoice == 1 && computerChoice == 3)
{
    alert("Pedra quebrou a tesoura! \nVocê ganhou!")
}
if (playerChoice == 2 && computerChoice == 1)
{
    alert("Papel engoliu e deglutinou a pedra! \nVocê ganhou!")
}
if (playerChoice == 2 && computerChoice == 3)
{
    alert("Tesoura cortou o papel! \nVocê perdeu!")
}
if (playerChoice == 3 && computerChoice == 1)
{
    alert("Pedra quebrou a tesoura! \nVocê perdeu!")
}
if (playerChoice == 3 && computerChoice == 2)
{
    alert("Tesoura cortou o papel! \nVocê ganhou!")
}
if (computerChoice == 1 && playerChoice == 2)
{
    alert("Papel engoliu e deglutinou a pedra! \nVocê perdeu!")
}
if (computerChoice == 1 && playerChoice == 3)
{
    alert("Pedra quebrou a tesoura! \nVocê ganhou!")
}
if (computerChoice == 2 && playerChoice == 1)
{
    alert("Papel engoliu e deglutinou a pedra! \nVocê ganhou!")
}
      
if (computerChoice == 3 && playerChoice == 2)
{
    alert("Tesoura cortou o papel! \nVocê ganhou!")
}
} */