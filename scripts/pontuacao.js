class Pontuacao{
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill('#1C1B1B')
        textSize(50)
        text(parseInt(this.pontos), width - 30, 50)
    }

    adicionarPonto() {
        this.pontos = this.pontos + 0.2
        
        if(this.pontos > 500) {
            somDoJogo.stop();
            somMiddleGame.play();
        }
        
    }
}

