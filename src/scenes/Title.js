class Title extends Phaser.Scene {
    constructor(){
        super("titleScene");
    }
    preload(){
        //load background image for title screen
        this.load.image('background', './assets/background.png');
        this.load.audio('music', './assets/background.wav');


    }

    create(){
      
      //add background image
      this.background= this.add.tileSprite(0, 0, 640, 480, 'background').setOrigin(0,0);

       //add music, set volume, play it
       this.backgroundSong = this.sound.add('music', {volume: 0.4});   
       this.backgroundSong.loop = true; 
       this.backgroundSong.play();



        let titleConfig = {
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

        //show menu text
        this.add.text(game.config.width/2, game.config.height/7 - borderUISize - borderPadding, 'Forest Run', titleConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2.5, 'Press enter to continue to main menu', titleConfig).setOrigin(0.5);
        titleConfig.backgroundColor = 'transparent';
        titleConfig.color = 'yellow';
       // this.add.text(game.config.width/2, game.config.height/1.25, 'Press <- for Novice or -> for Expert', titleConfig).setOrigin(0.5);

        //define keys
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        

        
    }

    update() {

        this.background.tilePositionX -= 2; 
       
       
        if (Phaser.Input.Keyboard.JustDown(keyEnter)) {
           
           // this.sound.play('sfx_select');
             this.scene.start("menuScene");    
          }
          
          
    }
}
        


