let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload(){
  imagemCenario = loadImage('./assets/cenario/forest.jpg'); 
  imagemPersonagem = loadImage('./assets/personagem/correndo.png');  
  somDoJogo = loadSound('./assets/sons/bckGroundSong.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  somDoJogo.loop();

}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}


