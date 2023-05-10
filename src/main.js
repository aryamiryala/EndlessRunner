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
    scene: [Title, Menu, Instruction, Play]
}

let game = new Phaser.Game(config);

//reserve keyboard vars
let keySpace, keyEnter, keyC, keyI, keyRIGHT, keyLEFT; 

//set UI sizes
let borderUISize = game.config.height / 15; 
let borderPadding = borderUISize / 3; 