  var bird;
  var bird2;
  var bird3;
  var pipes = []


  function setup() {
    createCanvas(640, 480  );
    bird = new Bird(100);
    bird2 = new Bird(20);
    bird3 = new Bird(60);
    pipes.push(new Pipe());
  }


  function draw() {
    background(0);


    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();


      if (pipes[i].hits(bird)) {
        console.log('HIT');
      }


      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    bird.update();
    bird.show();
    bird2.update();
    bird2.show();
    bird3.update();
    bird3.show();

    if (frameCount % 75 == 0) {
      pipes.push(new Pipe());
    }
  }


  function keyPressed() {
    if (key == ' ') {
      bird.up();  
      //console.log("SPACE");
    } if (key == 'w') {
        bird2.up();
      }
    if (key == 'y') {
      bird3.up();
    }
  }