var num_azar

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(0);
  if(mouseIsPressed)
  {
  num_azar = int(random(1,7))}
  
  else if(num_azar == 1)
  {
  ellipse(200,200,55,55)}
  
  else if(num_azar == 2)
  {
  ellipse(300,100,55,55);
  ellipse(100,300,55,55);}
  
  else if(num_azar == 3)
  {
  ellipse(300,100,55,55);
  ellipse(200,200,55,55);
  ellipse(100,300,55,55);}
  
  else if(num_azar == 4)
  {
  ellipse(100,100,55,55);
  ellipse(300,100,55,55);
  ellipse(100,300,55,55);
  ellipse(300,300,55,55);}
  
  else if(num_azar == 5)
  {
  ellipse(100,100,55,55);
  ellipse(300,100,55,55);
  ellipse(200,200,55,55);
  ellipse(100,300,55,55);
  ellipse(300,300,55,55);}
  
  else if(num_azar == 6)
  {
  ellipse(100,100,55,55);
  ellipse(300,100,55,55);
  ellipse(100,200,55,55);
  ellipse(300,200,55,55);
  ellipse(100,300,55,55);
  ellipse(300,300,55,55);}
}
