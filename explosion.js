  function Explosion(x_,y_){
    this.age=random(10,50);
    this.fragments = [];
    this.clr=[random(255),random(255),random(255)];
    this.x = x_;
    this.y = y_;
      
    for (let i=0; i<100; i++){
    var p = new Particle(this.x, this.y);
    p.vel=createVector(random(-5,5), random(-10,1));
    this.fragments.push(p);
    }
    
    this.update = function(){  
        for (let i=0; i<this.fragments.length; i++){
            this.fragments[i].update();
        } 
        this.age -= 1;
    }
    
    this.show = function(){  
        stroke(this.clr);
        for (let i=0; i<this.fragments.length; i++){
            this.fragments[i].show();
            this.fragments[i].show();
        }
    }
  }