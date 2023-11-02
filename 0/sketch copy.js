let nSlider;

// noise上色
function setup() {
  createCanvas(500, 500);

  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(600, 100);
}

let gridSize = 3;

function draw() {
  background(0);

  // stroke(255, 200, 200);
  noStroke()
  let nscale = nSlider.value();

  for (let y = 0; y < height; y += gridSize){
    let rc = floor(random(0, 255));
    for (let x = 0; x < width; x += gridSize){
      fill(255);
      let fc = 255 * noise(x / nscale, y/nscale, frameCount / nscale);
      let aColor;
      if(fc > 200){
        aColor = "forestgreen";
      } else if (fc > 150){
        aColor = "sandybrown";
      } else if (fc > 120){
        aColor = "brown"
      } else {
        aColor = "mediumblue"
      }
      fill(aColor);
      rect(x, y, gridSize, gridSize);
    }
  }

}
