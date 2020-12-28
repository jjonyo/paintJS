const colors_control=document.querySelector('.controls__colors');



function clickHandler(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
}

colors_control.addEventListener("click",clickHandler);