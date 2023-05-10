class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload(){
        //load background image for play screen
        this.load.image('forest', './assets/forest1.png');
        this.load.image('ground', './assets/ground.png')
        this.load.spritesheet('player', './assets/playersprite1.png', {frameHeight: 63, frameWidth: 125});
        //this.load.atlas('player', './assets/playersprite1.png', './assets/playersprite.json');
       

    }
    create(){
         //add background image
         this.forest = this.add.tileSprite(0, 0, 640, 480, 'forest').setOrigin(0,0);
         //this.player = this.physics.add.sprite(200, 200, 'player'); 

        //  const ground = this.physics.add.staticGroup();

        //  ground.create(200, 390, 'ground').setScale(2).refreshBody();
         this.ground = this.physics.add.staticImage(200, 450, 'ground').setScale(2).refreshBody();

        

        this.createAnimations('run', 'player', 0, 10, -1, 10);
        this.createAnimations('jump', 'player', 4, 4, -1, 10);
         
        this.player = this.physics.add.sprite(90, 560, 'player').setBounce(0.2).setCollideWorldBounds(true);
        this.player.play('run');

       //this.player.setVelocityY(0);

       this.physics.add.collider(this.player, this.ground);



       keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        
    //    this.add.sprite(200, 200).play('run');

    }
    update(){
        this.forest.tilePositionX += 2; 
       

        if (Phaser.Input.Keyboard.JustDown(keySpace) && this.player.body.onFloor()) {
           
            // this.sound.play('sfx_select');
              this.player.setVelocityY(-160);
              this.player.play('jump');  
              
           }
           if(this.player.body.deltaY() > 0 && this.player.body.onFloor()){
            this.player.play('run');  
          }
           //this.player.setVelocityY(0);
        
    }
    createAnimations(animKey, spriteKey, startFrame, endFrame, loopTimes, frameRate) {
        return (this.anims.create({
          key: animKey,
          frames: this.anims.generateFrameNumbers(spriteKey, { start: startFrame, end: endFrame }),
          frameRate,
          repeat: loopTimes,
        }));
      }
    
    
  

}