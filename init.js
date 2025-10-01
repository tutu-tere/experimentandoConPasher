const config = {
    title: "Hola Phaser",
    scale: {
        mode: Phaser.Scale.FIT, // Le estamos diciendo que se ajuste automaticamente al alto y ancho del lienzo manteniendo su aspecto.
        autoCenter: Phaser.Scale.CENTER_BOTH, // Centramos el lienzo en la pantalla.
        type: Phaser.AUTO,
        parent: "contenedor",
        width: 800,
        height: 600,
    },
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
    

    this.load.image('fondo', 'https://labs.phaser.io/assets/skies/nebula.jpg');
    this.load.image('planeta', 'https://labs.phaser.io/assets/sprites/phaser1.png');
    this.load.image('particula', 'https://labs.phaser.io/assets/particles/yellow.png');
    this.load.image('raqueta', './Assets/raqueta.png');
    this.load.audio('sonido', './Assets/audio.mp3');

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

    raqueta = this.physics.add.image(300, 400, 'raqueta');
    raqueta.setAlpha(0.5);


console.log(mundo);
mundo.setAlpha(0.6);
mundo.setAngle(45);
mundo.setScale(0.7);
mundo.setFlipX(true);
mundo.setCollideWorldBounds(true);
mundo.setBounce(0.9);
mundo.setVelocity(500, 500);
const Texto= this.add.text(300,550,"Hola mundo",{
    color: 'green',
    fontSize: 20,
    backgroundColor: 'white',
    padding: {
        top:15,
        bottom:15,
        left:15,
        right:15,
    },
    align: 'center',
})
Texto.setAlpha(0.2);

};
function update(time, delta){
   mundo.angle += 5;
 
}; 