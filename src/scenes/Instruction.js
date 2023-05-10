class Instruction extends Phaser.Scene {
    constructor(){
        super("instructionScene");
    }
    create(){
        this.background= this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0);
        
        let instructionConfig = {
            fontFamily: 'Georgia', 
            fontSize: '28px', 
            backgroundColor: 'transparent',
            color: 'pink',
            align: 'right',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0
        };
        this.add.text(game.config.width/2, game.config.height/7 - borderUISize - borderPadding, 'Instructions', instructionConfig).setOrigin(0.5);

        

    }

}