/*

A programming technique that I was proud of that I implemented in this game is the animation aspect of my sprite. 
Although I didn't use a texture atlas and I used a spritesheet I made a animation function that shows my sprite
running and jumping. This was something I experimented with for a good amount of time and I am glad I got it working. 
To get my questions answered I got a lot of help from the Phaser discord server and they helped me in getting the 
animations to work. 

Some art that I was proud of was the rocket and dog that I had in my game. I used pixilart to make my assets and am
proud of what I came up with. 


*/


let config = {
    type: Phaser.CANVAS, 
    width: 640, 
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 100 },
          debug: false
          
        }

    },
    scene: [Title, Menu, Instruction, Play, Credit]
}

let game = new Phaser.Game(config);

//reserve keyboard vars
let keySpace, keyEnter, keyC, keyI, keyRIGHT, keyLEFT, keyR; 

//set UI sizes
let borderUISize = game.config.height / 15; 
let borderPadding = borderUISize / 3; 

 