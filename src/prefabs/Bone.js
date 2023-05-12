//bone prefab
class Bone extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //add object to existing scene
        scene.add.existing(this);
        //pixels per frame
       
       //this.moveSpeed = speed; 
    }

    update() {
        //move spaceship left
        //console.log(this.x);
        this.x -= 5; 
        //console.log(this.x);
        //wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
             //this.x = game.config.width; 
            //randomize spawn/direction 
            //this.x = Math.floor(Phaser.Math.Between(500, game.config.width));
            this.x = Math.floor(Math.random()* game.config.width);
        
        }

       

    }

    //position reset
    reset() {
        //this.x = Math.floor(Math.random()); 
        this.x = game.config.width; 

    }
}