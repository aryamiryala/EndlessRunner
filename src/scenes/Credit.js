class Credit extends Phaser.Scene {
    constructor(){
        super("creditScene");
    }
    create(){
        this.background= this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0);
        
        let creditConfig = {
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
            fontSize: '15px', 
            backgroundColor: 'transparent',
            color: 'orange',
            align: 'center',
            padding: {
                top: 5, 
                bottom: 5,
            },
            fixedWidth: 0
        };
        const mssg = 
        `Developed by: Arya Miryala 
       
        Built with: Phaser 3, Javascript 

        Assets: Dog sprite: https://www.pngwing.com/en/free-png-zipyq
                Title Screen: https://www.vecteezy.com/vector-art/4277175-forest-game-background
                Music: https://www.chosic.com/free-music/games/
                Art made on https://www.pixilart.com/draw?ref=home-page

        Modified art found on internet to fit game. 

        `;
        this.add.text(game.config.width/2, game.config.height/7 - borderUISize - borderPadding, 'Credits', creditConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 200, mssg , mssgConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, 300, 'Click <- to go back to menu' , creditConfig).setOrigin(0.5);

        

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