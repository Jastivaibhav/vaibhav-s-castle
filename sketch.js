const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var log1,log2,log3,log4,log5,log6,log7,log8;



function setup(){
    var canvas = createCanvas(900,1200);
   
log1=createSprite(100,900,100,500);
log2=createSprite(800,900,100,500);
log3=createSprite(450,1200,900,100);
log4=createSprite(105,630,200,60);
log5=createSprite(795,630,200,60);
log6=createSprite(400,800,700,100);
log7=createSprite(450,500,100,500);
log8=createSprite(252,370,300,150);
log9=createSprite(400,1100,10,120);
log10=createSprite(500,1100,10,120);
log11=createSprite(450,1040,100,10);


log8.shapeColor="orange";
log7.shapeColor="brown";
log4.shapeColor="red";
log5.shapeColor="red";
log6.shapeColor="pink";
log3.shapeColor="yellow";
log1.shapeColor="green";
log2.shapeColor="green";
log9.shapeColor="black";
log10.shapeColor="black";
log11.shapeColor="black";





}

function draw(){
background("blue")


   
    log1.display();

 
   
    log2.display();

 
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();




}