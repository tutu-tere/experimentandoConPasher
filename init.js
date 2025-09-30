const config = {
    title: "Hola Phaser",
    type: Phaser.AUTO,
    parent: "contenedor",
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update,
    },
    physics: {
        default: 'arcade',
        arcade: {     
            gravity: { y: 500 },
            debug: false
}
    }
};

 var game = new Phaser.Game(config);

function preload (){
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('fondo', 'assets/skies/nebula.jpg');
    this.load.image('planeta', 'assets/sprites/phaser1.png');
    this.load.image('particula', 'assets/particles/yellow.png');

};
function create (){
    this.add.image(400, 300, 'fondo');
mundo = this.physics.add.image(400, 250, 'planeta'); 

const particulas = this.add.particles(0, 0, 'particula', {
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD',
        follow: mundo // ← sigue al planeta
    });



console.log(mundo);
mundo.setAlpha(0.6);
mundo.setAngle(45);
mundo.setScale(0.7);
mundo.setFlipX(true);
mundo.setCollideWorldBounds(true);
mundo.setBounce(0.9);
mundo.setVelocity(500, 500);

};
function update(time, delta){
   mundo.angle += 5;
 
}; 