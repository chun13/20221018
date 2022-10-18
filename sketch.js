function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noFill()
  stroke(225)
  for(var j=-1;j<int(height/50);j++){
    for(var i=-1;i<int(width/50);i++)
    {
      stroke("#90e0ef")
      ellipse(25+(i*50),25+(j*50),30+mouseX/30)
      stroke("#ffd60a")
      rectMode(CENTER)
      rect(40+(i*50),40+(j*50),20+mouseX/30)
      stroke("#f28482")
      ellipse(15+(i*50),15+(j*50),30+mouseX/30)
    }
    
  }

}

