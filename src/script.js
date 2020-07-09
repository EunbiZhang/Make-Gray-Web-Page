var image = null;
var gray_image = null;

function textupload(){
  var ftext = document.getElementById("tinput");
  alert(ftext.value);
}

function upload(){
  var fileinput = document.getElementById("finput");
  image = new SimpleImage(fileinput);
  gray_image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can1");
  canvas.style.backgroundColor="pink";
  image.drawTo(canvas);
  alert("Uploaded successfully!");
}

function makeGray(){
  for(var pixel of gray_image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  
  var imgcanvas = document.getElementById("can2");
  gray_image.drawTo(imgcanvas);
}