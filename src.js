var container = document.getElementById('container');
var radiusOfMovement = 300;
var animationLength = 2500;
var color_palette = 1;
var numParticles=600;
const color_list=[['aliceBlue','pink', 'MediumOrchid','Moccasin','Orange','GoldenBlonde','DarkMagenta','CornYellow','MustardYellow','BrownSugar','LightCoral','Tomato','Burgundy'],
                  ['dimGray','lightBlue','CornflowerBlue','LightSkyBlue','Aqua','MediumAquaMarine','turquoise','powerBlue'],
                  ['BlanchedAlmond','yellow','DarkGoldenRod','DarkKhaki','DarkOrange','LemonChiffon','NavajoWhite','PaleGoldenRod','SandyBrown','Tan','Wheat','lightYellow'],
                  ['Cornsilk','Aquamarine','Chartreuse','DarkGreen','DarkOliveGreen','DarkSeaGreen','ForestGreen','green','greenYellow','LawnGreen','LightGreen','Lime','LimeGreen','MediumAquaMarine','MediumSeaGreen','MediumSPringGreen','PaleGreen','SeaGreen','SpringGreen','YellowGreen']]

class particle{
    constructor(tag, size, tpx, tpy){
        this.tag = tag;
        this.size = size;
        this.tpx = tpx;
        this.tpy = tpy;
    }

    set_values(color, rDelay){
        this.tag.style.height = this.size+'px';
        this.tag.style.width = this.size+'px';
        this.tag.style.background = color;
        this.tag.style.transform = 'translateX('+this.tpx+'px) translateY('+this.tpy+'px)';
        this.tag.style.animationDelay = rDelay+'ms';
        //this.tag.style.boxShadow = "10px ("+this.size+"*.2)px ("+this.size+"*.2)px rgba(0,0,0,.1);"
    }
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function initDivs(numDivs, colors){
    text = '';
    for(i=0;i<numDivs;i++){
        text += "<div id='circle"+ i+ "'></div>";
    }
    container.innerHTML = text;

    var particles = []

    var step = 7/numDivs;

    for(i = 0;i<numDivs;i++){
        s = Math.floor(Math.random() * 50 + 3);
        r = scale(s,3,49,radiusOfMovement,100);
        angle = i*step;
        tpx = Math.sin(angle) * r;
        tpy = Math.cos(angle) * r;
        tag = document.getElementById('circle'+i);
        var temp = new particle(tag,s,tpx,tpy);
        particles.push(temp);
        color_index = Math.floor(Math.random() * colors.length) + 1;
        rDelay = 1 * Math.floor(Math.random() * animationLength);
        temp.set_values(colors[color_index],rDelay);
    }

    return particles
}

function changePalette(palette){
    colors=[]

    if(palette!=0){
        colors = color_list[palette-1];
    }
    else{
        a = []
        for(k = 0;k<color_list.length;k++){
            a = a.concat(color_list[k]);
        }
        colors = a;
    }

    document.getElementById('container').style.background = colors[0];

    //iterate over all divs and set new random colours
    for(j=0;j<10;j++){
        for(i=0;i<numParticles;i++){
            color_index = Math.floor(Math.random() * colors.length) + 1;
            res[i].tag.style.background = colors[color_index];
        }
    }
}

res = initDivs(numParticles, color_list[0]);