const canvas=document.querySelector('#jsCanvas');
const ctx=canvas.getContext('2d');
let jsRange=document.querySelector('#jsRange');


canvas.width=800;
canvas.height=900;
ctx.strokeStyle='#2c2c2c';
let painting=false;

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
}

function mouseUpHandler(event){
    setMouse(false);
}

function mouseOutHandler(event){
    setMouse(false);
}


if (canvas){
    canvas.addEventListener("mousemove",mouseMoveHandler);
    canvas.addEventListener("mousedown",mouseDownHandler);
    canvas.addEventListener("mouseup",mouseUpHandler);
    canvas.addEventListener("mouseout",mouseOutHandler);
}
