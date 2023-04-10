// GLOBAL
var c,ctx,vRain;

//Rain 
class Rain{
    // coordinate + lunghezza + velocita
        constructor(x,y,l,v){
            this.x=x;
            this.y=y;
            this.vy=v;
            this.l=l;
        }
        show() { //Design
            ctx.beginPath();
            ctx.strokeStyle="white";
            ctx.moveTo(this.x, this.y); //initalize goccia
            ctx.lineTo(this.x,this.y+this.l); //fine goccia
            ctx.stroke();
        }
        // insertiamo la gravita Gravity
        fall(){
            this.y+=this.vy;

            // se la goccia tocca terra
            // la riceriamo
            if(this.y>c.height) {
                this.x=Math.floor(Math.random()*c.width)+5;
                this.y=Math.floor(Math.random()*100)-100; // da 0 a 99 -100, hanno tutte altezze diverse;
                this.l=Math.floor(Math.random()*30)+1; //da 1 a 30
                this.vy=Math.floor(Math.random()*12)+4; //da 1 a 30
            }
        }
    }

//Loop
function loop() {
    ctx.clearRect(0,0,c.width,c.height);
    for (var i=0;i<vRain.length;i++){
        vRain[i].show();
        vRain[i].fall();
    }


    // rain.show();
    // rain.fall();
}

// SETUP
function setup () {
    c = document.getElementById("canvas");
    ctx= c.getContext("2d");
    //rain = new Rain(10,10,20,6);

    vRain = [];
    for(var i=0;i<60;i++){
        vRain[i] = new Rain(
            Math.floor(Math.random()*c.width)+5,
            Math.floor(Math.random()*100)-100, // da 0 a 99 -100, hanno tutte altezze diverse;
            Math.floor(Math.random()*30)+1, //da 1 a 30
            Math.floor(Math.random()*12)+4, //da 1 a 30
        ); // Rain
    }
    setInterval(loop,10);
}