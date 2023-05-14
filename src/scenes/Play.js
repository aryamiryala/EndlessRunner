class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload(){
        //load background image for play screen
        this.load.image('forest', './assets/forest1.png');
        this.load.image('ground', './assets/ground.png')
        this.load.image('rocket', './assets/rocket.png');
        //load jump audio 
        this.load.audio('jump','./assets/jump.wav');
        this.load.audio('explosion','./assets/explosion1.wav');
        
        this.load.spritesheet('player', './assets/playersprite1.png', {frameHeight: 63, frameWidth: 125});
        this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});

        //this.load.atlas('player', './assets/playersprite1.png', './assets/playersprite.json');
       

    }
    create(){

      //game over flag
        this.gameOver = false; 


        //initalize player score and 
        this.playerScore = 0;
    

        
        


         //add background image
         this.forest = this.add.tileSprite(0, 0, 640, 480, 'forest').setOrigin(0,0);
         this.jumpAudio = this.sound.add('jump', {volume: 0.5});
         this.explodeAudio = this.sound.add('explosion', {volume: 0.5});

         this.scoreText = this.add.text(30, 50, 'Score: ', {
          fontSize: '30px',
          fill: '#ffffff',
          fontFamily: '"Georgia"',
          strokeThickness: 10,
          stroke: 'black',
        });

        let scoreConfig = {
          fontSize: '30px',
          fill: '#ffffff',
          fontFamily: '"Georgia"',
          strokeThickness: 5,
          stroke: 'black',

        };



        this.timer = this.time.addEvent({delay: 1000, callback: this.updateScore, callbackScope: this, loop: true });
        this.scoreValue = this.add.text(140, 50, this.playerScore, scoreConfig);

       
        this.ground = this.physics.add.staticImage(200, 450, 'ground').setScale(2).refreshBody();

        

        this.createAnimations('run', 'player', 0, 10, -1, 18);
        this.createAnimations('jump', 'player', 4, 4, -1, 18);
       
         
        this.player = this.physics.add.sprite(90, 560, 'player').setBounce(0.1).setCollideWorldBounds(true);
        this.player.play('run');
        this.player.destroyed = false; 



       
       this.physics.add.collider(this.player, this.ground);

       this.rocket = new Rocket(this, game.config.width, borderUISize*9 + borderPadding*6, 'rocket').setScale(0.5);



       keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
       keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

   
    
    }

  
    update(){
       
       
       //check key input for restart button 
       if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)){
        this.scene.restart(); 
      
      }
      if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyLEFT)){
        this.scene.start("menuScene");
        
      }

        this.forest.tilePositionX += 3;
      


        if(this.gameOver == false){

          this.scoreValue.text = this.playerScore; 
      
          this.rocket.update(); 

            //if player jumps
            if (Phaser.Input.Keyboard.JustDown(keySpace) && this.player.body.onFloor()) {
           
          
              this.player.setVelocityY(-160);
              this.player.play('jump');  
              this.jumpAudio.play();
    
              
           }
           //check if player hits ground
           if(this.player.body.deltaY() > 0 && this.player.body.onFloor()){
            this.player.play('run');  
           }
           

        } //game over if done
       


         //check collisions
         if(this.checkCollision(this.player, this.rocket)){
          this.rocket.reset(); 
          this.rocketExplode(this.rocket);
          this.gameOver = true; 
      
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

     //rocket, ship
      checkCollision(player, rocket) {
         //simple AABB checking 
        if(player.x < rocket.x + rocket.width && player.x + 5 > rocket.x && player.y < rocket.y + 70 && 40 + player.y > rocket.y){
            return true;
        }
        else{
            return false; 
        }

    }

    rocketExplode(rocket){
      const emitter = this.add.particles(400, 250, 'explosion', {
          lifespan: 4000,
          speed: { min: 150, max: 250 },
          scale: { start: 0.8, end: 0 },
          gravityX: rocket.x,
          gravityY: rocket.y,
          blendMode: 'ADD',
          emitting: false
      });
      //temporarily hide ship 
      rocket.alpha = 0; 
      //create explosion
      emitter.explode(16);
      
      rocket.reset(); //reset position of ship
      rocket.alpha = 1;  //make ship visible

      this.explodeAudio.play(); 

      

      //this.gameOver = true; 
   
    
    }
    updateScore(){

      let scoreConfig = {
        fontSize: '30px',
        fill: '#ffffff',
        fontFamily: '"Georgia"',
        strokeThickness: 5,
        stroke: 'black',

      };



      if(this.gameOver == true){
        
      
        this.add.text(game.config.width/2, game.config.height/2, 'GAME OVER', scoreConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + 34, 'Your score was ' + this.playerScore, scoreConfig).setOrigin(0.5);

        this.add.text(game.config.width/2, game.config.height/2 + 64, 'Press (R) to Restart or ← to Menu', scoreConfig).setOrigin(0.5);
        if(this.player.body.onFloor()){
          this.player.play('run');  
         }
      }
      else{ //game not over
        this.playerScore++;
      }
    
    
    }
  }


   


   
    
  

