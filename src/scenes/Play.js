class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload(){
        //load background image for play screen
        this.load.image('forest', './assets/forest1.png');
        this.load.image('ground', './assets/ground.png')
        this.load.image('bone', './assets/bone.png');
        this.load.image('rocket', './assets/rocket.png');
        //load jump audio 
        this.load.audio('jump','./assets/jump.wav');
        this.load.spritesheet('player', './assets/playersprite1.png', {frameHeight: 63, frameWidth: 125});
        

        //this.load.atlas('player', './assets/playersprite1.png', './assets/playersprite.json');
       

    }
    create(){
         //add background image
         this.forest = this.add.tileSprite(0, 0, 640, 480, 'forest').setOrigin(0,0);
         this.jumpAudio = this.sound.add('jump', {volume: 0.5});
        

       
        this.ground = this.physics.add.staticImage(200, 450, 'ground').setScale(2).refreshBody();

        

        this.createAnimations('run', 'player', 0, 10, -1, 18);
        this.createAnimations('jump', 'player', 4, 4, -1, 18);
       
         
        this.player = this.physics.add.sprite(90, 560, 'player').setBounce(0.2).setCollideWorldBounds(true);
        this.player.play('run');



       
       this.physics.add.collider(this.player, this.ground);

       //Bone
       
       this.bone1 = new Bone(this, game.config.width, borderUISize*12 + borderPadding*6, 'bone').setScale(0.12);
       this.bone2 = new Bone(this, game.config.width, borderUISize*9 + borderPadding*7, 'bone').setScale(0.12);
       this.bone3 = new Bone(this, game.config.width, borderUISize*7 + borderPadding*9, 'bone').setScale(0.12);
       
       this.rocket1 = new Rocket(this, game.config.width, borderUISize*9 + borderPadding*6, 'rocket').setScale(0.7);
       //this.rocket2 = new Bone(this, game.config.width, borderUISize*12 + borderPadding*8, 'rocket').setScale(0.7);


       keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);



        

    }
    update(){
        this.forest.tilePositionX += 3; 

        this.bone1.update(); 
        this.bone2.update(); 
        this.bone3.update(); 

        this.rocket1.update(); 
        //this.rocket2.update(); 


       



        
       
        //if player jumps
        if (Phaser.Input.Keyboard.JustDown(keySpace) && this.player.body.onFloor()) {
           
            // this.sound.play('sfx_select');
              this.player.setVelocityY(-160);
              this.player.play('jump');  
              this.jumpAudio.play();
    
              
           }
           //check if player hits ground
           if(this.player.body.deltaY() > 0 && this.player.body.onFloor()){
            this.player.play('run');  
           }
           
          
        
    }

    //animation function
    createAnimations(animKey, spriteKey, startFrame, endFrame, loopTimes, frameRate) {
        return (this.anims.create({
          key: animKey,
          frames: this.anims.generateFrameNumbers(spriteKey, { start: startFrame, end: endFrame }),
          frameRate,
          repeat: loopTimes,
        }));
      }
    
    
  

}