image="";
status="";
objects=[];

function preload()
{
img=loadImage("cars.jpg");
}
function setup()
 { canvas = createCanvas(640, 350);
     canvas.center();
     objectdetector=ml5.objectDetector('cocossd',modelLoaded);
     document.getElementById("status").innerHTML="status:detecting objects";
 }
 function modelLoaded()
  { console.log("Model Loaded!");
  status=true;
  objectdetector.detect(img,gotresult);
}
function gotresult(error, results)
 {
      if (error) { console.log(error);
 }
  console.log(results);
  objects = results;
 }
 function draw()
 {
     image(img,0,0,640,350);
if(status!="")
{
    for(i=0;i<objects.length;i++)
    {
        document.getElementById("status").innerHTML="status:object detected";
        fill("#FF0000");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");  
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);  
          
    }
}
 }