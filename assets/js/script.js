// script.js

// Seleciona o canvas e define o contexto 2D
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Ajusta o canvas para cobrir toda a viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Conjunto de caracteres que serão exibidos
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
// Define o tamanho da fonte
const fontSize = 16;
// Calcula a quantidade de colunas com base na largura do canvas e no tamanho da fonte
const columns = Math.floor(canvas.width / fontSize);

// Cria um array que controla a posição vertical de cada coluna (inicializado com zeros)
const drops = Array(columns).fill(0);

// Função que desenha os caracteres e atualiza a posição de cada "drop"
function draw() {
  // Cria o efeito de desvanecimento com um retângulo semitransparente
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Define o estilo dos caracteres (cor verde e fonte monoespaçada)
  ctx.fillStyle = "#0F0"; 
  ctx.font = fontSize + "px monospace";
  
  // Itera sobre cada coluna
  for (let i = 0; i < drops.length; i++) {
    // Seleciona um caractere aleatório
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    // Desenha o caractere na posição correspondente à coluna
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    
    // Se o caractere sair da tela, reinicia a coluna com base em uma condição aleatória
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    
    // Atualiza a posição do caractere para a próxima iteração
    drops[i]++;
  }
}

// Chama a função draw a cada 33 milissegundos (~30 FPS)
setInterval(draw, 33);

// Atualiza o tamanho do canvas quando a janela for redimensionada
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
