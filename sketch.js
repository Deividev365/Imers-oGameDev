
  function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop (); // change it after finish to 'loop()'
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Start', width /2, height /2);

}
// evento no teclado
  function keyPressed() {
    jogo.keyPressed(key);
}

 function draw() {
 cenas[cenaAtual].draw()
}



