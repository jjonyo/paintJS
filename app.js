const canvas=document.querySelector('#jsCanvas');
const ctx=canvas.getContext('2d');
let jsRange=document.querySelector('#jsRange');
const mode=document.querySelector('#jsMode');
const save=document.querySelector('#jsSave');

const INITIAL_COLOR='#2c2c2c';
canvas.width=700;
canvas.height=700;
ctx.strokeStyle=INITIAL_COLOR;
ctx.fillStyle=INITIAL_COLOR;


let painting=false;
let filling=false;

function setMouse(state){
    painting=state;
}

function mouseMoveHandler(event){
    const X=event.offsetX;
    const Y=event.offsetY;

    ctx.lineWidth=jsRange.value;
    
    if (!painting){
        ctx.beginPath();
        ctx.moveTo(X,Y);
    }else{
        ctx.lineTo(X,Y);
        ctx.stroke();
    }
}

function mouseDownHandler(event){
    setMouse(true);
    if (filling){
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}

function mouseUpHandler(event){
    setMouse(false);
}

function mouseOutHandler(event){
    setMouse(false);
}

function fillHandler(event){
    if (filling === true){
        filling=false;
        this.innerHTML='Fill';
    }
    else{
        filling=true;
        this.innerHTML='Paint';
    }
}

function saveHandler(event){
    const imageURL=canvas.toDataURL("image/png");
    console.log(imageURL);
    const link=document.createElement("a");
    link.href=imageURL;
    link.download='paintJS';
    link.click();
}

function contextHandler(event){
    event.preventDefault();
}

if (canvas){
    canvas.addEventListener("mousemove",mouseMoveHandler);
    canvas.addEventListener("mousedown",mouseDownHandler);
    canvas.addEventListener("mouseup",mouseUpHandler);
    canvas.addEventListener("mouseout",mouseOutHandler);
    canvas.addEventListener("contextmenu",contextHandler);
}

if(mode){
    mode.addEventListener("click",fillHandler);
}

if (save){
    save.addEventListener("click",saveHandler);
}