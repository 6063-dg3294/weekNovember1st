function setup() {
  createCanvas(windowWidth, windowHeight);

  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(100, 100);
}

function draw() {
  background(0);

  stroke(255, 200, 200);
  let nscale = nSlider.value();

  for (let i = 0; i < width; i++){
    let y = noise(i/100) * height
    line(i, height/2, i, y);
  }

  let x = frameCount % width;
  let y = height * noise(x / nscale);
  fill (255);
  ellipse(x, y, 20, 20)
}
