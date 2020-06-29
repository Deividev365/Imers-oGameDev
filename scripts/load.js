
function preload(){
    imagemCenario = loadImage('./assets/cenario/sunsetGif.gif'); 
    imagemPersonagem = loadImage('./assets/personagem/correndo.png');
    imagemInimigo = loadImage('./assets/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('./assets/inimigos/troll.png');  
    imagemInimigoVoador = loadImage('./assets/inimigos/gotinha-voadora.png')
    imagemGameOver = loadImage('./assets/gameOver/gameOver.png');
    imagemTelaInicial = loadImage('./assets/cenario/telaInicial.jpg');
    imagemVida = loadImage('./assets/cenario/heart.png'); 
    fonteTelaInicial = loadFont('./assets/cenario/fonteTelaInicial.otf');
    
    //  fita = loadJson = ('fita/fita.json');
    
    somDoJogo = loadSound('./assets/sons/bckGroundSong.mp3');
    somMiddleGame = loadSound('./assets/sons/middleSong.mp3');
    somDoPulo = loadSound('./assets/sons/somPulo.mp3');
    somMorreu = loadSound('./assets/sons/somMorreu.mp3');
  
  }