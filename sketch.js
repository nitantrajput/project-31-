const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var j = 40;j <= width; j = j + 50){
        plinkos.push(new Plinko(j,75));
    }
    for(var j = 15; j <= width - 10;j = j + 50){
        plinkos.push(newPlinko(j,175));
    }
    if(frameCount%60 === 0){
        particles.push(newParticle(random(width/2 - 10 , width/2 + 10), 10,10))
    }
    for(var p = 0; p < particles.length; p++){
        particles[p].display();
    }
    for(var d = 0; d < divisions.length; d++){
        divisions[d].display();
    }
    for(var pl = 0; pl < plinkos.length; pl++){
        plinkos[pl].display();
    }
}