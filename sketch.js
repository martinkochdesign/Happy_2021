var fireworks = [];
var explosions = [];

function setup() {
    createCanvas(600,400);
    noFill();
    stroke(255,255,0);
    strokeWeight(4);
    //explosions.push(new Explosion(width/2,height));
}

function draw() {
    background(30);
    colorMode(RGB);
    colorMode(RGB);
    noStroke();
    fill(155);
    textSize(10);
    text("M. A. Koch, PhD. 2020", width-115, height-8);

    stroke(60);
    noFill();
    textSize(width/3); 
    textAlign(CENTER,CENTER);
    text("2021", width/2, height/2);
    
    if (random(1)<0.1){
        fireworks.push(new Particle(random(width),height));
    }
    stroke(255,255,0);
    strokeWeight(4);
    for (let i=0; i<fireworks.length;i++){
        if(!fireworks[i].exploded){
        fireworks[i].update()

        fireworks[i].show();
        } else {
        explosions.push(new Explosion(fireworks[i].pos.x,fireworks[i].pos.y));
            fireworks.splice(i, 1);
        }
    }
      for (let i=0; i<explosions.length;i++){
        explosions[i].update();
        explosions[i].show();   
        if(explosions[i].age <= 0){
            explosions.splice(i, 1);
        }    
    }
    
    } 