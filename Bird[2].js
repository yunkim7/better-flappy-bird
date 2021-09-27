function Bird(differentheight) {
  this.y = height / 2;
  this.x = differentheight;


  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;


  this.show = function() {
    fill(random(0,75),random(75,150),random(150,225));
    ellipse(this.x, this.y, random(20,50), random(20,50));
  };


  this.up = function() {
    this.velocity += this.lift;
  };


  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height-20;
      this.velocity = 0;
    }


    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
} 