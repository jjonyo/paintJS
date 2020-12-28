const colors_control=document.querySelector('.controls__colors');



function clickHandler(event){
    const target=event.target;
    const color=target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}

colors_control.addEventListener("click",clickHandler);