let nSlider;
let particles = [];
noiseSeed(20)
function createParticles() {
  for (let c = 0; c < 100; c++) {
    particles.push({
      x: random(width),
      y: random(height),
    })
  }
}

// noise coloring
function setup() {
  createCanvas(windowWidth, windowHeight);

  nSlider = createSlider(1, 200, 1, 10);
  nSlider.position(600, 100);
  createParticles(); // Corrected function call
  background(0);
}


let gridSize = 15;

function draw() {

  stroke(255);
  strokeWeight(1);

  // stroke(255, 200, 200);
  // noStroke();
  let nscale = nSlider.value();

  // close particles will move in a similar way
  for (let pi = 0; pi < particles.length; pi++) {
    let p = particles[pi];
    point(p.x, p.y);
    let nx = noise(p.x / nscale, p.y / nscale);
    let ny = noise(p.x / nscale, p.y / nscale);
    let vx = map(nx, 0, 1, -4, 1);
    let vy = map(ny, 0, 1, -3, 3);

    p.x += vx;
    p.y += vy;

    if (p.x < 0 || p.x > width || p.y > height || p.y < 0) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

