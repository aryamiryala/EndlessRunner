class Instruction extends Phaser.Scene {
    constructor(){
        super("instructionScene");
    }
    create(){
        this.background= this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0);
        
        let instructionConfig = {
            fontFamily: 'Georgia', 
            fontSize: '25px', 
            backgroundColor: 'transparent',
            color: 'pink',
            align: 'right',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0
        };

        let mssgConfig = {
            fontFamily: 'Georgia', 
            fontSize: '16px', 
            backgroundColor: 'transparent',
            color: 'orange',
            align: 'center',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0
        };
        const mssg = `"Forest Run" is a simple 2D game about a dog trying to escape a forest with rockets. 
       
        Your goal in the game is to survive as long as possible without getting hit by a rocket. 
        If hit by a rocket the game ends. 

        Use the space bar to jump. Good Luck!!
        `;
        this.add.text(game.config.width/2, game.config.height/7 - borderUISize - borderPadding, 'Instructions', instructionConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 200, mssg , mssgConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 300, 'Click <- to go back to menu' , instructionConfig).setOrigin(0.5);

        

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

        

    }
    update(){

        this.background.tilePositionX -= 2;
        
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
           
            // this.sound.play('sfx_select');
              this.scene.start("menuScene");    
        }
    }

}