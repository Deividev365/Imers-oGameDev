class Jogo {
    constructor() {
        this.indice = 0;
        // calculo a velocidade de cada personagem por aqui.
        this.mapa = [
          {
          inimigo: 0,
          velocidade: 20
          },
          {
          inimigo: 1,
          velocidade: 30
          },
          {
          inimigo: 1,
          velocidade: 10
          },
          {
          inimigo: 2,
          velocidade: 40
          },
      ]
    }
  
    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3)
      
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
      
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 83, 52, 52, 104, 104, 10);
      
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 52, 52, 200, 150, 10);
      
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
      
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);     
    }

    keyPressed(key) {
        if(key === 'ArrowUp') {
            personagem.pula();
            somDoPulo.play();
      }
    }

    draw() {
        cenario.exibe();
        cenario.move();
      
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
      
        personagem.exibe();
        personagem.aplicaGravidade();
        const linhaAtual = this.mapa[this.indice]
      
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura
        inimigo.velocidade = linhaAtual.velocidade

      
          inimigo.exibe();
          inimigo.move();
      
          
          if(inimigoVisivel) {
            this.indice++
            inimigo.aparece()
            if( this.indice > this.mapa.length - 1) {
                this.indice = 0;
      
            }
          }
      
          if(personagem.estaColidindo(inimigo)) {
            somDoJogo.stop();
            vida.perdeVida()
            personagem.tornarInvencivel()

            if(vida.vidas === 0) {
              image(imagemGameOver, 0, 0, width, height)
              somMorreu.play();
              noLoop();
            }
       } 
    }
}