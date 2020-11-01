function Particle(x,y){
    this.exploded = false;
    this.pos = createVector(x,y);
    this.vel = createVector(0, random(-8, -12));
    this.acc = createVector(0,0.2)

    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        
        if (this.vel.y >=0 ){
            this.exploded = true;
        }

    }
    
    this.show = function(){

        point(this.pos.x,this.pos.y);
    }
    
    
}

