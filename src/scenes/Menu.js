class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    // preload(){
    //     this.load.spritesheet('player', './assets/playersprite1.png', {frameHeight: 250, frameWidth: 250});
    // }
    
    create(){
        this.background= this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0);

        let menuConfig = {
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
        this.add.text(game.config.width/2, game.config.height/7 - borderUISize - borderPadding, 'Welcome to Forest Run!!', menuConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/4, 'Press I for instructions', menuConfig).setOrigin(0.5);
        menuConfig.color = 'orange';
        this.add.text(game.config.width/2, game.config.height/2.5, 'Press -> to start game', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.8, 'Press C for credits', menuConfig).setOrigin(0.5);

        //define keys
        keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);




    }
    update(){
        this.background.tilePositionX -= 2; 
        
        if (Phaser.Input.Keyboard.JustDown(keyI)) {
           
            // this.sound.play('sfx_select');
              this.scene.start("instructionScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
           
            // this.sound.play('sfx_select');
              this.scene.start("creditScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
           
            // this.sound.play('sfx_select');
              this.scene.start("playScene");    
        }
        


    }

}