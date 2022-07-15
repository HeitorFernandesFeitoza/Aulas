var notas = [9,8,10];
function media()
{
  var media = (notas[0] + notas[1] +notas[2])/3;
  console.log(media);
}
function setup() 
{ 
  createCanvas(400,400);
  media();
}

function draw() 
{
background(51);

}

